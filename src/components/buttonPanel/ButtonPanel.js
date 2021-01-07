import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './buttonPanel.module.scss';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];


  return (
    <div className={styles.buttonPanel}>
      <div id="group1" className={styles.row}>
        { group1.map(val => <Button clickHandler={handleClick} key={`btn_${val}`} buttonName={val} />) }
      </div>
      <div id="group2" className={styles.row}>
        {group2.map(val => <Button clickHandler={handleClick} key={`btn_${val}`} buttonName={val} />)}
      </div>
      <div id="group3" className={styles.row}>
        {group3.map(val => <Button clickHandler={handleClick} key={`btn_${val}`} buttonName={val} />)}
      </div>
      <div id="group4" className={styles.row}>
        {group4.map(val => <Button clickHandler={handleClick} key={`btn_${val}`} buttonName={val} />)}
      </div>
      <div id="group5" className={styles.row}>
        {group5.map(val => <Button clickHandler={handleClick} key={`btn_${val}`} buttonName={val} />)}
      </div>
    </div>
  );
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
