import React, { useEffect, useState } from 'react';
import { calcLitterSize2 } from './newUtil';

const AnimalForm = () => {
  const [litterSize, setLitterSize] = useState(0);
  const [month, setMonth] = useState(0);

  let animalEmojiArray = [];

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
    animalEmojiArray = [];
  };
  const getLitterSize = () => {
    const response = calcLitterSize2(4, 4, 2, 6, month);
    console.log(response);
    setLitterSize(response);
  };
  useEffect(() => {
    for (let i = 0; i < litterSize; i++) {
      animalEmojiArray.push('😼');
    }
    console.log(animalEmojiArray);
  }, [getLitterSize]);

  return (
    <div>
      <input onChange={updateMonths} type="number" min="1" max="20" />
      <button onClick={getLitterSize}>See Size</button>
      <p>{litterSize}</p>
      <li>
        {animalEmojiArray.map((cat) => {
          return <ul>{cat}</ul>;
        })}
      </li>
    </div>
  );
};

export default AnimalForm;
