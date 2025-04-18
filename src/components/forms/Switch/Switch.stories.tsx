import { Meta, StoryFn } from '@storybook/react';

import { SpaceSizes } from '../../../theme/space.enums';
import { generateControl } from '../../../utils/tests/storybook';
import { Inline } from '../../layout';
import { Stack } from '../../layout/Stack';
import Paragraph from '../../Paragraph/Paragraph';
import Switch from './Switch';
import { SwitchSizes } from './Switch.enums';
import { SwitchProps } from './Switch.types';

export default {
  title: 'components/forms/Switch',
  component: Switch,
  argTypes: {
    defaultChecked: { control: { type: 'boolean' } },
    size: {
      ...generateControl('select', SwitchSizes),
    },
  },
} as Meta;

export const Playground: StoryFn<SwitchProps> = (args) => <Switch {...args} />;
Playground.args = {
  switchId: 'playground',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Default: StoryFn = () => <Switch switchId="default" />;

export const WithoutLabel: StoryFn = () => (
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
