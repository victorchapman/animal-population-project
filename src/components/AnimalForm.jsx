import React, { useState } from 'react';

const AnimalForm = () => {
  const [month, setMonth] = useState(0);

  const updateMonths = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };

  const getLitterSize = () => {};

  return (
    <div>
      <input onChange={updateMonths} type="text" />
      <button onClick={getLitterSize}>See Size</button>
    </div>
  );
};

export default AnimalForm;
