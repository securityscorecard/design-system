import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InteractiveChip from './InteractiveChip';
import ChipLabel from './ChipLabel';
import ChipIcon from './ChipIcon';
import { Stack } from '../layout';

/**
 * ```jsx
 * import { InteractiveChip, ChipLabel, ChipIcon } from '@securityscorecard/design-system';
 *
 *
 * <InteractiveChip as={Link} to="/scorecard" onClick={() => { trackEvent('navigate'); }}>
 *   <ChipIcon name="eye" />
 *   <ChipLabel isStrong>325</ChipLabel>
 *   <ChipLable>companies</ChipLable>
 * </InteractiveChip>
 * ```
 * ## Using as links and with external routers
 *
 * In `InteractiveChip`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.
 * This increases type-safety, as the component can correctly infer the available props based on the `as` value.
 */

const meta = {
  title: 'components/Chip/InteractiveChip',
  component: InteractiveChip,
  subcomponents: {
    ChipLabel,
    ChipIcon,
  },
  args: {
    children: (
      <>
        <ChipIcon name="eye" />
        <ChipLabel isStrong>325</ChipLabel>
        <ChipLabel>companies</ChipLabel>
      </>
    ),
    onClick: action('on chip click'),
  },
} satisfies Meta<typeof InteractiveChip>;

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
      <InteractiveChip {...args} size="sm" />
      <InteractiveChip {...args} size="md" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Stack gap="md">
      <InteractiveChip {...args} color="gray" />
      <InteractiveChip {...args} color="blue" />
      <InteractiveChip {...args} color="turquoise" />
      <InteractiveChip {...args} color="teal" />
      <InteractiveChip {...args} color="green" />
      <InteractiveChip {...args} color="yellow" />
      <InteractiveChip {...args} color="orange" />
      <InteractiveChip {...args} color="red" />
      <InteractiveChip {...args} color="pink" />
      <InteractiveChip {...args} color="purple" />
      <InteractiveChip {...args} color="brown" />
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

export const ExternalLink: Story = {
  args: {
    as: 'a',
    href: '#',
  },
  parameters: {
    screenshot: { skip: true },
  },
};
