// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import Spinner from 'components/Spinner';

const Button = ({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  rounded,
  type,
  variant,
  ...rest
}) => (
  <button
    className={cn(
      'relative border-[3px] px-4 py-2 font-notoSans text-base font-bold transition-colors',
      {
        'border-transparent': variant === 'filled',
        'bg-primary text-white hover:bg-primary/90':
          variant === 'filled' && !disabled,
        'border-primary text-primary hover:border-primary/90 hover:text-primary/90':
          variant === 'outlined' && !disabled,
        'bg-neutral-200 text-neutral-400': variant === 'filled' && disabled,
        'border-neutral-300 text-neutral-400':
          variant === 'outlined' && disabled,
        'rounded-md': rounded,
      },
      className,
    )}
    disabled={disabled || isLoading}
    onClick={onClick}
    type={type}
    {...rest}
  >
    {isLoading && (
      <Spinner
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
        )}
        color={variant === 'filled' ? 'white' : 'primary'}
        size={20}
      />
    )}
    <span className={cn({ invisible: isLoading })}>{children}</span>
  </button>
);

Button.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  isLoading: false,
  onClick: undefined,
  rounded: true,
  type: 'button',
  variant: 'filled',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default Button;
