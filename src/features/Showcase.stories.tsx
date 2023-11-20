import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Features/Showcase',
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Header> = ({ ...rest }) => (
  <>
    <header id="imgly-website-components-header">
      <Header {...rest} />
    </header>
    <footer id="imgly-website-components-footer">
      <Footer {...rest} />
    </footer>
  </>
);

export const Default: Story = {
  render: Template,
};
