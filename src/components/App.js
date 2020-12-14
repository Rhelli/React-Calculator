import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calc = calculate(this.state, buttonName);
    this.setState(calc);
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
