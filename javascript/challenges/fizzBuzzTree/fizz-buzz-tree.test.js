'use strict';

const fizzBuzzTree = require('./fizz-buzz-tree.js');

const KTree = require('../../data-structures/tree/tree.js');

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.leftChild =left;
    this.rightChild = right;
  }
}

const iNode = new Node (10);
const hNode = new Node (30);
const gNode = new Node (4);
const fNode = new Node (9, gNode);
const eNode = new Node (6, hNode, iNode);
const dNode = new Node (15);
const cNode = new Node (5, null, fNode);
const bNode = new Node (7, dNode, eNode);
const rootNode = new Node (2, bNode, cNode);

// ==================================================================
// Can successfully instantiate an empty tree

it ('should instantiate an empty tree', () => {
  const tree = new KTree();
  expect(tree).toBeTruthy();
});

// ==================================================================
// Can successfully return a collection from a preorder traversal

it ('should return a collection from a preorder traversal', () => {
  const tree = new KTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.preOrder()).toEqual([2,7,15,6,30,10,5,9,4]);
});

// ==================================================================
// Can successfully run fizzbuzz

it ('should change tree values according to fizzbuzz rules', () => {
  const tree = new KTree(rootNode);
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(2);
  expect(tree.preOrder()).toEqual([2,7,15,6,30,10,5,9,4]);
  fizzBuzzTree(tree);
  expect(tree.preOrder()).toEqual(['2','7','FizzBuzz','Fizz','FizzBuzz','Buzz','Buzz','Fizz','4']);
});
