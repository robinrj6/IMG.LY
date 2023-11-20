import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { Docs } from './Docs';

const meta: Meta<typeof Docs> = {
  title: 'Features/Header/Menus/Docs',
  component: Docs,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Docs> = ({ ...rest }) => (
  <div style={{ marginLeft: '3rem', position: 'relative' }}>
    <Docs {...rest} />
  </div>
);

export const Default: Story = {
  render: Template,
};
