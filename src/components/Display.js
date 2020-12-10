import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from 'ButtonPanel';

const Display = props => {
  const value = { props };
  return (
    <div>
      <h3>{value}</h3>
      <ButtonPanel />
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};
