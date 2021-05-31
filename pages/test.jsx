import React from 'react';
import styles from '../styles/Sample.module.css';

const test = () => {
  return (
    <main className={styles.red}>
      <div className={styles.bigBox}>
        <br />
        <p className={(styles.red, styles.bordered)}>Some text over here</p>
      </div>
    </main>
  );
};

export default test;
