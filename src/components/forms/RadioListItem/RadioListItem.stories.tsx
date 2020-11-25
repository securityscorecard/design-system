import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import RadioListItem from './RadioListItem';
import { RadioListItemProps } from './RadioListItem.types';

export default {
  title: 'components/forms/RadioListItem',
  component: RadioListItem,
  parameters: {},
} as Meta;

export const playground: Story<RadioListItemProps> = (args) => (
  <>
    <RadioListItem group={args.group} itemId="item-1" value={1}>
      RadioListItem 1
    </RadioListItem>
    <RadioListItem group={args.group} itemId="item-2" value={2}>
      RadioListItem 2
    </RadioListItem>
    <RadioListItem group={args.group} itemId="item-3" value={3}>
      RadioListItem 3
    </RadioListItem>
  </>
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = { group: 'playground' };
playground.argTypes = {
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
