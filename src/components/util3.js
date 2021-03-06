class Animal {
  constructor(age, pregTime, refrTime) {
    this.age = age;
    this.pregTime = pregTime;
    this.refrTime = refrTime;
  }

  createLitter(litterSize, AnimalArray, refrTime) {
    for (let i = 0; i < litterSize; i++) {
      AnimalArray.push(new Animal(0, refrTime, refrTime));
    }
  }
  decreasePregTime(litterSize, AnimalArray, refrTime) {
    if (this.pregTime === 0) {
      this.pregTime = this.refrTime;
      this.createLitter(litterSize, AnimalArray, refrTime);
    } else {
      this.pregTime -= 1;
    }
  }
}

export const calcLitterSize3 = (
  momAge,
  minAge,
  refrTime,
  litterSize,
  months
) => {
  const AnimalArray = [];
  let time = 0;
  const mother = new Animal(momAge, 0, refrTime);
  AnimalArray.push(mother);
  while (time < months) {
    for (const animal of AnimalArray) {
      if (animal.age >= minAge) {
        animal.decreasePregTime(litterSize, AnimalArray, refrTime);
      }
      animal.age += 1;
    }
    time += 1;
  }
  return AnimalArray.length - 1;
};
