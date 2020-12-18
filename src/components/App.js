import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import styles from './app.module.scss';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState('0');

  const handleClick = buttonName => {
    const value = calculate({ total, next, operation }, buttonName);
    setTotal(value.total);
    setNext(value.next);
    setOperation(value.operation);
  };

  useEffect(() => {
    if (operation && !next) { setDisplay(<Display value={total} />); }
    if (operation && next) { setDisplay(<Display value={next} />); }
    if (!operation) { setDisplay(<Display value={total} />); }
  });

  return (
    <div className={styles.appContainer}>
      {display}
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
