'use strict';

const {Node, Graph} = require('../../data-structures/graph/graph');
const tripPlanner = require('./get-edge');

// Test Graph Components

let pandora = new Node('Pandora');
let arendelle = new Node('Arendelle');
let monstropolis = new Node('Monstropolis');
let metroville = new Node('Metroville');
let naboo = new Node('Naboo');
let narnia = new Node('Narnia');

const graph = new Graph();
graph.addNode(pandora);
graph.addNode(arendelle);
graph.addNode(monstropolis);
graph.addNode(metroville);
graph.addNode(naboo);
graph.addNode(narnia);
graph.addEdge(pandora,arendelle, 150);
graph.addEdge(pandora,metroville, 82)
graph.addEdge(arendelle,metroville, 99);
graph.addEdge(arendelle,monstropolis, 42);
graph.addEdge(metroville, narnia, 37);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(metroville, monstropolis, 105);
graph.addEdge(monstropolis, naboo, 73);
graph.addEdge(narnia, naboo, 250);



it ('Should return the boolean true and a cost for a single direct flight', () => {
  expect(tripPlanner(graph, ['Metroville', 'Pandora'])).toBe('true, $82');
})

it ('Should return the boolean true and a cost for multiple direct flight', () => {
  expect(tripPlanner(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toBe('true, $115');
})


it ('Should return the boolean false and a cost of $0 for indirect flights', () => {
  expect(tripPlanner(graph, ['Naboo', 'Pandora'])).toBe('false, $0');
})

it ('Should return the boolean false and a cost of $0 for any indirect flights', () => {
  expect(tripPlanner(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBe('false, $0');
})