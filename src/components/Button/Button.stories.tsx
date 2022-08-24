import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

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
    },
  },
} as Meta;

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Playground Button',
  variant: ButtonVariants.solid,
  color: ButtonColors.primary,
};
Playground.parameters = {
  screenshot: { skip: true },
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
      <Button color="success" variant="solid">
        Button
      </Button>
      <Button className="hover" color="success" variant="solid">
        Hovered Button
      </Button>
      <Button className="focus" color="success" variant="solid">
        Focused Button
      </Button>
      <Button className="active" color="success" variant="solid">
        Active Button
      </Button>
      <Button color="success" variant="solid" isDisabled>
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
      <Button color="success" variant="outline">
        Button
      </Button>
      <Button className="hover" color="success" variant="outline">
        Hovered Button
      </Button>
      <Button className="focus" color="success" variant="outline">
        Focused Button
      </Button>
      <Button className="active" color="success" variant="outline">
        Active Button
      </Button>
      <Button color="success" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="outline">
        Button
      </Button>
      <Button className="hover" color="danger" variant="outline">
        Hovered Button
      </Button>
      <Button className="focus" color="danger" variant="outline">
        Focused Button
      </Button>
      <Button className="active" color="danger" variant="outline">
        Active Button
      </Button>
      <Button color="danger" variant="outline" isDisabled>
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
      <Button color="secondary" variant="text">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="text">
        Hovered Button
      </Button>
      <Button className="focus" color="secondary" variant="text">
        Focused Button
      </Button>
      <Button className="active" color="secondary" variant="text">
        Active Button
      </Button>
      <Button color="secondary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="success" variant="text">
        Button
      </Button>
      <Button className="hover" color="success" variant="text">
        Hovered Button
      </Button>
      <Button className="focus" color="success" variant="text">
        Focused Button
      </Button>
      <Button className="active" color="success" variant="text">
        Active Button
      </Button>
      <Button color="success" variant="text" isDisabled>
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

export const LoadingButtons: Story = () => (
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
  </Inline>
);

export const ButtonsWithIconOverview: Story = () => (
  <Inline gap={SpaceSizes.md}>
    <Button color="primary" iconName={SSCIconNames.wrench} variant="solid">
      Button
    </Button>
    <Button color="primary" iconName={SSCIconNames.wrench} variant="solid" />

    <Button color="primary" iconName={SSCIconNames.wrench} variant="outline">
      Button
    </Button>
    <Button color="primary" iconName={SSCIconNames.wrench} variant="outline" />

    <Button color="primary" iconName={SSCIconNames.wrench} variant="text">
      Button
    </Button>
    <Button color="primary" iconName={SSCIconNames.wrench} variant="text" />
  </Inline>
);

export const ExpandedButtons: Story = () => (
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
