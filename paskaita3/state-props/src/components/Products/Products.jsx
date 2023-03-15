import React from 'react';
import style from './Products.module.css';
import Product from '../Product/Product';

export default function Products() {
  const product = [
    {
      id: 1,
      category: 'Canvases1',
      name: 'OFF_WHRITE AIR',
      price: '100$ - 200$',
    },
    {
      id: 2,
      category: 'Canvases2',
      name: 'OFF_WHRITE AIR',
      price: '100$ - 200$',
    },
    {
      id: 3,
      category: 'Canvases3',
      name: 'OFF_WHRITE AIR',
      price: '100$ - 200$',
    },
    {
      id: 4,
      category: 'Canvases4',
      name: 'OFF_WHRITE AIR',
      price: '100$ - 200$',
    },
    {
      id: 5,
      category: 'Canvases5',
      name: 'OFF_WHRITE AIR',
      price: '100$ - 200$',
    },
  ];
  return (
    <div className={style['flex-container']}>
      {product.map((product) => {
        return (
          <Product
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
