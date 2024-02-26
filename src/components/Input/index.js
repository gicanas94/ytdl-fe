// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Input = ({
  className,
  disabled,
  onChange,
  placeholder,
  type,
  value,
  ...rest
}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      className={cn(
        'border-b-2 p-2 font-notoSans text-base transition-colors',
        'placeholder-neutral-500 focus:outline-none',
        {
          'border-primaryDark bg-neutral-100 text-primaryDark focus:border-primary':
            !disabled,
          'border-neutral-400 bg-neutral-200 text-neutral-400': disabled,
        },
        className,
      )}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={value}
      {...rest}
    />
  );
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  type: 'text',
  value: '',
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
