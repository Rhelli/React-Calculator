import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props;
  return (
    <div>
      <h2>{value || '0'}</h2>
    </div>
  );
};

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
