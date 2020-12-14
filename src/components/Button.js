import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;

  const handleClick = event => {
    event.stopPropagation();
    props.clickHandler(event.target.id);
  };

  return (
    <button
      type="button"
      id={buttonName}
      onClick={handleClick}
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
