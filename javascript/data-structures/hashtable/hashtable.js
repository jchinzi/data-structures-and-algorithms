'use strict';

const {LinkedList, Node} = require('./hashtable-ll.js');



class Hashtable {

  constructor(size=1024){
    this.buckets = new Array(size);
  }

  // no return value
  add(key, value){

    const index = this.hash(key);

    if(this.buckets[index] === undefined){
      this.buckets[index] = new LinkedList;
      this.buckets[index].insert(key,value);
    } else {
      this.buckets[index].append(key,value);
    }

  }

  //returns value associated with key
  get(key){

    const index = this.hash(key);
    const dataBucket = this.buckets[index];
    if(dataBucket === undefined){
      return null;
    } else {
      let currentBucket = dataBucket.head;
      while((currentBucket.key !== key) && (currentBucket.next)){
        currentBucket = currentBucket.next;
      }
      return currentBucket.value;
    }

  }

  // returns boolean
  contains(key){

    const index = this.hash(key);
    
    if(this.buckets[index] === undefined){
      return false;
    }

    if(this.buckets[index].head){
      let currentBucket = this.buckets[index].head;
      while(currentBucket){
        if(currentBucket.key === key){
          return true;
        } else {
          currentBucket = currentBucket.next;
        }
      }
      return false;
    }
  }

  // returns index within table range
  hash(key){
    let hashedSum = 0;
    for(let i=0; i<key.length; i++){
      let hashedChar = i*(key[i].charCodeAt());
      hashedSum = hashedSum + hashedChar;
    }
    let primeHash = hashedSum*599;

    return primeHash%1024;
  }

}

module.exports = Hashtable;