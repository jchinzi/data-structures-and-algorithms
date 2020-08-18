
class Node {
  
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {//insert a new head node

    this.head = new Node(value, this.head);

  }

  append(value) {//insert a new node at the end of the list

    const newNode = new Node(value);

    if(!this.head){//beginning a new list (no existing head)
      this.head = new Node(value);
      return;
    }
    // Create a while loop to find the end of the list
    let currentNode = this.head;
    while(currentNode.next){//checks for truthiness of currentNode.next - null will fail the test
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertBefore(value, newVal) {
    const newNode = new Node(newVal);

    if(!this.head){
      console.log(`List is currently empty - beginning list with new Node ${newVal}`);
      this.head = newNode;
      return;
    }

    if(!this.includes(value)){
      console.log(`${value} is not included in the list - unable to insert new node of ${newVal} before ${value}.`);
      return;
    }

    let currentNode = this.head;

    if(currentNode.value === value){ //checks FIRST node (edge case)
      this.head = new Node(newVal, currentNode);
      return
    } else {
      while(currentNode.next){
        if(currentNode.next.value === value){
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

  }

  insertAfter(value, newVal){
    const newNode = new Node(newVal);

    if(!this.head){
      console.log(`List is currently empty - beginning list with new Node ${newVal}`);
      this.head = newNode;
      return;
    }

    if(!this.includes(value)){
      console.log(`${value} is not included in the list - unable to insert new node of ${newVal} after ${value}.`);
      return;
    }

    let currentNode = this.head;

    while(currentNode.next){
      if(currentNode.value === value){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
    if(currentNode.value === value){ //checks LAST node (edge case)
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return
    }
  }

  includes(value) {
    if(!this.head){
      return false;
    }

    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.value === value){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === value){
      return true;
    } else {
      return false;
    }
  }

  toString() {

    if(!this.head){
      return 'NULL';
    }
    let currentNode = this.head;
    

    let stringOfValues = '';
    while(currentNode.next){
      stringOfValues = `${stringOfValues}{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return `${stringOfValues}{ ${currentNode.value} } -> NULL`;
  }

  kthFromEnd(k) {
    if(!this.head){
      return 'Exception: list contains no nodes';
    }
    if(k<0){
      return 'Exception: please provide a k value of zero or greater';
    }
    let listLength = 0;
    let currentNode = this.head;

    while(currentNode.next){
      listLength++;
      currentNode=currentNode.next;
    }
    let targetNode = (listLength - k);
    if (targetNode<0){
      return 'Exception: List does not contain sufficient nodes for request';
    } else {
      currentNode = this.head;
      let kCounter = 0
      while(kCounter < targetNode){
        kCounter++;
        currentNode = currentNode.next;
      }
    }
  return currentNode.value;
  }

}

module.exports = LinkedList;

// '{ bananas } -> { apples } -> { cucumbers } -> NULL'
