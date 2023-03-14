import React from 'react';
import styles from './Main.module.css';
import Title from '../Title/Title';
import Container from '../Container/Container';

export default function Main() {
  return (
    <main className={styles.main}>
      <Container>
        <img
          className={styles['desert-img']}
          src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
          alt="desert"
        />
        <Title text="About" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quae cumque repellat veritatis dolorum expedita tenetur itaque
          perspiciatis repudiandae perferendis non, possimus consectetur minus.
          Nobis dicta et animi illum pariatur!
        </p>
      </Container>
    </main>
  );
}
