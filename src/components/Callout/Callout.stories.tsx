import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Callout from './Callout';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Strong } from '../Text';

export default {
  title: 'components/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>;

type Story = ComponentStory<typeof Callout>;

const content = (
  <>
    <Strong>Did you know?</Strong> This is a callout message that may include{' '}
    <Link href="#">links</Link> even!
  </>
);

const CalloutTemplate = (args) => <Callout {...args} />;

export const Playground: Story = CalloutTemplate.bind({});
Playground.args = {
  children: content,
};
Playground.parameters = { screenshot: { skip: true } };

export const InfoCallout: Story = CalloutTemplate.bind({});
InfoCallout.args = Playground.args;

export const NeutralCallout: Story = CalloutTemplate.bind({});
NeutralCallout.args = { ...Playground.args, color: 'neutral' };

export const WithIcon: Story = CalloutTemplate.bind({});
WithIcon.args = { ...Playground.args, icon: <Icon name="wrench" /> };
