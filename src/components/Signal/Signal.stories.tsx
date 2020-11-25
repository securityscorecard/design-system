import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SignalProps } from './Signal.types';
import { SignalKinds } from './Signal.enums';
import Signal from './Signal';

export default {
  title: 'components/Signal',
  component: Signal,
} as Meta;

export const playground: Story<SignalProps> = (args) => <Signal {...args} />;
playground.args = { kind: SignalKinds.high };
playground.argTypes = {
  kind: { control: { type: 'select', options: SignalKinds } },
};

export const SolidHexGrades: Story = () => (
  <>
    <Signal kind={SignalKinds.high} size={32} />
    <Signal kind={SignalKinds.medium} size={32} />
    <Signal kind={SignalKinds.low} size={32} />
    <Signal kind={SignalKinds.positive} size={32} />
    <Signal kind={SignalKinds.info} size={32} />
  </>
);

export const SizedSignals: Story = () => (
  <>
    <Signal kind={SignalKinds.high} size={16} />
    <Signal kind={SignalKinds.medium} size={32} />
    <Signal kind={SignalKinds.low} size={65} />
    <Signal kind={SignalKinds.positive} size={96} />
    <Signal kind={SignalKinds.info} size={128} />
  </>
);
