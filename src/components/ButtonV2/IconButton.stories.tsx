import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from './IconButton';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';

/**
 * A Button is a fundamental interactive element in user interfaces,
 * allowing users to trigger actions or navigate through an application. It serves
 * as a clear call-to-action, prompting user engagement and facilitating task
 * completion.
 *
 * ```js
 * import { IconButton } from '@securityscorecard/design-system';
 * ```
 * See [Migration Guide](?path=/docs/guides-buttonv2-migration-guide--documentation)
 */

const meta = {
  component: IconButton,
  argTypes: {
    // @ts-expect-error there is union of enum and string
    iconName: {
      ...generateControl('select', SSCIconNames),
    },
    iconType: {
      table: {
        type: {
          summary: 'union',
        },
      },
    },
  },
  args: {
    onClick: action('button click'),
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button',
  },
  parameters: {
    screenshot: {
      skip: true,
    },
  },
};

export const VariantMain: Story = {
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button',
  },
};
export const VariantSubtle: Story = {
  args: {
    ...VariantMain.args,
    variant: 'subtle',
  },
};

export const VariantGhost: Story = {
  args: {
    ...VariantMain.args,
    variant: 'ghost',
  },
};

export const VariantHighlight: Story = {
  args: {
    ...VariantMain.args,
    variant: 'highlight',
  },
};

export const VariantDanger: Story = {
  args: {
    ...VariantMain.args,
    variant: 'danger',
  },
};

export const VariantDangerGhost: Story = {
  args: {
    ...VariantMain.args,
    variant: 'danger-ghost',
  },
};

export const SizeSmall: Story = {
  args: {
    ...VariantMain.args,
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    ...VariantMain.args,
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    ...VariantMain.args,
    size: 'lg',
  },
};

export const IsDisabled: Story = {
  args: {
    ...VariantMain.args,
    isDisabled: true,
  },
};

export const IsLoading: Story = {
  args: {
    ...VariantMain.args,
    isLoading: true,
  },
};
