import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderContactSalesButton } from './HeaderContactSalesButton';

const meta: Meta<typeof HeaderContactSalesButton> = {
  title: 'Components/Header/Header Contact Sales Button',
  component: HeaderContactSalesButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderContactSalesButton> = ({ ...rest }) => (
  <HeaderContactSalesButton {...rest} />
);

export const Default: Story = {
  render: Template,
};
