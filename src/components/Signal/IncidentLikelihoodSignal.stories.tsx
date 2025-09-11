import { Meta, StoryFn } from '@storybook/react';

import IncidentLikelihoodSignal from './IncidentLikelihoodSignal';
import { Inline } from '../layout';

export default {
  title: 'components/Signal/IncidentLikelihoodSignal',
  component: IncidentLikelihoodSignal,
} as Meta<typeof IncidentLikelihoodSignal>;

type Story = StoryFn<typeof IncidentLikelihoodSignal>;

export const Playground: Story = (args) => (
  <IncidentLikelihoodSignal {...args} />
);
Playground.args = { kind: 'high', size: 32 };
Playground.parameters = {
  screenshot: { skip: true },
};
Playground.argTypes = {
  kind: {
    control: 'select',
    options: ['critical', 'high', 'medium', 'low', 'none'],
    table: {
      type: {
        summary: '"critical"|"high"|"medium"|"low"|"none"',
      },
    },
  },
};

export const AllVariants: Story = (args) => (
  <Inline gap="sm">
    <IncidentLikelihoodSignal {...args} kind="critical" />
    <IncidentLikelihoodSignal {...args} kind="high" />
    <IncidentLikelihoodSignal {...args} kind="medium" />
    <IncidentLikelihoodSignal {...args} kind="low" />
    <IncidentLikelihoodSignal {...args} kind="none" />
  </Inline>
);
AllVariants.args = {
  size: 32,
};
