import React from 'react';
import styles from './Navigations.module.css';

export default function Navigations(props) {
  const { children } = props;
  return <nav className={styles.navigation}>{children}</nav>;
}
