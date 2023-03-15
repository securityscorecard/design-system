import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Password from './Password';
import { PasswordProps } from './Password.types';

export default {
  title: 'components/forms/Password',
  component: Password,
} as Meta;

export const Playground: Story<PasswordProps> = (args) => (
  <Password {...args} aria-label="Password" />
);
Playground.argTypes = {
  isDisabled: { control: 'boolean' },
  isInvalid: { control: 'boolean' },
  defaultIsRevealed: { control: 'boolean' },
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultPassword: Story = () => (
  <Password aria-label="Password" defaultValue="C0mpl1c4t3dP4ssw0rd" />
);

export const RevealedPassword: Story = () => (
  <Password
    aria-label="Password"
    defaultValue="C0mpl1c4t3dP4ssw0rd"
    defaultIsRevealed
  />
);
