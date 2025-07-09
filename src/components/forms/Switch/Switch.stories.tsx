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

export const Default: StoryFn = () => (
  <Switch aria-label="Toggle switch" switchId="default" />
);

export const WithoutLabel: StoryFn = () => (
  <Stack gap="md">
    <Paragraph>Not Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch aria-label="Toggle switch 1" switchId="withoutLabel1" />
      <Switch
        aria-label="Toggle switch 1 small"
        size={SwitchSizes.sm}
        switchId="withoutLabel1Sm"
      />
    </Inline>
    <Paragraph>Not Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch
        aria-label="Toggle switch 2 disabled"
        switchId="withoutLabel2"
        isDisabled
      />
      <Switch
        aria-label="Toggle switch 2 small disabled"
        size={SwitchSizes.sm}
        switchId="withoutLabel2Sm"
        isDisabled
      />
    </Inline>
    <Paragraph>Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch
        aria-label="Toggle switch 3 checked"
        switchId="withoutLabel3"
        defaultChecked
      />
      <Switch
        aria-label="Toggle switch 3 small checked"
        size={SwitchSizes.sm}
        switchId="withoutLabel3Sm"
        defaultChecked
      />
    </Inline>
    <Paragraph>Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch
        aria-label="Toggle switch 4 checked disabled"
        switchId="withoutLabel4"
        defaultChecked
        isDisabled
      />
      <Switch
        aria-label="Toggle switch 4 small checked disabled"
        size={SwitchSizes.sm}
        switchId="withoutLabel4Sm"
        defaultChecked
        isDisabled
      />
    </Inline>
  </Stack>
);
