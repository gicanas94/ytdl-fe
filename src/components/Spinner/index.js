// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Spinner = ({ className, color, size }) => (
  <div className={className} style={{ height: size, width: size }}>
    <div
      className={cn(
        'h-full w-full animate-spin rounded-full border-[3px] border-t-transparent',
        { [`border-${color}`]: color },
      )}
    />
  </div>
);

Spinner.defaultProps = {
  className: undefined,
  color: 'primary',
  size: 50,
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Spinner;
