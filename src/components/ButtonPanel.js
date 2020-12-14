import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <div>
      <div id="group1">
        <Button clickHandler={handleClick} buttonName="AC" />
        <Button clickHandler={handleClick} buttonName="+/-" />
        <Button clickHandler={handleClick} buttonName="%" />
        <Button clickHandler={handleClick} buttonName="÷" />
      </div>
      <div id="group2">
        <Button clickHandler={handleClick} buttonName="7" />
        <Button clickHandler={handleClick} buttonName="8" />
        <Button clickHandler={handleClick} buttonName="9" />
        <Button clickHandler={handleClick} buttonName="x" />
      </div>
      <div id="group3">
        <Button clickHandler={handleClick} buttonName="4" />
        <Button clickHandler={handleClick} buttonName="5" />
        <Button clickHandler={handleClick} buttonName="6" />
        <Button clickHandler={handleClick} buttonName="-" />
      </div>
      <div id="group4">
        <Button clickHandler={handleClick} buttonName="1" />
        <Button clickHandler={handleClick} buttonName="2" />
        <Button clickHandler={handleClick} buttonName="3" />
        <Button clickHandler={handleClick} buttonName="+" />
      </div>
      <div>
        <Button clickHandler={handleClick} buttonName="0" />
        <Button clickHandler={handleClick} buttonName="." />
        <Button clickHandler={handleClick} buttonName="=" />
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
