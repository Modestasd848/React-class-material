import React from 'react';
import styles from './Main.module.css';
import Container from '../Container/Container';

export default function Main() {
  return (
    <main>
      <img
        className={styles['main-image']}
        src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
        alt="react-logo"
      />
      <Container />
    </main>
  );
}
