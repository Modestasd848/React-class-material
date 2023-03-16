import React from 'react';
import style from './Feature.module.css';

export default function Feature({ color }) {
  return (
    <div style={{ 'background-color': color }} className={style.feature}>
      Feature
    </div>
  );
}
