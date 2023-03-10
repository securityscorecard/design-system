import type { Meta, Story } from '@storybook/react/types-6-0';
import type { CalloutProps } from './Callout.types';

import Callout from './Callout';
import { Link, Strong } from '../typographyLegacy';

export default {
  title: 'components/Callout',
  component: Callout,
  argTypes: {},
} as Meta;

const content = (
  <>
    <Strong>Did you know?</Strong> This is a callout message that may include{' '}
    <Link href="#">links</Link> even!
  </>
);

const CalloutTemplate: Story<CalloutProps> = (args) => <Callout {...args} />;

export const Playground = CalloutTemplate.bind({});
Playground.args = {
  children: content,
};
Playground.parameters = { screenshot: { skip: true } };

export const DefaultCallout = CalloutTemplate.bind({});
DefaultCallout.args = Playground.args;

export const WithIcon = CalloutTemplate.bind({});
WithIcon.args = { ...Playground.args, icon: 'wrench' };
