import React, { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,

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

const EXAMPLE_OPTIONS = [
  {
    value: 'web-to-print',
    label: 'Web to Print',
  },
  {
    value: 'Spot Colors',
    label: 'Spot Colors',
  },
  {
    value: 'Design Validation',
    label: 'Design Validation',
  },
];
const EXAMPLE_OPTIONS_RIGHT_LABEL = [
  {
    value: 'web-to-print',
    label: 'Web to Print',
    labelRight: '5',
  },
  {
    value: 'Spot Colors',
    label: 'Spot Colors',
    labelRight: '5',
  },
  {
    value: 'Design Validation',
    label: 'Design Validation',
    labelRight: '1',
  },
];

const SingleSelectTemplate: StoryFn<typeof Select> = ({ ...rest }) => {
  const [value, setValue] = useState<string>('');
  return (
    <div style={{ height: '200px' }}>
      <Select
        {...rest}
        label={value || 'Features'}
        value={value}
        onChange={(val: string) => setValue(val)}
      />
    </div>
  );
};

export const Default: Story = {
  render: SingleSelectTemplate,
  args: {
    options: EXAMPLE_OPTIONS,
  },
};

export const SelectWithRightLabel: Story = {
  render: SingleSelectTemplate,

  args: {
    options: EXAMPLE_OPTIONS_RIGHT_LABEL,
  },
};

const MultiSelectTemplate: StoryFn<typeof Select> = ({ ...rest }) => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div style={{ height: '200px' }}>
      <Select
        {...rest}
        label={'Features'}
        value={value}
        onChange={(val: string[]) => setValue(val)}
      />
    </div>
  );
};

export const MultiSelect: Story = {
  render: MultiSelectTemplate,

  args: {
    options: EXAMPLE_OPTIONS,
  },
};

export const MultiSelectWithRightLabel: Story = {
  render: MultiSelectTemplate,

  args: {
    options: EXAMPLE_OPTIONS_RIGHT_LABEL,
  },
};
