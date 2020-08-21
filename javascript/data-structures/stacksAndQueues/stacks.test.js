'use strict';

const Stack = require('./stacks.js');

it ('should be a class', () => {
  expect(Stack).toBeDefined();
});

it ('should use isEmpty to identify an empty stack', () => {
  const stack = new Stack();
  expect (stack.isEmpty()).toBe(true);
})

it ('should use isEmpty to identify a non-empty stack', () => {
  const stack = new Stack();
  stack.push('apples');
  expect (stack.isEmpty()).toBe(false);
})

// Can successfully push onto a stack

it('Should successfully push onto a stack', () => {

  const stack = new Stack;
  stack.push('apples');
  expect(stack.peek()).toBe('apples');

})

// Can successfully push multiple values onto a stack

it('Should successfully push multiple values onto a stack', () => {

  const stack = new Stack;
  stack.push('apples');
  stack.push('bananas');
  stack.push('cucumbers');
  expect(stack.peek()).toBe('cucumbers');

})

// Can successfully pop off the stack

it('Should successfully return the value of a popped node', () => {

  const stack = new Stack;
  stack.push('apples');
  stack.push('bananas');
  expect(stack.pop()).toBe('bananas');

})

it('Should successfully remove a popped node off the stack', () => {

  const stack = new Stack;
  stack.push('apples');
  stack.push('bananas');
  stack.pop();
  expect(stack.peek()).toBe('apples');

})

// Can successfully empty a stack after multiple pops

it('Should successfully empty a stack after multiple pops', () => {

  const stack = new Stack;
  stack.push('apples');
  stack.push('bananas');
  stack.push('cucumbers');
  stack.pop();
  stack.pop();
  stack.pop();
  expect(stack.isEmpty()).toBe(true);

})

// Can successfully peek the next item on the stack

// --> Peek tested thoroughly in other test cases

// Can successfully instantiate an empty stack

it ('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
})

// Calling pop or peek on empty stack raises exception

it ('should not allow pop from an empty list', () => {
  const stack = new Stack;
  expect(stack.isEmpty()).toBe(true);
  expect(() => stack.pop()).toThrow(RangeError);
  expect(() => stack.pop()).toThrow('Cannot Pop From Empty Stack');
})

it ('should not allow peek from an empty list', () => {
  const stack = new Stack;
  expect(stack.isEmpty()).toBe(true);
  expect(() => stack.peek()).toThrow(RangeError);
  expect(() => stack.peek()).toThrow('Cannot Peek Empty Stack');
})

