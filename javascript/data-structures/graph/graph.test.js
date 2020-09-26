'use strict'

const {Node, Graph} = require('./graph.js');

let testNode1 = new Node('Alpha');
let testNode2 = new Node('Beta');
let testNode3 = new Node('Gamma');


// Node can be successfully added to the graph

it ('Should allow a node to be added to a graph', () => {
  const graph = new Graph();
  expect(graph).toBeTruthy();
  expect(graph.size()).toBe(0);
  graph.addNode(testNode1);
  expect(graph.size()).toBe(1);
})

// An edge can be successfully added to the graph

it ('Should allow an edge to be successfully added to a graph', () => {
  const graph = new Graph();
  graph.addNode(testNode1);
  graph.addNode(testNode2);
  expect(graph.size()).toBe(2);
  graph.addEdge(testNode1,testNode2,'some distance');
  expect(graph.getNeighbors(testNode1)).toBe(Set);
})

// A collection of all nodes can be properly retrieved from the graph



// All appropriate neighbors can be retrieved from the graph



// Neighbors are returned with the weight between nodes included



// The proper size is returned, representing the number of nodes in the graph



// A graph with only one node and edge can be properly returned



// An empty graph properly returns null

