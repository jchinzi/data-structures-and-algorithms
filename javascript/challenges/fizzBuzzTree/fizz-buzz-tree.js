'use strict';


function fizzBuzzTree(tree){

  if(!tree.root){
    return;
  }

  function _fizzBuzz(root){
    if(!root){
      return;
    }
    if((root.value % 3===0) && (root.value % 5===0)){
      root.value = 'FizzBuzz';
    } else if (root.value % 3===0){
      root.value = 'Fizz';
    } else if (root.value % 5===0){
      root.value = 'Buzz';
    } else {
      root.value = root.value.toString();
    }
    _fizzBuzz(root.leftChild);
    _fizzBuzz(root.rightChild);
  }

  _fizzBuzz(tree.root);

};

module.exports = fizzBuzzTree;