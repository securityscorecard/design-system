import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FlexContainer } from '../FlexContainer';
import { IconTypes, SSCIconNames } from '../Icon/Icon.enums';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.enums';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const playground: Story<ButtonProps> = (args) => <Button {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  to: { control: { disable: true } },
  href: { control: { disable: true } },
  as: { control: { disable: true } },
  margin: { control: { disable: true } },
  children: {
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
    },
    defaultValue: 'Playground Button',
  },
  variant: {
    control: {
      type: 'select',
      options: ButtonVariants,
    },
    defaultValue: ButtonVariants.solid,
  },
  size: {
    control: {
      type: 'select',
      options: ButtonSizes,
    },
    defaultValue: ButtonSizes.md,
  },
  color: {
    control: {
      type: 'select',
      options: ButtonColors,
    },
    defaultValue: ButtonColors.primary,
  },
  iconType: {
    control: {
      type: 'select',
      options: IconTypes,
    },
    defaultValue: IconTypes.ssc,
  },
  isDisabled: { control: { type: 'boolean' } },
  isLoading: { control: { type: 'boolean' } },
  isExpanded: { control: { type: 'boolean' } },
};

export const SolidButtons: Story = () => (
  <>
    <FlexContainer alignItems="center" flexWrap="wrap" margin={{ bottom: 1 }}>
      <Button color="primary" margin={{ right: 1 }} variant="solid">
        Button
      </Button>
      <Button
        className="hover"
        color="primary"
        margin={{ right: 1 }}
        variant="solid"
      >
        Hovered Button
      </Button>
      <Button
        className="focus"
        color="primary"
        margin={{ right: 1 }}
        variant="solid"
      >
        Focused Button
      </Button>
      <Button
        className="active"
        color="primary"
        margin={{ right: 1 }}
        variant="solid"
      >
        Active Button
      </Button>
      <Button color="primary" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button color="danger" margin={{ right: 1 }} variant="solid">
        Button
      </Button>
      <Button
        className="hover"
        color="danger"
        margin={{ right: 1 }}
        variant="solid"
      >
        Hovered Button
      </Button>
      <Button
        className="focus"
        color="danger"
        margin={{ right: 1 }}
        variant="solid"
      >
        Focused Button
      </Button>
      <Button
        className="active"
        color="danger"
        margin={{ right: 1 }}
        variant="solid"
      >
        Active Button
      </Button>
      <Button color="danger" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </FlexContainer>
  </>
);

export const OutlineButtons: Story = () => (
  <FlexContainer alignItems="center" flexWrap="wrap" margin={{ bottom: 1 }}>
    <Button color="primary" margin={{ right: 1 }} variant="outline">
      Button
    </Button>
    <Button
      className="hover"
      color="primary"
      margin={{ right: 1 }}
      variant="outline"
    >
      Hovered Button
    </Button>
    <Button
      className="focus"
      color="primary"
      margin={{ right: 1 }}
      variant="outline"
    >
      Focused Button
    </Button>
    <Button
      className="active"
      color="primary"
      margin={{ right: 1 }}
      variant="outline"
    >
      Active Button
    </Button>
    <Button color="primary" variant="outline" isDisabled>
      Disabled Button
    </Button>
  </FlexContainer>
);

export const TextButtons: Story = () => (
  <>
    <FlexContainer alignItems="center" flexWrap="wrap" margin={{ bottom: 1 }}>
      <Button color="primary" margin={{ right: 1 }} variant="text">
        Button
      </Button>
      <Button
        className="hover"
        color="primary"
        margin={{ right: 1 }}
        variant="text"
      >
        Hovered Button
      </Button>
      <Button
        className="focus"
        color="primary"
        margin={{ right: 1 }}
        variant="text"
      >
        Focused Button
      </Button>
      <Button
        className="active"
        color="primary"
        margin={{ right: 1 }}
        variant="text"
      >
        Active Button
      </Button>
      <Button color="primary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button color="danger" margin={{ right: 1 }} variant="text">
        Button
      </Button>
      <Button
        className="hover"
        color="danger"
        margin={{ right: 1 }}
        variant="text"
      >
        Hovered Button
      </Button>
      <Button
        className="focus"
        color="danger"
        margin={{ right: 1 }}
        variant="text"
      >
        Focused Button
      </Button>
      <Button
        className="active"
        color="danger"
        margin={{ right: 1 }}
        variant="text"
      >
        Active Button
      </Button>
      <Button color="danger" variant="text" isDisabled>
        Disabled Button
      </Button>
    </FlexContainer>
  </>
);

export const SizedButtons: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button color="primary" margin={{ right: 1 }} size="lg" variant="solid">
        Large Button
      </Button>
      <Button color="primary" margin={{ right: 1 }} size="md" variant="solid">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="solid">
        Small Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button color="primary" margin={{ right: 1 }} size="lg" variant="outline">
        Large Button
      </Button>
      <Button color="primary" margin={{ right: 1 }} size="md" variant="outline">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="outline">
        Small Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button color="primary" margin={{ right: 1 }} size="lg" variant="text">
        Large Button
      </Button>
      <Button color="primary" margin={{ right: 1 }} size="md" variant="text">
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="text">
        Small Button
      </Button>
    </FlexContainer>
  </>
);

export const LoadingButtons: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="lg"
        variant="solid"
        isLoading
      >
        Large Button
      </Button>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="md"
        variant="solid"
        isLoading
      >
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="solid" isLoading>
        Small Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="lg"
        variant="outline"
        isLoading
      >
        Large Button
      </Button>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="md"
        variant="outline"
        isLoading
      >
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="outline" isLoading>
        Small Button
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="lg"
        variant="text"
        isLoading
      >
        Large Button
      </Button>
      <Button
        color="primary"
        margin={{ right: 1 }}
        size="md"
        variant="text"
        isLoading
      >
        Medium Button
      </Button>
      <Button color="primary" size="sm" variant="text" isLoading>
        Small Button
      </Button>
    </FlexContainer>
  </>
);

export const ButtonsWithIconOverview: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
        size="lg"
        variant="solid"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
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
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
        size="lg"
        variant="outline"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
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
    </FlexContainer>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
        size="lg"
        variant="text"
      >
        Large Button
      </Button>
      <Button
        color="primary"
        iconName={SSCIconNames.wrench}
        margin={{ right: 1 }}
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
    </FlexContainer>
  </>
);

export const ExpandedButtons: Story = () => (
  <FlexContainer flexDirection="column">
    <Button margin={{ bottom: 1 }} size="md" variant="solid" isExpanded>
      Full width button
    </Button>
    <Button margin={{ bottom: 1 }} size="md" variant="outline" isExpanded>
      Full width button
    </Button>
    <Button size="md" variant="text" isExpanded>
      Full width button
    </Button>
  </FlexContainer>
);
