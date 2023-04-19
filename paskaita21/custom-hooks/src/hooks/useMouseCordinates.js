import { useState, useEffect } from 'react';

function useMouseCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setCoordinates({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return coordinates;
}

export default useMouseCoordinates;
