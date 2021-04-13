// const monthsStartingAge = 4;
// const monthsBeforeFirstLitter = 0;
// const litterSize = 6;
// const months = 18;

const AnimalArray = [];

export const litterSize = ({
  monthsStartingAge,
  monthsBeforeFirstLitter,
  litterSize,
  months,
}) => {
  class Animal {
    constructor(age, refrTime) {
      this.minAge = 4;
      this.age = age;
      this.refrTime = refrTime;
    }

    createLitter() {
      for (let i = 0; i < litterSize; i++) {
        AnimalArray.push(new Animal(1, 2));
      }
    }
    decreaseRefrTime() {
      if (this.refrTime === 0) {
        this.refrTime = 3;
        this.createLitter();
      } else {
        this.refrTime -= 1;
      }
    }
  }

  let time = 0;

  const mother = new Animal(monthsStartingAge, monthsBeforeFirstLitter);

  catArray.push(mother);

  while (time < months) {
    AnimalArray.forEach((animal) => {
      if (animal.age >= 4) {
        animal.decreaseRefrTime();
      }
      animal.age += 1;
    });
    console.log('Month', time + 1);
    console.log('Number of cats', AnimalArray.length - 1);

    time += 1;
  }
};
