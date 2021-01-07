import React, { useState, useEffect } from 'react';
import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import calculate from '../../logic/calculate';
import Navbar from '../navbar/Navbar';
import style from './calculator.module.scss';

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
      <div className={style.calculatorContainer}>
        <div className={style.calculatorBlurb}>
          <h4>Let&apos;s Math It Up Nerds</h4>
        </div>
        <div className={style.calculator}>
          {display}
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
