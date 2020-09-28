'use strict'

const {Graph} = require('../graph/graph');
const Queue = require('../stacksAndQueues/queues');

class bfGraph extends Graph {

  constructor(){

    super();

  }

  bfTraversal(node){
    let targetNode;
    let returnSet = new Set();
    let traversalQueue = new Queue();
    this.vertexes.forEach(entry => {
      if(entry.value === node.value){
        targetNode = entry;
        traversalQueue.enqueue(targetNode);
      }
    })

    while(!traversalQueue.isEmpty()){
      let formerFront = traversalQueue.dequeue();
      returnSet.add(formerFront.value);

      formerFront.neighbors.forEach(edge => {
        if(!returnSet.has(edge.origin.value)){
          traversalQueue.enqueue(edge.origin);
          returnSet.add(edge.origin.value);
        }
        if(!returnSet.has(edge.destination.value)){
          traversalQueue.enqueue(edge.destination);
          returnSet.add(edge.destination.value);
        }
      })

    }

    return returnSet;

  }

}

module.exports = bfGraph;