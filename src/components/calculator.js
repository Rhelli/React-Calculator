import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './navbar';
import styles from './calculator.module.scss';

const Calculator = () => {
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
  }, [operation, next, total]);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h4>Let&apos;s Math It Up</h4>
        </div>
        <div className={styles.calculatorContainer}>
          {display}
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
