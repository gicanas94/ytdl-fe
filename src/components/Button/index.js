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
}) => {
  const isFilled = variant === 'filled';
  const isFilledAndDisabled = isFilled && disabled;
  const isFilledAndNotDisabled = isFilled && !disabled;
  const isOutlined = variant === 'outlined';
  const isOutlinedAndDisabled = isOutlined && disabled;
  const isOutlinedAndNotDisabled = isOutlined && !disabled;

  return (
    <button
      className={cn(
        'relative border-[3px] px-4 py-2 font-notoSans text-base font-bold transition-colors',
        {
          'border-transparent': isFilled,
          'bg-primary text-white hover:bg-primary/90': isFilledAndNotDisabled,
          'bg-neutral-200 text-neutral-400': isFilledAndDisabled,
          'border-primary text-primary hover:border-primary/90 hover:text-primary/90':
            isOutlinedAndNotDisabled,
          'border-neutral-300 text-neutral-400': isOutlinedAndDisabled,
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
          borderClassName={cn({
            'border-white': isFilledAndNotDisabled,
            'border-primary': isOutlinedAndNotDisabled,
            'border-neutral-400': isFilledAndDisabled || isOutlinedAndDisabled,
          })}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          size={20}
        />
      )}
      <span className={cn({ invisible: isLoading })}>{children}</span>
    </button>
  );
};

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
