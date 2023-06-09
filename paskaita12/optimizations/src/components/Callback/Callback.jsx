import React, { useState, useCallback } from 'react';
import List from '../List/List';

export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  //   useCallback - issaugoja function cache
  //   useMemo - isaugoja function result

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <br />
      <button
        style={{ backgroundColor: dark ? 'black' : 'grey' }}
        onClick={() => setDark((prev) => !prev)}
      >
        Toggle
      </button>
      <List getItems={getItems} />
    </div>
  );
}
