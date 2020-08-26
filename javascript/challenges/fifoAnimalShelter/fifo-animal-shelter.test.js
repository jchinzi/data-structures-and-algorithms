const AnimalShelter = require('./fifo-animal-shelter');

// =============================================
// ==========Test Animals=======================

class Animal {
  
  constructor(value, type, next) {
    this.value = value;
    this.type = type;
    this.next = next;
  }
}

let animal1 = new Animal ('Fido', 'dog');
let animal2 = new Animal ('Whiskers', 'cat');
let animal3 = new Animal ('Spot', 'dog');
let animal4 = new Animal ('Tuna', 'cat');
let animal5 = new Animal ('Polly', 'parrot');

// =============================================
// =================Tests=======================


it ('should be a class', () => {
  expect(AnimalShelter).toBeDefined();
});


it('Should successfully enqueue an animal into  an empty shelter', () => {

  const shelter = new AnimalShelter;
  shelter.enqueue(animal1);
  expect(shelter.front.value).toBe('Fido');
  expect(shelter.rear.value).toBe('Fido');

})

it('Should successfully enqueue multiple pets into a shelter', () => {

  const shelter = new AnimalShelter;
  shelter.enqueue(animal1);
  shelter.enqueue(animal2);
  shelter.enqueue(animal3);
  shelter.enqueue(animal4);
  expect(shelter.front.value).toBe('Fido');
  expect(shelter.rear.value).toBe('Tuna');

})

it('Should successfully dequeue a cat when requested', () => {

  const shelter = new AnimalShelter;
  shelter.enqueue(animal1);
  shelter.enqueue(animal2);
  shelter.enqueue(animal3);
  shelter.enqueue(animal4);
  expect(shelter.dequeue('cat')).toBe('Whiskers');
  expect(shelter.front.value).toBe('Fido');
  expect(shelter.rear.value).toBe('Tuna');

})

it('Should successfully dequeue a dog when requested', () => {

  const shelter = new AnimalShelter;
  shelter.enqueue(animal1);
  shelter.enqueue(animal2);
  shelter.enqueue(animal3);
  shelter.enqueue(animal4);
  expect(shelter.dequeue('dog')).toBe('Fido');
  expect(shelter.front.value).toBe('Whiskers');
  expect(shelter.rear.value).toBe('Tuna');

})

it('Should throw an error when trying to dequeue from an empty shelter', () => {

  const shelter = new AnimalShelter;
  expect(() => shelter.dequeue(cat).toThrow('Sorry!  There are no pets available at the shelter right now.'));

})

it('Should throw an error when trying to enqueue an animal  other than a dog or a cat into a shelter', () => {

  const shelter = new AnimalShelter;
  expect(() => shelter.enqueue(animal5).toThrow('Sorry!  This shelter only accepts cats and dogs.'));

})

it('Should throw an error when trying to dequeue an animal  other than a dog or a cat into a shelter', () => {

  const shelter = new AnimalShelter;
  shelter.enqueue(animal1);
  shelter.enqueue(animal2);
  expect(shelter.dequeue('dog')).toBe('Fido');
  expect(() => shelter.dequeue(parrot).toThrow(`Sorry!  We don't have a ${pref} available at this time.`));

})