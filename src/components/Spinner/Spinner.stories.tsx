import type { Meta, Story } from '@storybook/react';
import type { SpinnerProps } from './Spinner.types';

import Spinner from './Spinner';

export default {
  title: 'components/Spinner',
  component: Spinner,
} as Meta;

export const Playground: Story<SpinnerProps> = (args) => {
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

export const DarkSpinner: Story = () => <Spinner dark />;

export const LightSpinner: Story = () => (
  <div style={{ background: '#000', padding: '10px' }}>
    <Spinner />
  </div>
);

LightSpinner.parameters = {
  backgrounds: {
    default: 'black',
  },
};
