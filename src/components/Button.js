import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = props => {
  const { buttonName } = props;

  const handleClick = e => {
    e.stopPropagation();
    props.clickHandler(e.target.id);
  };

  const operators = ['÷', 'x', '-', '+', '='];

  return (
    <div className={buttonName === '0' ? styles.zeroButton : styles.button}>
      <button
        className={operators.includes(buttonName) ? styles.orange : styles.grey}
        id={buttonName}
        onClick={handleClick}
        type="button"
      >
        {buttonName}
      </button>
    </div>
  );
};

Button.defaultProps = {
  buttonName: '',
  clickHandler: null,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
