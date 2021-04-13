class Animal {
  constructor(age, minAge, refrTime) {
    this.age = age;
    this.minAge = minAge;
    this.refrTime = refrTime;
  }

  decreaseRefrTime() {
    if (this.refrTime === 0) {
      this.refrTime = 3;
      return 'litter ready';
    } else {
      this.refrTime -= 1;
    }
  }
}

const calcLitterSize2 = (momAge, minAge, refrTime, litterSize, months) => {
  const AnimalArray = [];

  let time = 0;
  const mother = new Animal(momAge, minAge, 0, litterSize);
  AnimalArray.push(mother);

  while (time < months) {
    AnimalArray.forEach((animal) => {
      if (animal.age >= minAge) {
        if (animal.decreaseRefrTime() === 'litter ready') {
          for (let i = 0; i < litterSize; i++) {
            AnimalArray.push(new Animal(1, minAge, refrTime));
          }
        }
      }
      animal.age += 1;
    });
    console.log('Month', time + 1);
    console.log('Number of cats', AnimalArray.length - 1);
    time += 1;
  }
};

console.log(calcLitterSize2(4, 4, 2, 6, 18));
