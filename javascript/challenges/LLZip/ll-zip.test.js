const LinkedList = require('../../data-structures/linkedList/linked-list.js');
const zipLists = require('./ll-zip.js');

it('should zip list 1 & 2 together, beginning with 1', () => {
  const ll1 = new LinkedList();
  ll1.insert('A');
  ll1.append('B');
  ll1.append('C');
  ll1.append('D');
  ll1.append('E');
  const ll2 = new LinkedList();
  ll2.insert('1');
  ll2.append('2');
  ll2.append('3');
  ll2.append('4');
  ll2.append('5');
  zipLists(ll1, ll2);
  expect(ll1.head.value).toBe('A');
  expect(ll1.toString()).toBe('{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { 3 } -> { D } -> { 4 } -> { E } -> { 5 } -> NULL');
})

it('should zip single node lists', () => {
  const ll1 = new LinkedList();
  ll1.insert('A');
  const ll2 = new LinkedList();
  ll2.insert('1');
  zipLists(ll1, ll2);
  expect(ll1.head.value).toBe('A');
  expect(ll1.toString()).toBe('{ A } -> { 1 } -> NULL');
})

it('should zip list 1 & 2 together, provided uneven list lengths (1 is longer)', () => {
  const ll1 = new LinkedList();
  ll1.insert('A');
  ll1.append('B');
  ll1.append('C');
  ll1.append('D');
  ll1.append('E');
  const ll2 = new LinkedList();
  ll2.insert('1');
  ll2.append('2');
  ll2.append('3');
  zipLists(ll1, ll2);
  expect(ll1.head.value).toBe('A');
  expect(ll1.toString()).toBe('{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { 3 } -> { D } -> { E } -> NULL');
})

it('should zip list 1 & 2 together, provided uneven list lengths (2 is longer)', () => {
  const ll1 = new LinkedList();
  ll1.insert('A');
  ll1.append('B');
  ll1.append('C');
  const ll2 = new LinkedList();
  ll2.insert('1');
  ll2.append('2');
  ll2.append('3');
  ll2.append('4');
  ll2.append('5');
  zipLists(ll1, ll2);
  expect(ll1.head.value).toBe('A');
  expect(ll1.toString()).toBe('{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { 3 } -> { 4 } -> { 5 } -> NULL');
})
