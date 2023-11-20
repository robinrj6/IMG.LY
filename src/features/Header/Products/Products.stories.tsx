import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { Products } from './Products';

const meta: Meta<typeof Products> = {
  title: 'Features/Header/Menus/Products',
  component: Products,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Products> = ({ ...rest }) => (
  <div style={{ marginLeft: '3rem', position: 'relative' }}>
    <Products {...rest} />
  </div>
);

export const Default: Story = {
  render: Template,
};
