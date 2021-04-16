momAge = 4;
minAge = 4;
refrTime = 3;
litterSize = 6;

class Animal {
  constructor(age, minAge, refrTime) {
    this.age = age;
    this.minAge = minAge;
    this.pregTime = refrTime;
    this.refrTime = refrTime;
  }

  decreaseRefrTime() {
    if (this.refrTime === 0) {
      this.refrTime = this.pregTime;
      return 'litter ready';
    } else {
      this.refrTime -= 1;
    }
  }
}

export const calcLitterSize2 = (
  momAge,
  minAge,
  refrTime,
  litterSize,
  months
) => {
  const AnimalArray = [];

  let time = 0;
  const mother = new Animal(momAge, minAge, refrTime, litterSize);
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
    // console.log('Month', time + 1);
    // console.log('Number of cats', AnimalArray.length - 1);
    time += 1;
    console.log('Amount of cats', AnimalArray.length - 1);
  }
  return AnimalArray.length - 1;
};

// console.log(calcLitterSize2(4, 4, 2, 6, 18 + 3));

calcLitterSize2(4, 4, 3, 6, 18);
