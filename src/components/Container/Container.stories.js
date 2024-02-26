// @packages
import React from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'components/Container',
};

const Template = (args) => (
  <Component className="h-60 bg-black" {...args} />
);

export const Default = Template.bind({});

Default.args = {};

Default.params = {};
