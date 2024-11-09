import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';
import ChipLabel from './ChipLabel';
import ChipIcon from './ChipIcon';
import { Stack } from '../layout';
import {
  Default as DefaultChipLabel,
  Strong as StrongChipLabel,
} from './ChipLabel.stories';
import { Default as DefaultChipIcon } from './ChipIcon.stories';

/**
 * ```jsx
 * import { Chip, ChipLabel, ChipIcon } from '@securityscorecard/design-system';
 *
 * <Chip>
 *   <ChipIcon name="eye" />
 *   <ChipLabel isStrong>325</ChipLabel>
 *   <ChipLabel>companies</ChipLabel>
 * </Chip>
 * ```
 */

const meta = {
  title: 'components/Chip/Chip',
  component: Chip,
  subcomponents: {
    ChipLabel,
    ChipIcon,
  },
  args: {
    children: (
      <>
        <ChipIcon {...DefaultChipIcon.args} />
        <ChipLabel {...StrongChipLabel.args} />
        <ChipLabel {...DefaultChipLabel.args} />
      </>
    ),
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap="md">
      <Chip {...args} size="sm" />
      <Chip {...args} size="md" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Stack gap="md">
      <Chip {...args} color="gray" />
      <Chip {...args} color="blue" />
      <Chip {...args} color="turquoise" />
      <Chip {...args} color="teal" />
      <Chip {...args} color="green" />
      <Chip {...args} color="yellow" />
      <Chip {...args} color="orange" />
      <Chip {...args} color="red" />
      <Chip {...args} color="pink" />
      <Chip {...args} color="purple" />
      <Chip {...args} color="brown" />
    </Stack>
  ),
};

export const ColorsDark: Story = {
  ...Colors,
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
