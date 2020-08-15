
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

}

module.exports = LinkedList;

// '{ bananas } -> { apples } -> { cucumbers } -> NULL'
