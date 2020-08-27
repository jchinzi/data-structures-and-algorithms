const Stack = require('../../data-structures/stacksAndQueues/stacks.js');

const multiBracketValidation = require('./multi-bracket-validation.js');


it ('should return true if no brackets are passed in the string', () => {
  expect(multiBracketValidation('helloWorld')).toBe(true);
});

it ('should return true if brackets are balanced in the string', () => {
  expect(multiBracketValidation('[helloWorld]')).toBe(true);
});

it ('should return true if multiple brackets are balanced in the string', () => {
  expect(multiBracketValidation('[he(ll{o}Wor)ld]')).toBe(true);
});

it ('should return false if brackets are not closed in the string', () => {
  expect(multiBracketValidation('[he(ll{oWor)ld]')).toBe(false);
});

it ('should return false if brackets are not opened before they are closed in the string', () => {
  expect(multiBracketValidation('he(ll{o}Wor)ld][')).toBe(false);
});

it ('should return false if brackets are mismatched', () => {
  expect(multiBracketValidation('he(lloWor}ld')).toBe(false);
});