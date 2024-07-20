// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Spinner = ({ borderClassName, className, size }) => (
  <div className={className} style={{ height: size, width: size }}>
    <div
      className={cn(
        'h-full w-full animate-spin rounded-full border-[3px] border-t-transparent transition-colors',
        borderClassName,
      )}
    />
  </div>
);

Spinner.defaultProps = {
  borderClassName: 'border-primary',
  className: undefined,
  size: 50,
};

Spinner.propTypes = {
  borderClassName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default Spinner;
