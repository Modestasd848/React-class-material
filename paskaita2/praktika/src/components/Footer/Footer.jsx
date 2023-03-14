import React from 'react';
import Title from '../Title/Title.jsx';
import Container from '../Container/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-background']}>
      <Container>
        <Title text="Contacts" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aliquam
          consequatur non nam eaque illo corporis odio iste, delectus ipsa,
          maxime, deserunt hic ratione repudiandae totam saepe asperiores
          nostrum unde.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          fugiat nulla exercitationem vero neque molestias, unde odio facilis
          reiciendis mollitia nihil deserunt atque rerum in dignissimos omnis
          assumenda aut iusto.
        </p>
      </Container>
    </footer>
  );
}
