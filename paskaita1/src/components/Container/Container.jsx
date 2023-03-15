import React from 'react';
import styles from './Container.module.css';
import DivBox from '../DivBox/DivBox';

export default function Container() {
  return (
    <div className={styles.flexContainer}>
      <DivBox text="about" />
      <DivBox text="Company" />
      <DivBox text="Service" />
    </div>
  );
}
