import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { generateControl } from '../../../utils/tests/storybook';
import { Stack } from '../../layout/Stack';
import { Text } from '../../typography';
import Switch from './Switch';
import { SwitchSizes } from './Switch.enums';
import { SwitchProps } from './Switch.types';

export default {
  title: 'components/forms/Switch',
  component: Switch,
  argTypes: {
    maxWidth: { control: { type: 'number' } },
    defaultChecked: { control: { type: 'boolean' } },
    size: {
      ...generateControl('select', SwitchSizes),
    },
  },
} as Meta;

export const playground: Story<SwitchProps> = (args) => <Switch {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  label: 'Public',
  switchId: 'playground',
};
playground.argTypes = {
  label: {
    description: 'Text in switch',
  },
  switchId: {
    description: 'ID to connect input and its label',
  },
  maxWidth: {
    description: 'Max width in px',
  },
};

export const Default: Story = () => <Switch switchId="default" />;

export const WithoutLabel: Story = () => (
  <Stack gap="lg">
    <Stack justify="flex-start">
      <Text>Not Checked</Text>
      <Switch switchId="withoutLabel1" />
    </Stack>

    <Stack justify="flex-start">
      <Text>Not Checked and disabled</Text>
      <Switch switchId="withoutLabel2" isDisabled />
    </Stack>

    <Stack justify="flex-start">
      <Text>Checked</Text>
      <Switch switchId="withoutLabel3" defaultChecked />
    </Stack>

    <Stack justify="flex-start">
      <Text>Checked and disabled</Text>
      <Switch switchId="withoutLabel4" defaultChecked isDisabled />
    </Stack>
  </Stack>
);

export const WithLabel: Story = () => (
  <Stack gap="lg">
    <Stack justify="flex-start">
      <Switch label="False" switchId="withLabel1" />
    </Stack>

    <Stack justify="flex-start">
      <Text>Not Checked and disabled</Text>
      <Switch label="False" switchId="withLabel2" isDisabled />
    </Stack>

    <Stack justify="flex-start">
      <Text>Checked</Text>
      <Switch label="True" switchId="withLabel3" defaultChecked />
    </Stack>

    <Stack justify="flex-start">
      <Text>Checked and disabled</Text>
      <Switch label="True" switchId="withLabel4" defaultChecked isDisabled />
    </Stack>
  </Stack>
);

export const WithFixedWidthAndShortText: Story = () => (
  <Stack gap="lg">
    <Stack justify="flex-start">
      <Switch
        label="False"
        maxWidth={200}
        switchId="withFixedWidthAndShortText"
      />
    </Stack>
  </Stack>
);

export const WithFixedWidthAndLongText: Story = () => (
  <Stack gap="lg">
    <Stack justify="flex-start">
      <Switch
        label="This is a long long label"
        maxWidth={150}
        switchId="withFixedWidthAndLongText"
      />
    </Stack>
  </Stack>
);

export const AutoWidthLongText: Story = () => (
  <Stack gap="lg">
    <Stack justify="flex-start">
      <Switch label="This is a long long label" switchId="autoWidthLongText" />
    </Stack>
  </Stack>
);

export const LabelChangingWithState: Story = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack gap="lg">
      <Stack justify="flex-start">
        <Switch
          label={checked ? 'Public' : 'Private'}
          maxWidth={96}
          switchId="LabelChangingWithState"
          onChange={() => {
            setChecked(!checked);
          }}
        />
      </Stack>
    </Stack>
  );
};

LabelChangingWithState.parameters = {
  screenshot: { skip: true },
};
