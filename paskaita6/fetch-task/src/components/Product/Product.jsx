import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';

export default function Product() {
  const [product, setProduct] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://golden-whispering-show.glitch.me')
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  function handleDelete(index) {
    const newProducts = [...product];
    newProducts.splice(index, 1);
    console.log(newProducts);

    setProduct(newProducts);
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        product.map((product, index) => {
          return (
            <ProductList
              key={product.id}
              index={index}
              image={product.image}
              title={product.title}
              price={product.price}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </div>
  );
}
