import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ScoreDelta from './ScoreDelta';
import { Inline } from '../layout';

export default {
  title: 'components/ScoreDelta',
  component: ScoreDelta,
} as ComponentMeta<typeof ScoreDelta>;

type Story = ComponentStory<typeof ScoreDelta>;

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
