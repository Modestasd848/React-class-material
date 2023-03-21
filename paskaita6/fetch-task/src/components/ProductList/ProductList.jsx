import React from 'react';

export default function ProductList({ index, image, title, price, handleDelete }) {
  function handleClick() {
    handleDelete(index);
  }
  return (
    <div>
      <img src={image} alt="Product" />
      <p>{title}</p>
      <h2>{price}</h2>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
