
class Node {
  
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
  
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(key, value) {//insert a new head node

    this.head = new Node(key, value, this.head);

  }

  append(key, value) {//insert a new node at the end of the list

    const newNode = new Node(key, value);

    if(!this.head){//beginning a new list (no existing head)
      this.head = new Node(key, value);
      return;
    }
    // Create a while loop to find the end of the list
    let currentNode = this.head;
    while(currentNode.next){//checks for truthiness of currentNode.next - null will fail the test
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }


  includes(key) {
    if(!this.head){
      return false;
    }

    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.key === key){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.key === key){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = {
  Node: Node,
  LinkedList: LinkedList,
};
