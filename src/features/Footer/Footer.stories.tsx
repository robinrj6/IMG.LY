import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Features/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Footer> = ({ ...rest }) => (
  <footer>
    <Footer {...rest} />
  </footer>
);

export const Default: Story = {
  render: Template.bind({}),
};
