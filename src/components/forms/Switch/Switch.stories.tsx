import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Switch from './Switch';
import { SwitchProps } from './Switch.types';

export default {
  title: 'components/forms/Switch',
  component: Switch,
} as Meta;

export const playground: Story<SwitchProps> = (args) => <Switch {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = { label: 'Public', switchId: 'playground' };
playground.argTypes = {
  label: {
    description: 'Text in switch',
  },
  switchId: {
    description: 'ID to connect input and its label',
  },
};

export const Default: Story = () => (
  <Switch label="Private" switchId="default" />
);

export const Checked: Story = () => (
  <Switch label="Public" switchId="checked" defaultChecked />
);
