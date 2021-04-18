class Animal {
  constructor(age, minAge, refrTime, pregTime) {
    this.age = age;
    this.minAge = minAge;
    this.refrTime = refrTime;
    this.pregTime = pregTime;
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
  pregTime,
  litterSize,
  months
) => {
  const AnimalArray = [];

  let time = 0;
  const mother = new Animal(momAge, minAge, 0, pregTime);
  AnimalArray.push(mother);

  while (time < months) {
    AnimalArray.forEach((animal) => {
      if (animal.age >= minAge) {
        if (animal.decreaseRefrTime() === 'litter ready') {
          for (let i = 0; i < litterSize; i++) {
            AnimalArray.push(new Animal(0, minAge, pregTime));
          }
        }
      }
      animal.age += 1;
    });
    time += 1;
  }
  return AnimalArray.length - 1;
};
