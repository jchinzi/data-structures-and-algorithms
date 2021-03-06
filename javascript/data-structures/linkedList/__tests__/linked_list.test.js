const LinkedList = require('../linked-list.js');

it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
})

it('should add to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
})

it('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
})

it('should append to empty list', () => {
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
})

it('should append to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(undefined);
})

it('should add newVal to a list BEFORE the provided value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  ll.insertBefore('apples', 'watermelon')
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('watermelon');
  expect(ll.head.next.next.value).toBe('apples');
  expect(ll.head.next.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.next).toBe(undefined);
})

it('should add newVal to a list BEFORE the provided value even if the provided value is the first node in the list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  ll.insertBefore('bananas', 'watermelon')
  expect(ll.head.value).toBe('watermelon');
  expect(ll.head.next.value).toBe('bananas');
  expect(ll.head.next.next.value).toBe('apples');
  expect(ll.head.next.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.next).toBe(undefined);
})

it('should add newVal to a list AFTER the provided value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  ll.insertAfter('apples', 'watermelon')
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('watermelon');
  expect(ll.head.next.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.next).toBe(undefined);
})

it('should add newVal to a list AFTER the provided value even if the provided value is the last node in the list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  ll.insertAfter('cucumbers', 'watermelon')
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.value).toBe('watermelon');
  expect(ll.head.next.next.next.next).toBe(undefined);
})

it('should return false when checking an empty list for an included value', () => {
  const ll = new LinkedList();
  expect(ll.includes('apples')).toBe(false);
})

it('should return false when checking a list for an included value that is not present', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.includes('oranges')).toBe(false);
})

it('should return true when checking a list for an included value that is present', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.includes('apples')).toBe(true);
  expect(ll.includes('bananas')).toBe(true);
  expect(ll.includes('cucumbers')).toBe(true);
})

it('should return an empty string when calling toString on an empty list', () => {
  const ll = new LinkedList();
  expect(ll.toString()).toBe('NULL');
})

it('should return a string in the style of "{ a } -> { b } -> { c } -> NULL" when calling toString on a list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { apples } -> { cucumbers } -> NULL');
})

it('should return the value of the node k before the end when a valid k is provided', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.kthFromEnd(1)).toBe('apples');
})

it('should return the value of the node k before the end when k is the same as the length of the list - i.e. the first value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.kthFromEnd(2)).toBe('bananas');
})

it('should return an exception if k is not a positive integer', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.kthFromEnd(-1)).toBe('Exception: please provide a k value of zero or greater');
})

it('should return the value of the node k before the end even with a single node list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.kthFromEnd(0)).toBe('apples');
})