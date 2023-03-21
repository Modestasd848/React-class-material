import React, { useState } from 'react';
import Product from '../Products/Product';

export default function ProductList(props) {
  const { products } = props;
  return (
    <div>
      {products.map((products, index) => {
        return <Product key={index} index={index} text={products.text} />;
      })}
    </div>
  );
}
