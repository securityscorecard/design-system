import { Meta, StoryFn } from '@storybook/react';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Inline, Stack } from '../layout';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { ButtonColors, ButtonVariants } from './Button.enums';
import { SpaceSizes } from '../../theme';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    to: { control: { disable: true } },
    href: { control: { disable: true } },
    as: { control: { disable: true } },
    margin: { control: { disable: true } },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      ...generateControl('select', ButtonVariants),
    },
    color: {
      ...generateControl('select', ButtonColors),
    },
    iconName: {
      ...generateControl('select', SSCIconNames),
      description: '(Deprecated) Use iconStart property instead',
    },
    iconType: {
      ...generateControl('select', { ssc: 'ssc', far: 'far', fab: 'fab' }),
      description: '(Deprecated) Use iconStart property instead',
    },
    iconStart: {
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: 'BaseIcon',
          detail: `{
  name: SSCIcons | (string & {});
  type?: 'ssc' | 'far' | 'fab';
}`,
        },
      },
    },
    iconEnd: {
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: 'BaseIcon',
          detail: `{
  name: SSCIcons | (string & {});
  type?: 'ssc' | 'far' | 'fab';
}`,
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Parameters "iconName" and "iconType" are deprecated. These are kept for backward compatibility. You should define the icon using
        \`\`\`iconStart={{iconName, iconType}}\`\`\` to define the icon before text or with \`\`\`iconEnd={{iconName, iconType}}\`\`\` to place icon after text`,
      },
    },
  },
  tags: ['deprecated'],
} as Meta;

export const Playground: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Playground Button',
  variant: ButtonVariants.solid,
  color: ButtonColors.primary,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SolidButtons: StoryFn = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="solid">
        Button
      </Button>
      <Button className="hover" color="primary" variant="solid">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="solid">
        Active Button
      </Button>
      <Button color="primary" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="solid">
        Button
      </Button>
      <Button className="hover" color="danger" variant="solid">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="solid">
        Active Button
      </Button>
      <Button color="danger" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>
);
SolidButtons.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const OutlineButtons: StoryFn = () => (
  <Inline gap={SpaceSizes.md}>
    <Button color="primary" variant="outline">
      Button
    </Button>
    <Button className="hover" color="primary" variant="outline">
      Hovered Button
    </Button>
    <Button className="active" color="primary" variant="outline">
      Active Button
    </Button>
    <Button color="primary" variant="outline" isDisabled>
      Disabled Button
    </Button>
  </Inline>
);

export const TextButtons: StoryFn = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="text">
        Button
      </Button>
      <Button className="hover" color="primary" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="text">
        Active Button
      </Button>
      <Button color="primary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="secondary" variant="text">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="secondary" variant="text">
        Active Button
      </Button>
      <Button color="secondary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="text">
        Button
      </Button>
      <Button className="hover" color="danger" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="text">
        Active Button
      </Button>
      <Button color="danger" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>
);
TextButtons.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const GhostButtons: StoryFn = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="primary" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="ghost">
        Active Button
      </Button>
      <Button color="primary" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="secondary" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="secondary" variant="ghost">
        Active Button
      </Button>
      <Button color="secondary" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="danger" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="ghost">
        Active Button
      </Button>
      <Button color="danger" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>
);
GhostButtons.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const LoadingButtons: StoryFn = () => (
  <Inline gap={SpaceSizes.md}>
    <Button color="primary" variant="solid" isLoading>
      Button
    </Button>

    <Button color="primary" variant="outline" isLoading>
      Button
    </Button>

    <Button color="primary" variant="text" isLoading>
      Button
    </Button>
    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="solid"
      isLoading
    />

    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="outline"
      isLoading
    />

    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="text"
      isLoading
    />
  </Inline>
);

export const ButtonsWithIconOverview: StoryFn = () => (
  <Inline gap={SpaceSizes.md}>
    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="solid"
    >
      Button
    </Button>
    <Button
      aria-label="Wrench solid icon button"
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="solid"
    />
    <Button
      color="primary"
      iconEnd={{ name: SSCIconNames.wrench, type: 'ssc' }}
      variant="solid"
    >
      Button
    </Button>
    <Button
      color="primary"
      iconEnd={{ name: SSCIconNames.cog, type: 'ssc' }}
      iconStart={{ name: SSCIconNames.wrench }}
      variant="solid"
    >
      Button
    </Button>

    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="outline"
    >
      Button
    </Button>
    <Button
      aria-label="Wrench outline icon button"
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="outline"
    />
    <Button
      color="primary"
      iconEnd={{ name: SSCIconNames.wrench, type: 'ssc' }}
      variant="outline"
    >
      Button
    </Button>

    <Button
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="text"
    >
      Button
    </Button>
    <Button
      aria-label="Wrench text icon button"
      color="primary"
      iconStart={{ name: SSCIconNames.wrench }}
      variant="text"
    />
    <Button
      aria-label="Wrench text icon button"
      color="primary"
      iconEnd={{ name: SSCIconNames.wrench, type: 'ssc' }}
      variant="text"
    >
      Button
    </Button>
    <Button
      aria-label="Wrench text icon button"
      color="primary"
      iconName={SSCIconNames.wrench}
      iconType="ssc"
      variant="text"
    />
  </Inline>
);

export const ExpandedButtons: StoryFn = () => (
  <Stack gap={SpaceSizes.lg}>
    <Button variant="solid" isExpanded>
      Full width button
    </Button>
    <Button variant="outline" isExpanded>
      Full width button
    </Button>
    <Button variant="text" isExpanded>
      Full width button
    </Button>
  </Stack>
);
