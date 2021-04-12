const monthsStartingAge = 4;
const monthsBeforeFirstLitter = 0;
const litterSize = 6;
const months = 18;

const catArray = [];

class Cat {
  constructor(age, refrTime) {
    this.minAge = 4;
    this.age = age;
    this.refrTime = refrTime;
  }

  createLitter() {
    for (let i = 0; i < litterSize; i++) {
      catArray.push(new Cat(0, 2));
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

const mother = new Cat(monthsStartingAge, monthsBeforeFirstLitter);

catArray.push(mother);

while (time < 18) {
  catArray.forEach((cat) => {
    if (cat.age >= 4) {
      cat.decreaseRefrTime();
    }
    cat.age += 1;
  });
  console.log('Month', time + 1);
  console.log('Number of cats', catArray.length - 1);

  time += 1;
}
