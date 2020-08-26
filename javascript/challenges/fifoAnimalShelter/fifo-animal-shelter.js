'use strict'

// class Animal {
  
//   constructor(value, type, next) {
//     this.value = value;
//     this.type = type;
//     this.next = next;
//   }
// }

class AnimalShelter {

  constructor() {
    this.front = null;
    this.rear = null;
  }

// ENQUEUE adds an Animal object to the shelter
//    The Animal must be a dog or a cat
//    let animal = {
//      value: petName
//      type:  cat || dog
//    }

  enqueue(animal){

    if(animal.type !== 'dog' && animal.type !== 'cat'){
      throw new Error('Sorry!  This shelter only accepts cats and dogs.');
    }
    if(!this.front){
      this.front = animal;
      this.rear = this.front;
    } else {
      this.rear.next = animal;
      this.rear = this.rear.next;
    }

  }

// DEQUEUE takes an argument of pref and returns the first animal from the queue with a type matching that pref
  // Should raise exception when called on empty queue
  // Should return null if pref is anything other than dog or cat

  dequeue(pref) {

    if(!this.front){
      throw new Error('Sorry!  There are no pets available at the shelter right now.');
    }
    if(pref.toLowerCase() !== 'dog' && pref.toLowerCase() !== 'cat'){
      return null;
    }

    let currentAnimal = this.front;
    if(currentAnimal.type === pref.toLowerCase()){
      let yourNewPet = currentAnimal.value;
      this.front = currentAnimal.next;
      currentAnimal.next = null;
      return yourNewPet;
    }

    while(currentAnimal && currentAnimal.next.type !== pref.toLowerCase()){
      currentAnimal = currentAnimal.next;
    }

    if(!currentAnimal){
      throw new Error(`Sorry!  We don't have a ${pref} available at this time.`);
    }

    let yourNewPet = currentAnimal.next.value;
    currentAnimal.next = currentAnimal.next.next;
    return yourNewPet;

  }

}

module.exports = AnimalShelter;

