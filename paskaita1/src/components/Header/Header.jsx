import React from 'react';
import Navigations from '../Navigations/Navigation';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img
        className={styles['logo-img']}
        src="https://siteglobal.com/themes/custom/site_global/build/images/logos/logo.png"
        alt="React-logo"
      />
      <Navigations>
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </Navigations>
    </header>
  );
}
