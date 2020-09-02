'use strict';

const ExtendedBinaryTree = require('./breadth-first.js');

// ==================================================================
// Sample Tree SetUp

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

const iNode = new Node (11);
const hNode = new Node (5);
const gNode = new Node (4);
const fNode = new Node (9, gNode);
const eNode = new Node (6, hNode, iNode);
const dNode = new Node (2);
const cNode = new Node (5, null, fNode);
const bNode = new Node (7, dNode, eNode);
const rootNode = new Node (2, bNode, cNode);

// ==================================================================
// Can successfully instantiate an empty tree

it ('should instantiate an empty tree', () => {
  const tree = new ExtendedBinaryTree();
  expect(tree).toBeTruthy();
});
// ==================================================================
// Can successfully return a collection from a preorder traversal

it ('should return a collection from a preorder traversal', () => {
  const tree = new ExtendedBinaryTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.preOrder()).toEqual([2,7,2,6,5,11,5,9,4]);
});

// ==================================================================
// Can successfully return a collection from an inorder traversal

it ('should return a collection from an inorder traversal', () => {
  const tree = new ExtendedBinaryTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.inOrder()).toEqual([2,7,5,6,11,2,5,4,9]);
});


// ==================================================================
// Can successfully return a collection from a postorder traversal

it ('should return a collection from a postorder traversal', () => {
  const tree = new ExtendedBinaryTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.postOrder()).toEqual([2,5,11,6,7,4,9,5,2]);
});

// ==================================================================
// Can successfully return a collection from a breadth first traversal

it ('should return a collection from a breadth first traversal', () => {
  const tree = new ExtendedBinaryTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.breadthFirst(tree)).toEqual([2,7,5,2,6,9,5,11,4]);
});