import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Spinner from './Spinner';
import { SpinnerProps } from './Spinner.types';

export default {
  title: 'components/Spinner',
  component: Spinner,
} as Meta;

export const playground: Story<SpinnerProps> = (args) => (
  <div style={{ background: args.dark ? undefined : '#000', padding: '10px' }}>
    <Spinner {...args} />
  </div>
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  dark: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  horizontalMargin: {
    control: { type: 'number' },
  },
};

export const darkSpinner: Story = () => <Spinner dark />;

export const lightSpinner: Story = () => (
  <div style={{ background: '#000', padding: '10px' }}>
    <Spinner />
  </div>
);

lightSpinner.parameters = {
  backgrounds: {
    default: 'black',
  },
};
