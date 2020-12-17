import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  //constructor(props) {
  //  super(props);
//
  //  this.state = {
  //    total: null,
  //    next: null,
  //    operation: null,
  //  };
//
  //  this.handleClick = this.handleClick.bind(this);
  //}

  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [handleClickState, setHandleClickState] = useState(calculate(this.state, buttonName))

  const handleClick = (buttonName) => {
    const value = calculate(this.state, buttonName);
    setHandleClickState(value);
  }

  useEffect(() => {
    let toRender = '';
    if (operation && !next) { toRender = total; }
    if (operation && next) { toRender = next; }
    if (!operation) { toRender = total; }
    return toRender;
  }, [total, next, operation]);

  return (
    <div>
      <Display value={toRender} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
