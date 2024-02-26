// @packages
import React from 'react';

// @own
import Component from '.';

export default {
  component: Component,
  title: 'components/Paper',
};

const Template = (args) => <Component className="h-60 w-96" {...args} />;

export const Default = Template.bind({});

Default.args = {
  shadow: true,
};

Default.params = {};
