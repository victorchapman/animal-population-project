class Animal {
  constructor(age, minAge, refrTime, pregTime) {
    this.age = age;
    this.minAge = minAge;
    this.refrTime = refrTime;
    this.pregTime = pregTime;
  }

  createLitter() {
    for (let i = 0; i < litterSize; i++) {
      AnimalArray.push(new Animal(0, 4, 2, 3));
    }
  }
  decreaseRefrTime() {
    if (this.refrTime === 0) {
      this.refrTime = this.pregTime;
      this.createLitter();
    } else {
      this.refrTime -= 1;
    }
  }
}

const AnimalArray = [];
let time = 0;
const months = 18;
const litterSize = 6;
const mother = new Animal(4, 4, 0, 3);
AnimalArray.push(mother);

while (time < months) {
  for (const animal of AnimalArray) {
    if (animal.age >= animal.minAge) {
      animal.decreaseRefrTime();
    }
    animal.age += 1;
  }
  time += 1;
}
console.log(AnimalArray.length - 1);
