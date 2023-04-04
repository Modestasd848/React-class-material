import { array } from 'prop-types';
import React, { useState, useMemo } from 'react';

export default function Memo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  const square = useMemo(() => {
    return heavyCalculation();
  }, [number]);

  function heavyCalculation() {
    for (let i = 0; i < 1000000000000000000000; i++) return number * number;
  }

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(+e.target.value)} />
      <br />
      <button
        style={{ backgroundColor: dark ? 'darkgrey' : 'grey' }}
        onClick={() => setDark((prev) => !prev)}
      >
        Toggle
      </button>
      <br />
      {square}
    </div>
  );
}
