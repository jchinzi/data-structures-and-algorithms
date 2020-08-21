'use strict';

class Node {
  
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  
}

class Stack {

  constructor() {
    this.top = null;
  }

// PUSH takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value){
    
    this.top = new Node(value, this.top);

  }

// POP does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  // Should raise exception when called on empty stack
  pop() {

    if(this.isEmpty()){
      throw new RangeError('Cannot Pop From Empty Stack');
    }

    let formerTop = this.top;
    this.top = this.top.next;
    formerTop.next = null;
    return formerTop.value;

  }

// PEEK does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  // Should raise exception when called on empty stack
  peek() {
    
    if(this.isEmpty()){
      throw new RangeError('Cannot Peek Empty Stack');
    }
    
    return this.top.value;
  }

// takes no argument, and returns a boolean indicating whether or not the stack is empty
  isEmpty() {
    if(!this.top){
      return true;
    } else {
      return false;
  }}

}

module.exports = Stack;
