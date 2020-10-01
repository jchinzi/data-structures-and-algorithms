'use strict'

const {Node} = require('../graph');
const bfGraph = require('./breadth-first');

// Test Graph Components

let pandora = new Node('Pandora');
let arendelle = new Node('Arendelle');
let monstropolis = new Node('Monstropolis');
let metroville = new Node('Metroville');
let naboo = new Node('Naboo');
let narnia = new Node('Narnia');

it ('Should return the value of all nodes in the graph in the order that they were visited', () => {
  const graph = new bfGraph();
  graph.addNode(pandora);
  graph.addNode(arendelle);
  graph.addNode(monstropolis);
  graph.addNode(metroville);
  graph.addNode(naboo);
  graph.addNode(narnia);
  expect(graph.size()).toBe(6);
  graph.addEdge(pandora,arendelle);
  graph.addEdge(arendelle,metroville);
  graph.addEdge(arendelle,monstropolis);
  graph.addEdge(metroville, narnia);
  graph.addEdge(metroville, naboo);
  graph.addEdge(metroville, monstropolis);
  graph.addEdge(monstropolis, naboo);
  graph.addEdge(narnia, naboo);
  let setOfReturns = graph.bfTraversal(pandora);
  expect([...setOfReturns]).toStrictEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
})