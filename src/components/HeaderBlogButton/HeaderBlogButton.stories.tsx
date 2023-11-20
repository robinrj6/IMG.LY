import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderBlogButton } from './HeaderBlogButton';

const meta: Meta<typeof HeaderBlogButton> = {
  title: 'Components/Header/Header Blog Button',
  component: HeaderBlogButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderBlogButton> = ({ ...rest }) => (
  <HeaderBlogButton {...rest} />
);

export const Default: Story = {
  render: Template,
};
