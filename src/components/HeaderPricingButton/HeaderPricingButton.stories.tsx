import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderPricingButton } from './HeaderPricingButton';

const meta: Meta<typeof HeaderPricingButton> = {
  title: 'Components/Header/Header Pricing Button',
  component: HeaderPricingButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderPricingButton> = ({ ...rest }) => (
  <HeaderPricingButton {...rest} />
);

export const Default: Story = {
  render: Template,
};
