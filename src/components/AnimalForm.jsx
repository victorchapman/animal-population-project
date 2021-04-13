import React, { useEffect, useState } from 'react';
import { calcLitterSize2 } from './newUtil';

const AnimalForm = () => {
  const [litterSize, setLitterSize] = useState(0);
  const [month, setMonth] = useState(0);
  const [animalEmojiArray, setAnimalEmojiArray] = useState([]);

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };
  const getLitterSize = () => {
    const response = calcLitterSize2(4, 4, 2, 6, month);
    console.log(response);
    setLitterSize(response);
    for (let i = 0; i < litterSize; i++) {
      setAnimalEmojiArray((prevAnimalEmojiArray) => [
        ...prevAnimalEmojiArray,
        '😺',
      ]);
    }
    console.log(animalEmojiArray);
  };

  return (
    <div>
      <input onChange={updateMonths} type="number" min="1" max="20" />
      <button onClick={getLitterSize}>See Size</button>
      <p>{litterSize}</p>
      {/* <div>
        {animalEmojiArray.map((cat) => {
          return <span>{cat}</span>;
        })}
      </div> */}
      <div>
        {[...Array(litterSize)].map((element, index) => (
          <span>😺</span> // ok this should work
        ))}
      </div>
    </div>
  );
};

export default AnimalForm;
