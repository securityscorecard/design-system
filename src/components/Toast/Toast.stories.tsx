import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import Toast from './Toast';
import { ToastVariants } from './Toast.enums';
import { generateControl } from '../../utils/tests/storybook';
import Button from '../ButtonV2/Button';

const longContent = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit
    magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit
    amet auctor arcu elementum ut. Ut eget iaculis tortor.
  </p>
);

/**
 * ```js
 * import { Toast } from '@securityscorecard/design-system';
 * ```
 */

const meta = {
  title: 'components/Toast',
  component: Toast,
  args: {
    onClose: action('close-toast'),
  },
  argTypes: {
    variant: {
      ...generateControl('select', ToastVariants),
      description: 'Color variant of the toast notification',
      table: {
        type: {
          summary: "'success' | 'info' | 'warn' | 'error' | 'loading'",
        },
      },
    },
    onClose: {
      description: 'Callback triggered on close button click',
    },
  },
  parameters: {
    docs: {
      story: { inline: false, height: 250 },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <Stack gap={SpaceSizes.sm} justify="flex-start">
        <p>This is a notification.</p>
        <Button size="sm" variant="subtle">
          Action
        </Button>
      </Stack>
    ),
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <Stack gap={SpaceSizes.sm} justify="flex-start">
        {longContent}
        <Button size="sm" variant="subtle">
          Action
        </Button>
      </Stack>
    ),
  },
};

export const WithTwoActions: Story = {
  args: {
    children: (
      <Stack gap={SpaceSizes.sm} justify="flex-start">
        {longContent}
        <Inline gap={SpaceSizes.mdPlus}>
          <Button size="sm" variant="subtle">
            Action A
          </Button>
          <Button size="sm" variant="subtle">
            Action B
          </Button>
        </Inline>
      </Stack>
    ),
  },
};

export const WithCustomWidth: Story = {
  args: {
    ...LongContent.args,
    width: 470,
  },
};

export const VariantInfo: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa
        a lacus posuere.
      </p>
    ),
    variant: 'info',
  },
};

export const VariantSuccess: Story = {
  args: {
    ...VariantInfo.args,
    variant: 'success',
  },
};

export const VariantWarn: Story = {
  args: {
    ...VariantInfo.args,
    variant: 'warn',
  },
};

export const VariantError: Story = {
  args: {
    ...VariantInfo.args,
    variant: 'error',
  },
};

export const VariantLoading: Story = {
  args: {
    ...VariantInfo.args,
    variant: 'loading',
  },
};

export const ColorsDark: Story = {
  args: { ...Playground.args, isStandalone: false },
  render: (args) => (
    <Stack gap="md">
      <Toast {...args} variant="info" />
      <Toast {...args} variant="success" />
      <Toast {...args} variant="warn" />
      <Toast {...args} variant="error" />
      <Toast {...args} variant="loading" />
    </Stack>
  ),
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
