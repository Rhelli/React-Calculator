import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;

  const handleClick = e => {
    e.stopPropagation();
    props.clickHandler(e.target.id);
  };

  return (
    <button
      id={buttonName}
      onClick={handleClick}
      type="button"
    >
      {buttonName}
    </button>
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
