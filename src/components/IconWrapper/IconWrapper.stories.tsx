import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import IconWrapper from './IconWrapper';
import { Inline } from '../layout';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/IconWrapper',
  component: IconWrapper,
  argTypes: {
    name: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as Meta<typeof IconWrapper>;

type Story = StoryFn<typeof IconWrapper>;

export const Playground: Story = (args) => <IconWrapper {...args} />;
Playground.args = { name: 'cog' };
Playground.parameters = {
  screenshot: { skip: true },
};

export const Sizes: Story = (args) => (
  <Inline gap="md">
    <IconWrapper {...args} size="xs" type="ssc" />
    <IconWrapper {...args} size="sm" type="ssc" />
    <IconWrapper {...args} size="md" type="ssc" />
    <IconWrapper {...args} size="lg" type="ssc" />
    <IconWrapper {...args} size="xl" type="ssc" />
  </Inline>
);
Sizes.args = Playground.args;

export const Variants: Story = (args) => (
  <Inline gap="md">
    <IconWrapper {...args} variant="default" />
    <IconWrapper {...args} variant="subtle" />
    <IconWrapper {...args} variant="strong" />
  </Inline>
);
Variants.args = { ...Playground.args, size: 'xl', type: 'ssc' };
