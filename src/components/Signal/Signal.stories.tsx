import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Signal from './Signal';
import { Inline } from '../layout';

export default {
  title: 'components/Signal',
  component: Signal,
} as ComponentMeta<typeof Signal>;

type Story = ComponentStory<typeof Signal>;

export const Playground: Story = (args) => <Signal {...args} />;
Playground.args = { variant: 'severity', kind: 'high', size: 32 };
Playground.parameters = {
  screenshot: { skip: true },
};

export const Severity: Story = (args) => (
  <Inline gap="sm">
    <Signal {...args} kind="high" variant="severity" />
    <Signal {...args} kind="medium" variant="severity" />
    <Signal {...args} kind="low" variant="severity" />
    <Signal {...args} kind="none" variant="severity" />
    <Signal {...args} kind="info" variant="severity" />
    <Signal {...args} kind="positive" variant="severity" />
  </Inline>
);
Severity.args = {
  variant: 'severity',
  size: 32,
};
Severity.argTypes = {
  kind: {
    control: 'select',
    options: ['high', 'medium', 'low', 'none', 'info', 'positive'],
    table: {
      type: {
        summary: '"high"|"medium"|"low"|"none"|"info"|"positive"',
      },
    },
  },
};

export const BreachRisk: Story = (args) => (
  <Inline gap="sm">
    <Signal {...args} kind="high" variant="breachRisk" />
    <Signal {...args} kind="medium" variant="breachRisk" />
    <Signal {...args} kind="low" variant="breachRisk" />
    <Signal {...args} kind="none" variant="breachRisk" />
  </Inline>
);
BreachRisk.args = {
  variant: 'breachRisk',
  size: 32,
};
BreachRisk.argTypes = {
  kind: {
    control: 'select',
    options: ['high', 'medium', 'low', 'none'],
    table: {
      type: {
        summary: '"high"|"medium"|"low"|"none"',
      },
    },
  },
};

export const BusinessImpact: Story = (args) => (
  <Inline gap="sm">
    <Signal {...args} kind="critical" variant="businessImpact" />
    <Signal {...args} kind="high" variant="businessImpact" />
    <Signal {...args} kind="medium" variant="businessImpact" />
    <Signal {...args} kind="low" variant="businessImpact" />
    <Signal {...args} kind="none" variant="businessImpact" />
  </Inline>
);
BusinessImpact.args = {
  variant: 'businessImpact',
  size: 32,
};
BusinessImpact.argTypes = {
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

export const IncidentLikelihood: Story = (args) => (
  <Inline gap="sm">
    <Signal {...args} kind="critical" variant="incidentLikelihood" />
    <Signal {...args} kind="high" variant="incidentLikelihood" />
    <Signal {...args} kind="medium" variant="incidentLikelihood" />
    <Signal {...args} kind="low" variant="incidentLikelihood" />
    <Signal {...args} kind="none" variant="incidentLikelihood" />
  </Inline>
);
IncidentLikelihood.args = {
  variant: 'incidentLikelihood',
  size: 32,
};
IncidentLikelihood.argTypes = {
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

export const SizedSignals: Story = () => (
  <Inline gap="sm">
    <Signal kind="high" size={16} />
    <Signal kind="medium" size={32} />
    <Signal kind="low" size={64} />
    <Signal kind="positive" size={96} />
    <Signal kind="info" size={128} />
  </Inline>
);
