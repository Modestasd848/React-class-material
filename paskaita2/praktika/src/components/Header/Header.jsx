import React from 'react';
import Navigations from '../Navigation/Navigations';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
        alt="Microsoft logo"
      />
      {/* <Navigations>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </Navigations> */}
    </header>
  );
}
