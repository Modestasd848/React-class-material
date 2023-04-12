import React from 'react';

export default function Counter2({ count, increment }) {
  return (
    <div>
      <button style={{ backgroundColor: 'red' }} onClick={increment}>
        {count}
      </button>
    </div>
  );
}
