import React, { useState } from 'react';
import { calcLitterSize } from './util';

const AnimalForm = () => {
  const [litterSize, setLitterSize] = useState(0);
  const [month, setMonth] = useState(0);

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };

  const getLitterSize = () => {
    const response = calcLitterSize(4, 0, 6, month, 2);
    console.log(response);
    setLitterSize(response);
  };

  return (
    <div>
      <input onChange={updateMonths} type="text" />
      <button onClick={getLitterSize}>See Size</button>
      <p>{litterSize}</p>
    </div>
  );
};

export default AnimalForm;
