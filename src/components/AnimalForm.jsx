import React, { useState } from 'react';
import { calcLitterSize3 } from './util3';
import '../global.css';

const animalArray = [
  ['Cat', [4, 4, 2, 6], '😺', '1-21'],
  ['Sperm Whale', [216, 216, 18, 1], '🐋', '1-500'],
  ['Rat', [1, 1, 2, 12], '🐀', '1-9'],
  ['Chimpanzee', [156, 156, 36, 1], '🐵', '1-400'],
];

const AnimalForm = () => {
  const [animalType, setAnimalType] = useState(animalArray[0]);
  const [litterSize, setLitterSize] = useState(0);
  const [month, setMonth] = useState(0);

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };

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
    setLitterSize(0);
  };

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
      {/* <div>
        {animalEmojiArray.map((cat) => {
          return <span>{cat}</span>;
        })}
      </div> */}
      <p>Visulatization:</p>
      <div>
        {[...Array(litterSize)].map((element, index) => (
          <span>{animalType[2]}</span> // ok this should work
        ))}
      </div>
    </div>
  );
};

export default AnimalForm;
