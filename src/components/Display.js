import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const value = { props };
  return (
    <div>
      <h3>{value}</h3>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: 'something',
};
