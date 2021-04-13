import React, { useState } from 'react';
import { calcLitterSize2 } from './newUtil';

const AnimalForm = () => {
  const [litterSize, setLitterSize] = useState(0);
  const [month, setMonth] = useState(0);

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };

  const getLitterSize = () => {
    const response = calcLitterSize2(4, 4, 2, 6, month);
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
