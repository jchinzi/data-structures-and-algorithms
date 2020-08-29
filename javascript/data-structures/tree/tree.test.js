'use strict';

const BinaryTree = require('./tree.js');

// ==================================================================
// Sample Tree SetUp

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

const fNode = new Node ('F');
const eNode = new Node ('E');
const dNode = new Node ('D');
const cNode = new Node ('C', fNode);
const bNode = new Node ('B', dNode, eNode);
const aNode = new Node ('A', bNode, cNode);

// ==================================================================
// Can successfully instantiate an empty tree

it ('should instantiate an empty tree', () => {
  const tree = new BinaryTree();
  expect(tree).toBeTruthy();
});

// ==================================================================
// Can successfully instantiate a tree with a single root node

it ('should instantiate a tree with a single root node', () => {
  const tree = new BinaryTree(dNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe('D');
});

// ==================================================================
// Can successfully add a left child and right child to a single root node

it ('should be able to add a left and right child to a single root node', () => {
  const tree = new BinaryTree(bNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe('B');
  expect(tree.root.leftChild.value).toBe('D');
  expect(tree.root.rightChild.value).toBe('E');
});

// ==================================================================
// Can successfully return a collection from a preorder traversal

it ('should return a collection from a preorder traversal', () => {
  const tree = new BinaryTree(aNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe('A');
  expect(tree.preOrder()).toEqual(['A','B','D','E','C','F']);
});

// ==================================================================
// Can successfully return a collection from an inorder traversal

it ('should return a collection from an inorder traversal', () => {
  const tree = new BinaryTree(aNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe('A');
  expect(tree.inOrder()).toEqual(['D','B','E','A','F','C']);
});


// ==================================================================
// Can successfully return a collection from a postorder traversal

it ('should return a collection from a postorder traversal', () => {
  const tree = new BinaryTree(aNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe('A');
  expect(tree.postOrder()).toEqual(['D','E','B','F','C','A']);
});
