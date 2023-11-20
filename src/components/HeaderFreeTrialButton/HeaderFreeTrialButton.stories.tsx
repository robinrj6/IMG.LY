import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderFreeTrialButton } from './HeaderFreeTrialButton';

const meta: Meta<typeof HeaderFreeTrialButton> = {
  title: 'Components/Header/Header Free Trial Button',
  component: HeaderFreeTrialButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderFreeTrialButton> = ({ ...rest }) => (
  <HeaderFreeTrialButton {...rest} />
);

export const Default: Story = {
  render: Template,
};
