'use strict';

class Node {  
// contains set of neighbors

  constructor(value) {
    this.value = value;
    this.neighbors = new Set();
  }

}

class Edge {
// contains 2 nodes (origin and destination)

  constructor(origin, destination, weight){
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
// contains a set of vertexes
  constructor(){
    this.vertexes = new Set();
  };

  addNode(node){
    // create new node with value
    let newNode = new Node(node.value);
    // add node to the declared vertex set
    this.vertexes.add(newNode);
    return newNode;
  }
  
/*
Note: I was trying to write a cleaner version of addEdge that doesn't include two full forEach loops, but it kept throwing errors so for now I'm keeping the long-form version

addEdge(origin, destination, weight){
  if(this.vertexes.has(origin) && this.vertexes.has(destination)){
    let myEdges = new Edge(origin, destination, weight);
    origin.neighbors.add(myEdges);
    destination.neighbors.add(myEdges);
  }
  else {
    throw new Error('Must connect two nodes that have previously been added to the graph');
  }
}
 */
  addEdge(origin, destination, weight){
  
    // Find origin in set
    let originNode;
    // Find destination in set
    let destinationNode;
    this.vertexes.forEach(node => {
      if(node.value === origin.value){
        originNode = node;
      }
      if(node.value === destination.value){
        destinationNode = node;
      }
    }
    )
    // If either node is not found, throw error
    if((originNode === undefined) || (destinationNode === undefined)){
      throw new Error('Must connect two nodes that have previously been added to the graph');
    }
      // Else, create a new Edge with those inputs
      let myEdges = new Edge(originNode, destinationNode, weight);
      this.vertexes.forEach(node => {
        if(node.value === origin.value){
          node.neighbors.add(myEdges);
        }
        if(node.value === destination.value){
          node.neighbors.add(myEdges);
        }
      }
      )
    
  }

  getNodes(){
    return this.vertexes; 
  }

  getNeighbors(node){
    // create a new set
    let myNeighbors = {};
    let targetNode;
    this.vertexes.forEach(entry => {
      if(entry.value === node.value){
        targetNode = entry;
      }
    })
    // check all neighbors, and add neighbors (and the weight of the edge) that are not the same as the node to our new set
    targetNode.neighbors.forEach(edge => {
      if(edge.origin.value===targetNode.value){
        myNeighbors[edge.destination.value]=(edge.weight);
      } else {
        myNeighbors[edge.origin.value]=(edge.weight);
      }
    })
    // return the new set
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