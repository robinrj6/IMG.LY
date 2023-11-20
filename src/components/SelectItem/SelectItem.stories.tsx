import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { SelectItem } from '../SelectItem';

const meta: Meta<typeof SelectItem> = {
  title: 'Components/Select Item',
  component: SelectItem,

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

const Template: StoryFn<typeof SelectItem> = ({ ...rest }) => {
  return <SelectItem {...rest} />;
};

export const Default: Story = {
  render: Template,
  args: {
    option: {
      value: 'web-to-print',
      label: 'Web to Print',
      labelRight: '5',
    },
  },
};
