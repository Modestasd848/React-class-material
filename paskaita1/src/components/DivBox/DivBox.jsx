import React from 'react';
import styles from './DivBox.module.css';

export default function DivBox(props) {
  const { text } = props;
  return (
    <div className={styles.DivBox}>
      <h1>{text}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        laudantium accusamus cum perspiciatis voluptatum error quae delectus
        inventore, voluptate minus ut minima officia doloribus eos voluptas
        pariatur vero mollitia nihil.
      </p>
    </div>
  );
}
