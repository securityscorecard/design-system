import type { Meta, Story } from '@storybook/react';
import type { SignalProps } from './Signal.types';

import { SignalKinds } from './Signal.enums';
import Signal from './Signal';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Signal',
  component: Signal,
} as Meta;

export const Playground: Story<SignalProps> = (args) => <Signal {...args} />;
Playground.args = { kind: SignalKinds.high };
Playground.argTypes = {
  kind: { ...generateControl('select', SignalKinds) },
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SolidHexGrades: Story = () => (
  <>
    <Signal kind={SignalKinds.critical} size={32} />
    <Signal kind={SignalKinds.high} size={32} />
    <Signal kind={SignalKinds.medium} size={32} />
    <Signal kind={SignalKinds.low} size={32} />
    <Signal kind={SignalKinds.positive} size={32} />
    <Signal kind={SignalKinds.negligible} size={32} />
    <Signal kind={SignalKinds.info} size={32} />
  </>
);

export const SizedSignals: Story = () => (
  <>
    <Signal kind={SignalKinds.high} size={16} />
    <Signal kind={SignalKinds.medium} size={32} />
    <Signal kind={SignalKinds.low} size={64} />
    <Signal kind={SignalKinds.positive} size={96} />
    <Signal kind={SignalKinds.negligible} size={128} />
  </>
);
