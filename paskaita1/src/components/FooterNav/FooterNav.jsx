import React from 'react';
import styles from './FooterNav.module.css';

export default function FooterNav(props) {
  const { children } = props;
  return <nav className={styles.FooterNav}> {children}</nav>;
}
