import type { Meta, Story } from '@storybook/react';
import type { DropdownProps } from './Dropdown.types';

import { useState } from 'react';

import { Button } from '../Button';
import ControlledDropdown from './ControlledDropdown';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { generateControl } from '../../utils/tests/storybook';
import { CreatableSelect } from '../forms/Select';

export default {
  title: 'components/Dropdown/ControlledDropdown',
  component: ControlledDropdown,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { ControlledDropdown } from '@securityscorecard/design-system';
\`\`\`

Barebone Dropdown component that takes \`isOpen\` props and renders pane based on it's value.
      `,
      },
    },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    triggerEl: { control: { disable: true } },
    innerPaddingType: { ...generateControl('select', PaddingTypes) },
  },
} as Meta;

const options = [
  { value: 'Kitty', label: 'Kitty' },
  { value: 'Lilly', label: 'Lilly' },
  { value: 'Lucy', label: 'Lucy' },
  { value: 'Leo', label: 'Leo' },
  { value: 'Jack', label: 'Jack' },
];

export const UsingWithAnotherComponentControlled: Story<DropdownProps> = (
  args,
) => {
  const [currentValue, setCurrentValue] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement>(null);

  return (
    <>
      <span ref={setTriggerEl} /* HACK since Button does not forward ref */>
        <Button
          iconName="plus"
          variant="text"
          onClick={() => {
            setIsDropdownOpen((prev) => !prev);
          }}
        >
          Add kitten
        </Button>
      </span>
      <ControlledDropdown
        {...args}
        ref={null}
        isOpen={isDropdownOpen}
        triggerEl={triggerEl}
        onClickOut={() => {
          setIsDropdownOpen(false);
        }}
      >
        <CreatableSelect
          createNewLabel="Buy new kitten"
          menuActions={[
            {
              label: 'Close dropdown',
              name: 'close-dropdown',
              onClick: () => {
                setIsDropdownOpen(false);
              },
            },
          ]}
          options={options}
          value={currentValue}
          isClearable
          isMenuPositionRelative
          isMulti
          menuIsOpen
          onChange={setCurrentValue}
          onCreateOption={(inputString) => {
            const newOption = {
              label: inputString,
              value: inputString.toLowerCase().replace(/\W/g, ''),
            };
            setCurrentValue((prevValue) =>
              prevValue === null ? [newOption] : [...prevValue, newOption],
            );
          }}
        />
      </ControlledDropdown>
    </>
  );
};
UsingWithAnotherComponentControlled.storyName =
  'Using With Another Component (Controlled)';
UsingWithAnotherComponentControlled.parameters = {
  screenshot: { skip: true },
};
UsingWithAnotherComponentControlled.args = {
  innerPaddingSize: 'sm',
};
