import React from 'react';
import styles from './Footer.module.css';
import DivBox from '../DivBox/DivBox.jsx';
import FooterNav from '../FooterNav/FooterNav.jsx';

export default function Foooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <DivBox text="Content" />
        <DivBox text="Sub Header" />
      </div>
      <div className={styles.navigation}>
        <h1>Navigation</h1>
        <FooterNav>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
        </FooterNav>
      </div>
    </footer>
  );
}
