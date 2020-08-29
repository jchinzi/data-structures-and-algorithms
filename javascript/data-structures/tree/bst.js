'use strict';

const BinaryTree = require('./tree.js');

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

// ======================================================

class BinarySearchTree extends BinaryTree {

  constructor(root){
    super(root);
  }

  add(value){

    let currentRoot = this.root;
    
    while(value < currentRoot.value){
      if (!currentRoot.leftChild){
        currentRoot.leftChild = new Node(value);
        break;
      } else {
        currentRoot = currentRoot.leftChild;
      }
    }
    
    while(value > currentRoot.value) {
      if (!currentRoot.rightChild){
        currentRoot.rightChild = new Node(value);
        break;
      } else {
        currentRoot = currentRoot.rightChild;
      }
    }
    
    // if(currentRoot.value === value){
    //   console.log('Value already present in tree');
    // }
  }

  contains(value){

    if(!this.root){
      return false;
    }

    let currentRoot = this.root;

    while(value < currentRoot.value){
      if (currentRoot.leftChild){
        currentRoot = currentRoot.leftChild;
      } else {
        return false;
      }
    }
    
    while(value > currentRoot.value){
      if (currentRoot.rightChild){
        currentRoot = currentRoot.rightChild;
      } else {
        return false;
      }
    }
    
    if (currentRoot.value === value){
      return true;
    } else {return false;}
  }

}

module.exports = BinarySearchTree;