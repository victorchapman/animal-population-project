import React, { useState } from 'react';
import { calcLitterSize3 } from './util3';
import '../global.css';

//array with different animals, which include their reproductive variables, emoji, and recommened input
//to save RAM, because this project uses a lot of it.
const animalArray = [
  ['Cat', [4, 4, 2, 6], '😺', '1-21'],
  ['Sperm Whale', [108, 108, 16, 1], '🐋', '1-530'],
  ['Rat', [1, 1, 2, 12], '🐀', '1-6'],
  ['Chimpanzee', [156, 156, 36, 1], '🐵', '1-900'],
  ['Bald Eagle', [48, 48, 12, 3], '🦅', '1-200'],
];
//React (Javascript Framework) Hook where you can have front end code and logic
const AnimalForm = () => {
  //three pieces of "the state"

  //animal type is where I house the type of animal from the animal array.
  //The default is set to cat which is at index 0
  const [animalType, setAnimalType] = useState(animalArray[0]);
  //The litterSize is the amount of descendants produced from the function
  const [litterSize, setLitterSize] = useState(0);
  //The month amount is a user inputed value that is sent to the function
  const [month, setMonth] = useState(0);
  //The update months function just sets the amount of months to the amount the user put in
  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };
  //This function just sets the animal type depending on what animal
  //you selected.
  const updateAnimal = (e) => {
    if (e.target.value === 'Cat') {
      setAnimalType(animalArray[0]);
    }
    if (e.target.value === 'Whale') {
      setAnimalType(animalArray[1]);
    }
    if (e.target.value === 'Rat') {
      setAnimalType(animalArray[2]);
    }
    if (e.target.value === 'Chimpanzee') {
      setAnimalType(animalArray[3]);
    }
    if (e.target.value === 'Eagle') {
      setAnimalType(animalArray[4]);
    }
    //resets litter size to 0 when user puts a value in
    setLitterSize(0);
  };
  //Gets the descendants/litter size from function
  const getLitterSize = () => {
    const response = calcLitterSize3(...animalType[1], month);
    console.log(response);
    setLitterSize(response);
  };

  return (
    <div className="body">
      <h2>Descendants from Best Case Scenario</h2>
      <p>
        Animal type: <span>{animalType[0]}</span>
      </p>
      <select onChange={updateAnimal} name="animal" id="animal">
        <option value="Cat">Cat</option>
        <option value="Whale">Sperm Whale</option>
        <option value="Rat">Rat</option>
        <option value="Chimpanzee">Chimpanzee</option>
        <option value="Eagle">Eagle</option>
      </select>
      <p>
        Enter amount of months <span>between {animalType[3]}:</span>
      </p>
      <input
        onChange={updateMonths}
        type="number"
        placeholder={animalType[3]}
      />
      <button onClick={getLitterSize}>See Descendants</button>
      <p>Amount of Descendants: {litterSize}</p>
      <p>Visulatization:</p>
      <div>
        {[...Array(litterSize)].map((element, index) => (
          <span>{animalType[2]}</span>
        ))}
      </div>
    </div>
  );
};

export default AnimalForm;
