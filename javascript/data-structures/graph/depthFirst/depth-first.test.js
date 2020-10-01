'use strict'

const {Node} = require('./df-graph');
const dfGraph = require('./depth-first');

// Test Graph Components

let aNode = new Node('A');
let bNode = new Node('B');
let cNode = new Node('C');
let dNode = new Node('D');
let eNode = new Node('E');
let fNode = new Node('F');
let gNode = new Node('G');
let hNode = new Node('H');

it ('Should return the value of all nodes in the graph in the order that they were visited', () => {
  const graph = new dfGraph();
  graph.addNode(aNode);
  graph.addNode(bNode);
  graph.addNode(cNode);
  graph.addNode(dNode);
  graph.addNode(eNode);
  graph.addNode(fNode);
  graph.addNode(gNode);
  graph.addNode(hNode);
  expect(graph.size()).toBe(8);
  graph.addEdge(fNode,hNode);
  graph.addEdge(dNode,fNode);
  graph.addEdge(dNode,hNode);
  graph.addEdge(dNode,eNode);
  graph.addEdge(cNode,gNode);
  graph.addEdge(bNode,dNode);
  graph.addEdge(bNode,cNode);
  graph.addEdge(aNode,dNode);
  graph.addEdge(aNode,bNode);
  let setOfReturns = graph.dfTraversal(aNode);
  expect([...setOfReturns]).toStrictEqual(['A', 'B', 'C', 'G', 'D', 'E','H','F']);
})