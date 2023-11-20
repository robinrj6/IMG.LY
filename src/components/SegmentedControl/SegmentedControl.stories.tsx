import React, { useState } from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
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

const Template: StoryFn<typeof SegmentedControl> = ({ ...rest }) => {
  const [scale, setScale] = useState<string | number | null>('normal');

  const handleChange = (value: string | number | null) => {
    setScale(value);
  };

  return (
    <SegmentedControl
      {...rest}
      label="UI Scaling"
      options={[
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' },
      ]}
      value={scale}
      name="scale"
      onChange={handleChange}
    ></SegmentedControl>
  );
};

export const Default: Story = {
  render: Template,
};
