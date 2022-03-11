import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Inline } from '../layout';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';
import { ButtonGroupProps } from './ButtonGroup.types';
import { ControlledDropdown } from '../Dropdown';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    options: {
      storySort: {
        order: ['Playground'],
      },
    },
  },
} as Meta;

export const Playground: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const ButtonGroupTemplate: Story<ButtonGroupProps> = (args) => (
  <Inline gap="lg">
    <ButtonGroup {...args} size="lg">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup {...args} size="md">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup {...args} size="sm">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  </Inline>
);

export const SolidPrimaryButtons = ButtonGroupTemplate.bind({});
SolidPrimaryButtons.args = {
  variant: 'solid',
  color: 'primary',
};
export const SolidDangerButtons = ButtonGroupTemplate.bind({});
SolidDangerButtons.args = {
  ...SolidPrimaryButtons.args,
  color: 'danger',
};

export const OutlinePrimaryButtons = ButtonGroupTemplate.bind({});
OutlinePrimaryButtons.args = {
  variant: 'outline',
  color: 'primary',
};
export const OutlineSecondaryButtons = ButtonGroupTemplate.bind({});
OutlineSecondaryButtons.args = {
  ...OutlinePrimaryButtons.args,
  color: 'secondary',
};

export const TextPrimaryButtons = ButtonGroupTemplate.bind({});
TextPrimaryButtons.args = {
  variant: 'text',
  color: 'primary',
};
export const TextSecondaryButtons = ButtonGroupTemplate.bind({});
TextSecondaryButtons.args = {
  ...TextPrimaryButtons.args,
  color: 'secondary',
};
export const TextDangerButtons = ButtonGroupTemplate.bind({});
TextDangerButtons.args = {
  ...TextPrimaryButtons.args,
  color: 'danger',
};

export const SplitButton: Story<ButtonGroupProps> = (args) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement>(null);

  return (
    <>
      <ButtonGroup
        {...args}
        ref={setTriggerEl}
        aria-label="split button"
        size="lg"
      >
        <Button>Primary action</Button>
        <Button
          aria-expanded={isDropdownOpen ? 'true' : undefined}
          aria-haspopup="menu"
          aria-label="more button actions"
          iconName="chevron-down"
          onClick={() => {
            setIsDropdownOpen((prev) => !prev);
          }}
        />
      </ButtonGroup>
      <ControlledDropdown
        isOpen={isDropdownOpen}
        placement="bottom-end"
        triggerEl={triggerEl}
        onClickOut={() => {
          setIsDropdownOpen(false);
        }}
      >
        some content
      </ControlledDropdown>
    </>
  );
};
