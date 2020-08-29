'use strict';

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

// ======================================================

class BinaryTree {

  constructor(root = null){
    this.root = root;
  }

  preOrder() {

    const output = [];

    function _preOrder(root){
      if(!root){
        return;
      }
      output.push(root.value);
      _preOrder(root.leftChild);
      _preOrder(root.rightChild);
    }

    _preOrder(this.root);
    return output;

  }

  inOrder() {

    const output = [];

    function _inOrder(root){
      if(!root){
        return;
      }
      _inOrder(root.leftChild);
      output.push(root.value);
      _inOrder(root.rightChild);
    }

    _inOrder(this.root);
    return output;


  }

  postOrder() {

    const output = [];

    function _postOrder(root){
      if(!root){
        return;
      }
      _postOrder(root.leftChild);
      _postOrder(root.rightChild);
      output.push(root.value);
    }

    _postOrder(this.root);
    return output;

  }

}


module.exports = BinaryTree;