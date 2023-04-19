import React from 'react';
import useMouseCoordinates from '../../hooks/useMouseCordinates';
function App() {
  const { x, y } = useMouseCoordinates();
  return (
    <div>
      <h1>Mouse Coordinates</h1>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}
export default App;
