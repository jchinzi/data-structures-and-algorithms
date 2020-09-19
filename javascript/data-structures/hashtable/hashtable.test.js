'use strict';

const Hashtable = require('./hashtable.js');

// Adding a key/value to your hashtable results in the value being in the data structure

it('should add new data in the correct spot', () => {
  const table = new Hashtable;
  let key = 'sample';
  let value = 'Some Stuff';
  let hashedKey = table.hash(key);
  table.add(key, value);
  expect(table.buckets[hashedKey].head).toMatchObject({"key": 'sample', "next": null, "value": "Some Stuff"});
})

// Retrieving based on a key returns the value stored

it('should retrieve a value accurately based on the provided key', () => {
  const table = new Hashtable;
  let key = 'sample';
  let value = 'Some Stuff';
  table.add(key, value);
  expect (table.get(key)).toBe(value);
})

// Successfully returns null for a key that does not exist in the hashtable

it('should return a null value when get is called on a key not in the table', () => {
  const table = new Hashtable;
  let key = 'sample';
  let value = 'Some Stuff';
  table.add(key, value);
  expect (table.get('not-sample')).toBe(null);
})

// Successfully handle a collision within the hashtable

// Successfully retrieve a value from a bucket within the hashtable that has a collision

it('should be able to add keys to a non-empty bucket and retrieve data from a bucket with multiple entries', () => {
  const table = new Hashtable;
  let key1 = 0;
  let value1 = 'Some Stuff';
  let key2 = 1;
  let value2 = 'Other Stuff';
  let hashedKey1 = table.hash(key1);
  let hashedKey2 = table.hash(key2);
  // confirm unique keys have the same hashed value
  expect(hashedKey1).toBe(hashedKey2);

  table.add(key1, value1);
  table.add(key2,value2);
  expect(table.get(key1)).toBe(value1);
  expect(table.get(key2)).toBe(value2);
})

// Successfully hash a key to an in-range value

it('should hash a key to an in-range value', () => {
  const table = new Hashtable;
  let key = 'sample';
  let hashedKey = table.hash(key);
  expect(hashedKey>=0).toBe(true);
  expect(hashedKey<1024).toBe(true);
})

// Consistently hash the same key the same way

it('should hash a given key to the same index every time', () => {
  const table = new Hashtable;
  let key = 'sample';
  let hashedKey1 = table.hash(key);
  let hashedKey2 = table.hash(key);
  let hashedKey3 = table.hash(key);

  expect(hashedKey1===hashedKey2).toBe(true);
  expect(hashedKey1===hashedKey3).toBe(true);
})

// Test the Contains method

it('should return the correct boolean when contains(key) is called', () => {
  const table = new Hashtable;
  let key = 'sample';
  let value = 'Some Stuff';
  table.add(key, value);

  expect(table.contains(key)).toBe(true);
  expect(table.contains('notTheKey')).toBe(false);
})
