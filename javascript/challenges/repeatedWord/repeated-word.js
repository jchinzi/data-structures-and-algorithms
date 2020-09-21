// Write a function that accepts a lengthy string parameter.
// Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

'use strict';

const HashTable = require('./word-hash');

function repeatedWord(string){
	let stringArray = string.split(' ');
  const wordHash = new HashTable(stringArray.length);
  for(let i=0; i<stringArray.length; i++){
    let word = stringArray[i];
    word = word.toLowerCase();
    word = word.replace(/[.,!]/g,"");
    if(wordHash.contains(word)){
      return word;
    }
		else {
      wordHash.add(word,word);
    }
  }
  throw new Error('No repeating words');
}

module.exports = repeatedWord;