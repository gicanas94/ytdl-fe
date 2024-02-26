// @packages
import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ children, className, ...rest }) => (
  <span className={className} {...rest}>
    {children}
  </span>
);

Typography.defaultProps = {
  children: undefined,
  className: undefined,
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Typography;
