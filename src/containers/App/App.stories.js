// @packages
import React from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'containers/App',
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {};

Default.params = {};
