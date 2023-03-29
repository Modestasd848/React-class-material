import React from 'react';
import SignOutButton from '../SignOutButton/SignOutButton';
import style from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={style.header}>
      <nav>
        <a href="#">New Post</a>
        <a href="#">My Post</a>
      </nav>

      <SignOutButton className={style.button} />
    </header>
  );
}
