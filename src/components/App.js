import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  handleClick(buttonName) {
    const value = calculate(this.state, buttonName);
    this.setState(value);
  }

  render() {
    const { total, next, operation } = this.state;
    let toRender = '';
    if (operation && !next) { toRender = total; }
    if (operation && next) { toRender = next; }
    if (!operation) { toRender = total; }
    return (
      <div>
        <Display value={toRender} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
