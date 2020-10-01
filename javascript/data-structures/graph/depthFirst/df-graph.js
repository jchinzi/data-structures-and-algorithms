'use strict';

class Node {  

  constructor(value) {
    this.value = value;
    // this.neighbors = {};
  }

}

class Edge {

  constructor(destination, weight){
    // this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
// contains a map of vertexes => Adjacency list of nodes and [neighbor, weight]
  constructor(){
    this.vertexes = new Map();
  };

  addNode(node){
    // create new node with value
    let newNode = new Node(node.value);
    // add node to the declared vertex map with an empty object for neighbors
    this.vertexes.set(newNode.value, []);
    return newNode;
  }
  
  addEdge(origin, destination, weight){
    // console.log('Vertexes', this.vertexes);
    // console.log('Origin', origin);
    // console.log('Destination', destination);
    if(!this.vertexes.has(origin.value)){
      console.log('Origin Error');
      throw new Error('Must connect two nodes that have previously been added to the graph');
    }
    if(!this.vertexes.has(destination.value)){
      console.log('Destination Error');
      throw new Error('Must connect two nodes that have previously been added to the graph');
    }


      // Else, create a new Edge with those inputs
      let myEdgeToDestination = new Edge(destination, weight);
      let myEdgeToOrigin = new Edge(origin, weight);

      let originNeighbors = this.vertexes.get(origin.value);
      // console.log('Origin Neighbors', originNeighbors);
      let destinationNeighbors = this.vertexes.get(destination.value);
      originNeighbors.push(myEdgeToDestination);
      destinationNeighbors.push(myEdgeToOrigin);
      // console.log('Vertexes Now', this.vertexes);
  }

  getNodes(){
    return this.vertexes; 
  }

  getNeighbors(node){
    let myNeighbors = this.vertexes.get(node.value);
    return myNeighbors;
  }

  size(){
    // return the set size
    return this.vertexes.size;
  }

}

module.exports = {
  Graph,
  Node,
};