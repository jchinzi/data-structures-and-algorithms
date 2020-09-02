'use strict';

const BinaryTree = require('../../data-structures/tree/tree.js');

const Queue = require('../../data-structures/stacksAndQueues/queues.js');

// ======================================================

class ExtendedBinaryTree extends BinaryTree {

  constructor(root){
    super(root);
  }

  breadthFirst(tree){

    if(!tree.root){
      return;
    }

    const output = [];

    let breadthQueue = new Queue();
    breadthQueue.enqueue(tree.root);

    while(!breadthQueue.isEmpty()){
      
      let formerFront = breadthQueue.dequeue();
      output.push(formerFront.value);

      if(formerFront.leftChild){
        breadthQueue.enqueue(formerFront.leftChild);
      }
      if(formerFront.rightChild){
        breadthQueue.enqueue(formerFront.rightChild);
      }
    }
    return output;
  }

}


module.exports = ExtendedBinaryTree;