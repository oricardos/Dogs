import React from 'react';
import styles from './Input.module.css';
const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
