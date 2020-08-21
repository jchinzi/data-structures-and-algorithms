'use strict';

const Queue = require('./queues.js');

it ('should be a class', () => {
  expect(Queue).toBeDefined();
});

it ('should use isEmpty to identify an empty queue', () => {
  const queue = new Queue();
  expect (queue.isEmpty()).toBe(true);
})

it ('should use isEmpty to identify a non-empty queue', () => {
  const queue = new Queue();
  queue.enqueue('apples');
  expect (queue.isEmpty()).toBe(false);
})

// Can successfully enqueue into a queue

it('Should successfully enqueue into a queue', () => {

  const queue = new Queue;
  queue.enqueue('apples');
  expect(queue.peek()).toBe('apples');
  expect(queue.rear.value).toBe('apples');

})

// Can successfully enqueue multiple values into a queue

it('Should successfully enqueue into a queue', () => {

  const queue = new Queue;
  queue.enqueue('apples');
  queue.enqueue('bananas');
  queue.enqueue('cucumbers');
  expect(queue.peek()).toBe('apples');
  expect(queue.rear.value).toBe('cucumbers');

})


// Can successfully dequeue out of a queue the expected value

it('Should successfully return the value of a dequeued node', () => {

  const queue = new Queue;
  queue.enqueue('apples');
  queue.enqueue('bananas');
  queue.enqueue('cucumbers');
  expect(queue.dequeue()).toBe('apples');
  expect(queue.rear.value).toBe('cucumbers');

})

// Can successfully peek into a queue, seeing the expected value

// --> Peek tested thoroughly in other test cases


// Can successfully empty a queue after multiple dequeues

it('Should successfully remove a dequeued value from the queue', () => {

  const queue = new Queue;
  queue.enqueue('apples');
  queue.enqueue('bananas');
  queue.enqueue('cucumbers');
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.isEmpty()).toBe(true);

})

// Can successfully instantiate an empty queue

it ('should instantiate an empty queue', () => {
  const queue = new Queue();
  expect(queue).toBeDefined();
})

// Calling dequeue or peek on empty queue raises exception

it ('should not allow dequeue from an empty queue', () => {
  const queue = new Queue;
  expect(queue.isEmpty()).toBe(true);
  expect(() => queue.dequeue()).toThrow(RangeError);
  expect(() => queue.dequeue()).toThrow('Cannot Dequeue From Empty Queue');
})

it ('should not allow peek from an empty queue', () => {
  const queue = new Queue;
  expect(queue.isEmpty()).toBe(true);
  expect(() => queue.peek()).toThrow(RangeError);
  expect(() => queue.peek()).toThrow('Cannot Peek From Empty Queue');
})