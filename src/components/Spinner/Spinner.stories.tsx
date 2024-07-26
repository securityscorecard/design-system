import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Spinner from './Spinner';
import { SpinnerProps } from './Spinner.types';

export default {
  title: 'components/Spinner',
  component: Spinner,
} as Meta;

export const Playground: StoryFn<SpinnerProps> = (args) => {
  const { dark } = args;
  return (
    <div style={{ background: dark ? undefined : '#000', padding: '10px' }}>
      <Spinner {...args} />
    </div>
  );
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DarkSpinner: StoryFn = () => <Spinner dark />;

export const LightSpinner: StoryFn = () => (
  <div style={{ background: '#000', padding: '10px' }}>
    <Spinner />
  </div>
);

LightSpinner.parameters = {
  backgrounds: {
    default: 'black',
  },
};
