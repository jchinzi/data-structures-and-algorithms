'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks.js');


class PseudoQueue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

// ENQUEUE inserts value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value){
    
    this.stack1.push(value);

  }

// DEQUEUE  extracts a value from the PseudoQueue, using a first-in, first-out approach
  // Should raise exception when called on empty pseudoqueue
  dequeue() {

    if(!this.stack1.top){
      throw new RangeError('Cannot Dequeue From Empty Pseudoqueue');
    }

    let currentNode = this.stack1.top;
    while(currentNode){
      currentNode = currentNode.next;
      this.stack2.push(this.stack1.pop());
    }

    let returnValue = this.stack2.pop();

    currentNode = this.stack2.top;
    while(currentNode){
      currentNode = currentNode.next;
      this.stack1.push(this.stack2.pop());
    }

    return returnValue;

  }

}

module.exports = PseudoQueue;
