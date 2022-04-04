import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { SpaceSizes } from '../../../theme/space.enums';
import { generateControl } from '../../../utils/tests/storybook';
import { Inline } from '../../layout';
import { Stack } from '../../layout/Stack';
import { Paragraph } from '../../typography';
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

export const Playground: Story<SwitchProps> = (args) => <Switch {...args} />;
Playground.args = {
  label: 'Public',
  switchId: 'playground',
};

export const Default: Story = () => <Switch switchId="default" />;

export const WithoutLabel: Story = () => (
  <Stack gap="md">
    <Paragraph>Not Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel1" />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel1Sm" />
    </Inline>
    <Paragraph>Not Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel2" isDisabled />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel2Sm" isDisabled />
    </Inline>
    <Paragraph>Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel3" defaultChecked />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel3Sm" defaultChecked />
    </Inline>
    <Paragraph>Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel4" defaultChecked isDisabled />
      <Switch
        size={SwitchSizes.sm}
        switchId="withoutLabel4Sm"
        defaultChecked
        isDisabled
      />
    </Inline>
  </Stack>
);

export const WithLabel: Story = () => (
  <Stack gap="md">
    <Paragraph>Not Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md} justify="flex-start">
      <Switch label="False" switchId="withLabel1" />
      <Switch label="False" size={SwitchSizes.sm} switchId="withLabel1Sm" />
    </Inline>
    <Paragraph>Not Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch label="False" switchId="withLabel2" isDisabled />
      <Switch
        label="False"
        size={SwitchSizes.sm}
        switchId="withLabel2Sm"
        isDisabled
      />
    </Inline>
    <Paragraph>Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch label="True" switchId="withLabel3" defaultChecked />
      <Switch
        label="True"
        size={SwitchSizes.sm}
        switchId="withLabel3Sm"
        defaultChecked
      />
    </Inline>
    <Paragraph>Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch label="True" switchId="withLabel4" defaultChecked isDisabled />
      <Switch
        label="True"
        size={SwitchSizes.sm}
        switchId="withLabel4Sm"
        defaultChecked
        isDisabled
      />
    </Inline>
  </Stack>
);

export const WithFixedWidthAndShortText: Story = () => (
  <Inline align="center" gap={SpaceSizes.md}>
    <Switch
      label="False"
      maxWidth={200}
      switchId="withFixedWidthAndShortText"
    />
    <Switch
      label="False"
      maxWidth={200}
      size={SwitchSizes.sm}
      switchId="withFixedWidthAndShortTextSm"
    />
  </Inline>
);

export const WithFixedWidthAndLongText: Story = () => (
  <Inline align="center" gap={SpaceSizes.md}>
    <Switch
      label="This is a long long label"
      maxWidth={150}
      switchId="withFixedWidthAndLongText"
    />

    <Switch
      label="This is a long long label"
      maxWidth={150}
      size={SwitchSizes.sm}
      switchId="withFixedWidthAndLongTextSm"
    />
  </Inline>
);

export const AutoWidthLongText: Story = () => (
  <Inline align="center" gap={SpaceSizes.md}>
    <Switch label="This is a long long label" switchId="autoWidthLongText" />
    <Switch
      label="This is a long long label"
      size={SwitchSizes.sm}
      switchId="autoWidthLongTextSm"
    />
  </Inline>
);

export const LabelChangingWithState: Story = () => {
  const [checked, setChecked] = useState(false);
  const [checkedSm, setCheckedSm] = useState(false);

  return (
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch
        label={checked ? 'Public' : 'Private'}
        maxWidth={96}
        switchId="LabelChangingWithState"
        onChange={() => {
          setChecked(!checked);
        }}
      />

      <Switch
        label={checkedSm ? 'Public' : 'Private'}
        maxWidth={79}
        size={SwitchSizes.sm}
        switchId="LabelChangingWithStateSm"
        onChange={() => {
          setCheckedSm(!checkedSm);
        }}
      />
    </Inline>
  );
};

LabelChangingWithState.parameters = {
  screenshot: { skip: true },
};
