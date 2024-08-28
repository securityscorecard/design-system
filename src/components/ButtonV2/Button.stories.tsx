import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonV2, { type ButtonV2Plain } from './Button';
import { Stack } from '../layout';

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
    className: 'button',
  },
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
      name: 'children',
      description: 'Button label',
      type: {
        // @ts-expect-error Storybook is strangly typed here
        name: 'string | string[]',
        required: true,
      },
    },
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
    iconStart: {
      control: {
        type: 'object',
      },
      name: 'iconStart',
      description: 'Definition of icon that appears before button label',
      table: {
        type: {
          summary:
            '{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }',
        },
      },
    },
    iconEnd: {
      control: {
        type: 'object',
      },
      name: 'iconEnd',
      description: 'Definition of icon that appears after button label',
      table: {
        type: {
          summary:
            '{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }',
        },
      },
    },
    minWidth: {
      control: {
        type: 'number',
      },
      name: 'minWidth',
      description:
        'Button minimal width in px. This property is not set by default',
      table: {
        type: {
          summary: 'number',
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
    loadingText: {
      control: {
        type: 'text',
      },
      name: 'loadingText',
      description: 'Text displayed next to spinner in loading state',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: "'Loading'",
        },
      },
    },
    isExpanded: {
      control: {
        type: 'boolean',
      },
      name: 'isExpanded',
      description: 'Expands button to full width of the parrent component',
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
} satisfies Meta<typeof ButtonV2Plain>;

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

export const VariantBase: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};
export const VariantSubtle: Story = {
  args: {
    ...VariantBase.args,
    variant: 'subtle',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};

export const VariantGhost: Story = {
  args: {
    ...VariantBase.args,
    variant: 'ghost',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};

export const VariantHighlight: Story = {
  args: {
    ...VariantBase.args,
    variant: 'highlight',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};

export const VariantDanger: Story = {
  args: {
    ...VariantBase.args,
    variant: 'danger',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};

export const VariantDangerGhost: Story = {
  args: {
    ...VariantBase.args,
    variant: 'danger-ghost',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button',
        },
        focused: {
          focus: 'button.button',
        },
      },
    },
  },
};

export const SizeSmall: Story = {
  args: {
    ...VariantBase.args,
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    ...VariantBase.args,
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    ...VariantBase.args,
    size: 'lg',
  },
};

export const IsExpanded: Story = {
  args: {
    ...VariantBase.args,
    isExpanded: true,
  },
};

export const IsDisabled: Story = {
  args: {
    ...VariantBase.args,
    isDisabled: true,
  },
};

export const IsLoading: Story = {
  args: {
    ...VariantBase.args,
    isLoading: true,
  },
};

export const HasMinWidth: Story = {
  args: {
    ...VariantBase.args,
    minWidth: 200,
  },
};

export const HasIconStart: Story = {
  args: {
    ...VariantBase.args,
    iconStart: {
      name: 'cog',
    },
  },
};

export const HasIconEnd: Story = {
  args: {
    ...VariantBase.args,
    iconEnd: {
      name: 'angle-down',
    },
  },
};

export const VisualTestsDisabled: Story = {
  args: {
    children: 'Button',
    iconStart: {
      name: 'cog',
    },
    iconEnd: {
      name: 'angle-down',
    },
  },
  render: (args) => (
    <Stack gap="md">
      <ButtonV2
        className="button"
        size="sm"
        variant="base"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="highlight"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="danger"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="subtle"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="ghost"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="danger-ghost"
        isDisabled
        {...args}
      />
      <ButtonV2
        className="button"
        size="sm"
        variant="highlight-ghost"
        isDisabled
        {...args}
      />
    </Stack>
  ),
  tags: ['!dev', '!autodocs'],
};
