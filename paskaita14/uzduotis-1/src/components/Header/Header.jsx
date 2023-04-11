import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [formPicker, setFormPicker] = useState('');

  function logInButtonHandler() {
    setFormPicker('signIn');
    setIsOpen(true);
  }

  function signUpButtonHandler() {
    setFormPicker('signUp');
    setIsOpen(true);
  }

  function getForm() {
    if (formPicker === 'signIn') {
      return <LogIn />;
    } else if (formPicker === 'signUp') {
      return <SignUp />;
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h3>Logo</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={logInButtonHandler}>Sign In</button>
          <button onClick={signUpButtonHandler}>Sign Up</button>
        </nav>
      </header>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        {getForm()}
      </Modal>
      <Outlet />
    </>
  );
}
