import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton, { type IconButtonPlain } from './IconButton';
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
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
      name: 'size',
      description: 'Sizing variant',
      table: {
        type: {
          summary: "'sm' | 'md' | 'lg'",
        },
        defaultValue: {
          summary: "'md'",
        },
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'base',
        'highlight',
        'danger',
        'subtle',
        'ghost',
        'highlight-ghost',
        'danger-ghost',
      ],
      name: 'variant',
      description: 'Visual variant of the button',
      table: {
        type: {
          summary:
            "'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'",
        },
        defaultValue: {
          summary: "'base'",
        },
      },
    },
    iconName: {
      name: 'iconName',
      // @ts-expect-error Storybook is strangly typed here
      type: {
        required: true,
      },
      description: 'Name of the used icon',
      table: {
        type: {
          summary: 'SSCIcons | (string & {})',
        },
      },
      ...generateControl('select', SSCIconNames),
    },
    label: {
      control: {
        type: 'text',
      },
      name: 'label',
      type: {
        name: 'string',
        required: true,
      },
      description: 'Human-readable label used for accessibility',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    iconType: {
      control: {
        type: 'object',
      },
      name: 'iconType',
      description: 'Icon family from where the icon is used',
      table: {
        type: {
          summary: "'ssc' | 'far'",
        },
        defaultValue: {
          summary: "'ssc'",
        },
      },
    },
    iconRotation: {
      control: {
        type: 'radio',
      },
      options: [90, 180, 270],
      name: 'iconRotation',
      description: 'Icon rotation property',
      table: {
        type: {
          summary: '90 | 180 | 270',
        },
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      name: 'isDisabled',
      description: 'Disable the button to prevent clicking',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
      name: 'isLoading',
      description:
        'Display loading spinner and disable button to prevent clicking',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    as: {
      control: {
        type: 'object',
      },
      name: 'as',
      description:
        'Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router',
      table: {
        type: {
          summary: 'Element',
        },
      },
    },
  },
  args: {
    onClick: action('button click'),
  },
} satisfies Meta<typeof IconButtonPlain>;

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
