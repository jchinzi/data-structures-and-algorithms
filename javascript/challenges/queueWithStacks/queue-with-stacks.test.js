'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks.js');

const PseudoQueue = require('./queue-with-stacks');

it ('should be a class', () => {
  expect(PseudoQueue).toBeDefined();
});


// Can successfully instantiate an empty pseudoqueue

it ('should instantiate an empty pseudoqueue', () => {
  const pseudoqueue = new PseudoQueue();
  expect(pseudoqueue).toBeDefined();
})


// Can successfully enqueue into an empty pseudoqueue

it('Should successfully enqueue into an empty pseudoqueue', () => {

  const pseudoqueue = new PseudoQueue();
  pseudoqueue.enqueue('apples');
  expect(pseudoqueue.stack1.peek()).toBe('apples');

})

// Can successfully enqueue into a non-empty pseudoqueue

it('Should successfully enqueue into an empty pseudoqueue', () => {

  const pseudoqueue = new PseudoQueue();
  pseudoqueue.enqueue('apples');
  pseudoqueue.enqueue('bananas');
  pseudoqueue.enqueue('cucumbers');
  expect(pseudoqueue.stack1.peek()).toBe('cucumbers');

})

// Calling dequeue on an empty pseudoqueue raises exception

it ('should not allow dequeue from an empty pseudoqueue', () => {
  const pseudoqueue = new PseudoQueue();
  expect(pseudoqueue.stack1.isEmpty()).toBe(true);
  expect(pseudoqueue.stack2.isEmpty()).toBe(true);
  expect(() => pseudoqueue.dequeue()).toThrow(RangeError);
  expect(() => pseudoqueue.dequeue()).toThrow('Cannot Dequeue From Empty Pseudoqueue');
})

// Can successfully dequeue from a non-empty pseudoqueue

it('Should successfully dequeue from an empty pseudoqueue', () => {

  const pseudoqueue = new PseudoQueue();
  pseudoqueue.enqueue('apples');
  pseudoqueue.enqueue('bananas');
  pseudoqueue.enqueue('cucumbers');
  pseudoqueue.enqueue('daikon');
  pseudoqueue.enqueue('eggplant');
  expect(pseudoqueue.dequeue()).toBe('apples');

})


it('Should successfully remove a dequeued node off the pseudoqueue', () => {

  const pseudoqueue = new PseudoQueue();
  pseudoqueue.enqueue('apples');
  pseudoqueue.enqueue('bananas');
  pseudoqueue.enqueue('cucumbers');
  pseudoqueue.enqueue('daikon');
  pseudoqueue.enqueue('eggplant');
  pseudoqueue.dequeue();
  expect(pseudoqueue.stack1.peek()).toBe('eggplant');

})
