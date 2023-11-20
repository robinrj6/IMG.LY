import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Cookies } from './Cookies';

const meta: Meta<typeof Cookies> = {
  title: 'Features/Cookies',
  component: Cookies,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Cookies> = ({ ...rest }) => (
  <Cookies {...rest} />
);

export const Default: Story = {
  render: Template,
};
