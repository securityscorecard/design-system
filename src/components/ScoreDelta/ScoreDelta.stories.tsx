import { Meta, StoryFn } from '@storybook/react';

import ScoreDelta from './ScoreDelta';
import { Inline, Stack } from '../layout';

export default {
  title: 'components/ScoreDelta',
  component: ScoreDelta,
} as Meta<typeof ScoreDelta>;

type Story = StoryFn<typeof ScoreDelta>;

export const Playground: Story = (args) => <ScoreDelta {...args} />;
Playground.args = {
  delta: Math.PI,
};
Playground.parameters = { screenshot: { skip: true } };

export const Trends: Story = (args) => (
  <Inline gap="md">
    <ScoreDelta {...args} delta={3.141516} />
    <ScoreDelta {...args} delta={0} />
    <ScoreDelta {...args} delta={-3.141516} />
  </Inline>
);

export const Decimals: Story = (args) => <ScoreDelta {...args} />;
Decimals.args = {
  ...Playground.args,
  decimalsCount: 4,
};

export const NearZeroNumbers: Story = (args) => (
  <Stack gap="md" justify="flex-start">
    <ScoreDelta {...args} decimalsCount={1} delta={0.05} />
    <ScoreDelta {...args} decimalsCount={2} delta={-0.005} />
    <ScoreDelta {...args} decimalsCount={3} delta={0.0005} />
  </Stack>
);
