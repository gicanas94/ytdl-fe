// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Container = ({ centered, children, className, ...rest }) => (
  <div
    className={cn('container', { 'mx-auto': centered }, className)}
    {...rest}
  >
    {children}
  </div>
);

Container.defaultProps = {
  centered: true,
  children: undefined,
  className: undefined,
};

Container.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
