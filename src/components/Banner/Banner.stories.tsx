import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Banner from './Banner';
import { ActionsArray } from './Banner.types';
import { generateControl } from '../../utils/tests/storybook';
import { BannerVariants } from './Banner.enums';
import { Stack } from '../layout';

const BannerActions: ActionsArray = [
  {
    label: 'Action A',
    name: 'Action A',
    onClick: action('click-action-a'),
  },
  {
    label: 'Action B',
    name: 'Action B',
    onClick: action('click-action-b'),
  },
];

/**
 * ```js
 * import { Banner } from '@securityscorecard/design-system';
 * ```
 */

const meta = {
  title: 'components/Banner',
  component: Banner,
  args: {
    children: 'Banner text',
    onClose: action('close-banner'),
  },
  argTypes: {
    variant: {
      ...generateControl('select', BannerVariants),
      table: {
        type: {
          summary: "'success' | 'info' | 'warn' | 'error'",
        },
      },
    },
    actions: {
      table: {
        type: {
          summary: 'ActionKinds<[React.MouseEvent]>[]',
          detail: `Array<
  | HandlerActionKind<[React.MouseEvent]>
  | AbsoluteLinkActionKind<[React.MouseEvent]>
  | RelativeLinkActionKind<[React.MouseEvent]>
>`,
        },
      },
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const VariantInfo: Story = {
  args: {
    actions: BannerActions,
    variant: 'info',
  },
};

export const VariantSuccess: Story = {
  args: {
    actions: BannerActions,
    variant: 'success',
  },
};

export const VariantWarn: Story = {
  args: {
    actions: BannerActions,
    variant: 'warn',
  },
};

export const VariantError: Story = {
  args: {
    actions: BannerActions,
    variant: 'error',
  },
};

export const LongContent: Story = {
  args: {
    ...VariantInfo.args,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
  },
};

export const WithOneAction: Story = {
  args: {
    actions: [BannerActions[0]],
  },
};

export const WithNoAction: Story = {
  args: {
    actions: undefined,
  },
};

export const NonDismissable: Story = {
  args: {
    ...VariantError.args,
    isDismissable: false,
  },
};

export const ColorsDark: Story = {
  render: (args) => (
    <Stack gap="md">
      <Banner {...args} variant="info" />
      <Banner {...args} variant="success" />
      <Banner {...args} variant="warn" />
      <Banner {...args} variant="error" />
      <Banner {...args} actions={BannerActions} variant="info" />
    </Stack>
  ),
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
