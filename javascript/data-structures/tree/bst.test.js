'use strict';

const BinarySearchTree = require('./bst.js');

// ==================================================================
// Sample Tree SetUp

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

const rootNode = new Node (23);

// ==================================================================
// Can successfully instantiate an empty tree

it ('should instantiate an empty tree', () => {
  const tree = new BinarySearchTree();
  expect(tree).toBeTruthy();
});

// ==================================================================
// Can successfully add to an empty tree

it ('should add to an empty tree', () => {
  const tree = new BinarySearchTree();
  tree.add(23);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(23);
});



// ==================================================================
// Can successfully instantiate a tree with a single root node

it ('should instantiate a tree with a single root node', () => {
  const tree = new BinarySearchTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(23);
});

// ==================================================================
// Can successfully add a left child and right child to a single root node

it ('should be able to add a left and right child to a single root node', () => {
  const tree = new BinarySearchTree(rootNode);
  expect(tree).toBeTruthy();
  tree.add(8);
  tree.add(42);
  expect(tree.root.value).toBe(23);
  expect(tree.root.leftChild.value).toBe(8);
  expect(tree.root.rightChild.value).toBe(42);
});

// ==================================================================
// Can successfully add several layers of values to a root node

it ('should be able to add several layers of values to a root node', () => {
  const tree = new BinarySearchTree(rootNode);
  expect(tree).toBeTruthy();
  tree.add(8);
  tree.add(42);
  tree.add(85);
  tree.add(105);
  expect(tree.root.value).toBe(23);
  expect(tree.root.leftChild.value).toBe(8);
  expect(tree.root.rightChild.value).toBe(42);
  expect(tree.root.rightChild.rightChild.value).toBe(85);
  expect(tree.root.rightChild.leftChild).toBe(null);
  expect(tree.root.rightChild.rightChild.rightChild.value).toBe(105);
  expect(tree.root.rightChild.rightChild.leftChild).toBe(null);
});

// ==================================================================
// Can accurately confirm whether values are present in the tree

it ('should be able to confirm or deny if a value is present', () => {
  const tree = new BinarySearchTree(rootNode);
  expect(tree).toBeTruthy();
  tree.add(8);
  tree.add(42);
  tree.add(85);
  tree.add(105);
  expect(tree.root.value).toBe(23);
  expect(tree.root.leftChild.value).toBe(8);
  expect(tree.root.rightChild.value).toBe(42);
  expect(tree.contains(105)).toBe(true);
  expect(tree.contains(45)).toBe(false);
});
