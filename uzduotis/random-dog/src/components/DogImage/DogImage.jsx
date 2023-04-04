import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  async function fetcRandomDogImage() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setImageUrl(res.data.message);
  }

  useEffect(() => {
    fetcRandomDogImage();
  }, []);

  return (
    <>
      <button onClick={fetcRandomDogImage}>Fetch new dog</button>
      <br />
      <img src={imageUrl} alt="A dog" />
    </>
  );
}
