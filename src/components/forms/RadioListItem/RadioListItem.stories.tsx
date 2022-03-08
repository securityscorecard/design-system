import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SpaceSizes } from '../../../theme';
import { Stack } from '../../layout';
import RadioListItem from './RadioListItem';
import { RadioListItemProps } from './RadioListItem.types';

export default {
  title: 'components/forms/RadioListItem',
  component: RadioListItem,
  parameters: {},
} as Meta;

export const Playground: Story<RadioListItemProps> = (args) => {
  const { group } = args;

  return (
    <Stack gap={SpaceSizes.xs}>
      <RadioListItem group={group} itemId="item-1" value={1}>
        RadioListItem 1
      </RadioListItem>
      <RadioListItem group={group} itemId="item-2" value={2}>
        RadioListItem 2
      </RadioListItem>
      <RadioListItem group={group} itemId="item-3" value={3}>
        RadioListItem 3
      </RadioListItem>
    </Stack>
  );
};
Playground.args = { group: 'playground' };
Playground.argTypes = {
  group: {
    description: 'Radio list group name',
  },
  itemId: {
    description: 'ID to connect input and its label',
    control: { disable: true },
  },
};

export const Default: Story = () => (
  <RadioListItem group="default" itemId="item-1" value={1}>
    Lorem ipsum
  </RadioListItem>
);

export const Checked: Story = () => (
  <RadioListItem group="checked" itemId="item-1" value={1} defaultChecked>
    Lorem ipsum
  </RadioListItem>
);
