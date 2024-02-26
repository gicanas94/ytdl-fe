// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Paper = ({ children, className, rounded, shadow, ...rest }) => (
  <div
    className={cn(
      'bg-white',
      {
        'rounded-md': rounded,
        'shadow-md': shadow,
      },
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

Paper.defaultProps = {
  children: undefined,
  className: undefined,
  rounded: true,
  shadow: false,
};

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Paper;
