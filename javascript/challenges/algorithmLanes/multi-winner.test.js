const { BinarySearchTree } = require('./bst.js');
const findClosestBowler = require('./multi-winner');

it('should foo', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 102},
    {name:'Noob', score: 54},
  ]);

  expect(bst.root.value.score).toBe(97);
  expect(bst.root.right.value.score).toBe(102);

});

it('should get closest when over', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 102},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(...result).toBe('Lucky Pierre');

});

it('should get closest when under', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 99},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(...result).toBe('Lucky Pierre');

});

it('should get bullseye', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 100},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(...result).toBe('Lucky Pierre');

});

it('should account for ties (different numbers)', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 103},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect([...result]).toStrictEqual(['Jane Doe', 'Lucky Pierre']);

});

it('should account for ties (same numbers)', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 97},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect([...result]).toStrictEqual(['Jane Doe', 'Lucky Pierre']);

});

it('should account for ties (multiple hit target)', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 100},
    {name:'Lucky Pierre', score: 100},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect([...result]).toStrictEqual(['Jane Doe', 'Lucky Pierre']);

});



