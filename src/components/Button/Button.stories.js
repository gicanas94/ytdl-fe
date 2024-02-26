// @packages
import React from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'components/Button',
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello world',
  onClick: () => console.log('Button: onClick'),
};

Default.params = {};
