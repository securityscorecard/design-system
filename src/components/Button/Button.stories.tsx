import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Inline, Stack } from '../layout';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.enums';
import { SpaceSizes } from '../..';

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
    size: {
      ...generateControl('select', ButtonSizes),
    },
    color: {
      ...generateControl('select', ButtonColors),
    },
    iconName: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as Meta;

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Playground Button',
  variant: ButtonVariants.solid,
  size: ButtonSizes.md,
  color: ButtonColors.primary,
};

export const SolidButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="solid">
        Button
      </Button>
      <Button className="hover" color="primary" variant="solid">
        Hovered Button
      </Button>
      <Button className="focus" color="primary" variant="solid">
        Focused Button
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
      <Button className="focus" color="danger" variant="solid">
        Focused Button
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

export const OutlineButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="outline">
        Button
      </Button>
      <Button className="hover" color="primary" variant="outline">
        Hovered Button
      </Button>
      <Button className="focus" color="primary" variant="outline">
        Focused Button
      </Button>
      <Button className="active" color="primary" variant="outline">
        Active Button
      </Button>
      <Button color="primary" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="secondary" variant="outline">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="outline">
        Hovered Button
      </Button>
      <Button className="focus" color="secondary" variant="outline">
        Focused Button
      </Button>
      <Button className="active" color="secondary" variant="outline">
        Active Button
      </Button>
      <Button color="secondary" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>
);

export const TextButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="text">
        Button
      </Button>
      <Button className="hover" color="primary" variant="text">
        Hovered Button
      </Button>
      <Button className="focus" color="primary" variant="text">
        Focused Button
      </Button>
      <Button className="active" color="primary" variant="text">
        Active Button
      </Button>
      <Button color="primary" variant="text" isDisabled>
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
      <Button className="focus" color="danger" variant="text">
        Focused Button
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

export const SizedButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="solid">
        Large Button
      </Button>
      <Button color="primary" size="md" variant="solid">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="solid">
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="outline">
        Large Button
      </Button>
      <Button color="primary" size="md" variant="outline">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="outline">
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="text">
        Large Button
      </Button>
      <Button color="primary" size="md" variant="text">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="text">
        Small Button
      </Button>
    </Inline>
  </Stack>
);

export const LoadingButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="solid" isLoading>
        Large Button
      </Button>
      <Button color="primary" size="md" variant="solid" isLoading>
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="solid" isLoading>
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="outline" isLoading>
        Large Button
      </Button>
      <Button color="primary" size="md" variant="outline" isLoading>
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="outline" isLoading>
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button color="primary" size="lg" variant="text" isLoading>
        Large Button
      </Button>
      <Button color="primary" size="md" variant="text" isLoading>
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="text" isLoading>
        Small Button
      </Button>
    </Inline>
  </Stack>
);

export const ButtonsWithIconOverview: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="lg"
        variant="solid"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="md"
        variant="solid"
      >
        Medium Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="sm"
        variant="solid"
      >
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="lg"
        variant="outline"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="md"
        variant="outline"
      >
        Medium Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="sm"
        variant="outline"
      >
        Small Button
      </Button>
    </Inline>
    <Inline align="center" gap={SpaceSizes.md}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="lg"
        variant="text"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="md"
        variant="text"
      >
        Medium Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        size="sm"
        variant="text"
      >
        Small Button
      </Button>
    </Inline>
  </Stack>
);

export const ExpandedButtons: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Button size="md" variant="solid" isExpanded>
      Full width button
    </Button>
    <Button size="md" variant="outline" isExpanded>
      Full width button
    </Button>
    <Button size="md" variant="text" isExpanded>
      Full width button
    </Button>
  </Stack>
);
