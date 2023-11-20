import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { Solutions } from './Solutions';

const meta: Meta<typeof Solutions> = {
  title: 'Features/Header/Menus/Solutions',
  component: Solutions,

  argTypes: {
    open: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Solutions> = ({ ...rest }) => (
  <div style={{ marginLeft: '3rem', position: 'relative' }}>
    <Solutions {...rest} />
  </div>
);

export const Default: Story = {
  render: Template,
};
