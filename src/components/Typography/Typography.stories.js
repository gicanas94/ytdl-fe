// @packages
import React from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'components/Typography',
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

Default.params = {};
