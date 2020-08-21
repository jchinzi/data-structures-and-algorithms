'use strict'

class Node {
  
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  
}

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

// ENQUEUE takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value){

    if(this.isEmpty()){
      this.front = new Node(value);
      this.rear = this.front;
    } else {
      this.rear.next = new Node(value);
      this.rear = this.rear.next;
    }

  }

// DEQUEUE does not take any argument, removes the node from the front of the queue, and returns the node’s value.
  // Should raise exception when called on empty queue
  dequeue() {

    if(this.isEmpty()){
      throw new RangeError('Cannot Dequeue From Empty Queue');
    }

    let formerFront = this.front;
    this.front = this.front.next;
    formerFront.next = null;
    return formerFront.value;

  }

// PEEK does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
  // Should raise exception when called on empty queue
  peek() {

    if(this.isEmpty()){
      throw new RangeError('Cannot Peek From Empty Queue');
    }

    return this.front.value;

  }

// takes no argument, and returns a boolean indicating whether or not the queue is empty
  isEmpty() {

    if(!this.front){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Queue;
