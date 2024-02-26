/* eslint-disable react/prop-types */
// @packages
import React, { useState } from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'components/Input',
};

const Template = ({ value: valueProp, ...args }) => {
  const [value, setValue] = useState(valueProp);

  const handleChange = (v) => {
    console.log('Input: onChange', v);
    setValue(v);
  };

  return <Component {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Write something...',
  value: '',
};

Default.params = {};
