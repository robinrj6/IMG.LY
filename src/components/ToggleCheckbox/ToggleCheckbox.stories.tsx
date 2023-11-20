import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ToggleCheckbox } from './ToggleCheckbox';

const meta: Meta<typeof ToggleCheckbox> = {
  title: 'Components/Toggle Checkbox',
  component: ToggleCheckbox,

  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test-checkbox',
  },
};

export const Checked: Story = {
  args: { name: 'test-checkbox', checked: true },

  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
