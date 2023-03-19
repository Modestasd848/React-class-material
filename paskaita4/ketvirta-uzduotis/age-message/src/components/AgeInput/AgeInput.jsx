import React from 'react';

export default function AgeInput(props) {
  const { ageValue } = props;
  return (
    <div>
      <input type="number" placeholder="Enter your age" value={() => ageValue(true)} />
    </div>
  );
}
