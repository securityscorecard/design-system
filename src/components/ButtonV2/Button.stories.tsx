import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonV2 from './Button';

/**
 * A Button is a fundamental interactive element in user interfaces,
 * allowing users to trigger actions or navigate through an application. It serves
 * as a clear call-to-action, prompting user engagement and facilitating task
 * completion.
 *
 * ```js
 * import { ButtonV2 } from '@securityscorecard/design-system';
 * ```
 * See [Migration Guide](?path=/docs/guides-buttonv2-migration-guide--documentation)
 */
const meta = {
  title: 'components/ButtonV2/ButtonV2',
  component: ButtonV2,
  args: {
    onClick: action('button click'),
  },
} satisfies Meta<typeof ButtonV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base',
  },
  parameters: {
    screenshot: {
      skip: true,
    },
  },
};

export const VariantMain: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base',
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

export const IsExpanded: Story = {
  args: {
    ...VariantMain.args,
    isExpanded: true,
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

export const HasMinWidth: Story = {
  args: {
    ...VariantMain.args,
    minWidth: 200,
  },
};

export const HasIconStart: Story = {
  args: {
    ...VariantMain.args,
    iconStart: {
      name: 'cog',
    },
  },
};

export const HasIconEnd: Story = {
  args: {
    ...VariantMain.args,
    iconEnd: {
      name: 'angle-down',
    },
  },
};
