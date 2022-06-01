import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Callout from './Callout';
import { CalloutProps } from './Callout.types';
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

export const Playground: Story<CalloutProps> = (args) => <Callout {...args} />;
Playground.args = {
  icon: 'wrench',
  children: content,
};
Playground.parameters = { screenshot: { skip: true } };

export const DefaultCallout: Story = () => (
  <Callout icon="wrench">{content}</Callout>
);
DefaultCallout.storyName = 'DefaultCallout';
