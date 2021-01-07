import React from 'react';
import PropTypes from 'prop-types';
import styles from './display.module.scss';

const Display = props => {
  const { value } = props;
  return (
    <div className={styles.display}>
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
