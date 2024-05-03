import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TrendIcon } from './TrendIcon';
import { Inline } from '../layout';

export default {
  title: 'components/TrendIcon',
  component: TrendIcon,
} as ComponentMeta<typeof TrendIcon>;

type Story = ComponentStory<typeof TrendIcon>;

export const Playground: Story = (args) => <TrendIcon {...args} />;
Playground.args = {
  trend: 'stable',
};
Playground.parameters = { screenshot: { skip: true } };

export const Trends: Story = () => (
  <Inline gap="lg">
    <TrendIcon trend="positive" />
    <TrendIcon trend="stable" />
    <TrendIcon trend="negative" />
  </Inline>
);
