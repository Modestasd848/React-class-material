import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
        alt="BMW"
      />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/news">News</Link>
      <Link to="/services">Services</Link>
      <Link to="/previous-work">Previous-Work</Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}
