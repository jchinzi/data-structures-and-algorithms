'use strict'

const {Graph} = require('./df-graph');
const Stack = require('../../stacksAndQueues/stacks');

class dfGraph extends Graph {

  constructor(){

    super();

  }

  dfTraversal(node){

    let visitedSet = new Set();
    let traversalStack = new Stack();
    traversalStack.push(node);
    while(!traversalStack.isEmpty()){
      let currentTop = traversalStack.peek();
      visitedSet.add(currentTop.value);
      let allChildrenVisited = true;
      let childrenOfTop = this.getNeighbors(currentTop);
      childrenOfTop.forEach(child => {
        if (!visitedSet.has(child.destination.value)){
          allChildrenVisited = false;
          traversalStack.push(child.destination);
        }
      })
      if(allChildrenVisited){
        traversalStack.pop();
      } 
    }
    return visitedSet;
  }
  
  }


module.exports = dfGraph;