import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Link, Paragraph } from '../typographyLegacy';
import { Inline, Stack } from '../layout';
import { Button } from '../Button';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { generateControl } from '../../utils/tests/storybook';
import { CreatableSelect } from '../forms/Select';

export default {
  title: 'components/Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { Dropdown } from '@securityscorecard/design-system';
\`\`\`
      `,
      },
    },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    trigger: { control: { disable: true } },
    onClose: { table: { defaultValue: { summary: 'noop()' } } },
    onOpen: { table: { defaultValue: { summary: 'noop()' } } },
    innerPaddingType: { ...generateControl('select', PaddingTypes) },
  },
} as Meta;

function Content() {
  return (
    <Stack gap="md">
      <Paragraph size="md">
        Fusce elementum justo ac augue faucibus mattis. Aenean non feugiat
        metus, in pretium dui.
      </Paragraph>
      <Inline gap="sm">
        <Link>Action</Link>
        <Link>Action</Link>
      </Inline>
    </Stack>
  );
}

function ShortContent() {
  return (
    <Stack gap="md">
      <Paragraph size="md">Short dropdown content</Paragraph>
    </Stack>
  );
}

const DropdownTemplate: Story<DropdownProps> = (args) => (
  <div style={{ height: 140 }}>
    <Dropdown {...args}>
      <Content />
    </Dropdown>
  </div>
);

export const Playground = DropdownTemplate.bind({});
Playground.args = {
  trigger: <Button variant="outline">Trigger</Button>,
  onClose: action('onClose'),
  onOpen: action('onOpen'),
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const OnHoverEvent = DropdownTemplate.bind({});
OnHoverEvent.args = {
  ...Playground.args,
  triggerEvents: ['hover'],
};

export const OnFocusEvent = DropdownTemplate.bind({});
OnFocusEvent.args = {
  ...Playground.args,
  triggerEvents: ['focus'],
};

export const Placements: Story<DropdownProps> = (args) => (
  <Stack gap="xl">
    <Inline gap="lg" justify="space-between">
      <Dropdown
        {...args}
        placement="bottom-start"
        trigger={<Button>bottom-start</Button>}
      >
        <ShortContent />
      </Dropdown>
      <Dropdown {...args} placement="bottom" trigger={<Button>bottom</Button>}>
        <ShortContent />
      </Dropdown>
      <Dropdown
        {...args}
        placement="bottom-end"
        trigger={<Button>bottom-end</Button>}
      >
        <ShortContent />
      </Dropdown>
    </Inline>
    <Inline gap="lg" justify="space-between">
      <Stack gap="lg">
        <Dropdown
          {...args}
          placement="right-start"
          trigger={<Button>right-start</Button>}
        >
          <ShortContent />
        </Dropdown>
        <Dropdown {...args} placement="right" trigger={<Button>right</Button>}>
          <ShortContent />
        </Dropdown>
        <Dropdown
          {...args}
          placement="right-end"
          trigger={<Button>right-end</Button>}
        >
          <ShortContent />
        </Dropdown>
      </Stack>
      <Stack gap="lg">
        <Dropdown
          {...args}
          placement="left-start"
          trigger={<Button>left-start</Button>}
        >
          <ShortContent />
        </Dropdown>
        <Dropdown {...args} placement="left" trigger={<Button>left</Button>}>
          <ShortContent />
        </Dropdown>
        <Dropdown
          {...args}
          placement="left-end"
          trigger={<Button>left-end</Button>}
        >
          <ShortContent />
        </Dropdown>
      </Stack>
    </Inline>
    <Inline gap="lg" justify="space-between">
      <Dropdown
        {...args}
        placement="top-start"
        trigger={<Button>top-start</Button>}
      >
        <ShortContent />
      </Dropdown>
      <Dropdown {...args} placement="top" trigger={<Button>top</Button>}>
        <ShortContent />
      </Dropdown>
      <Dropdown
        {...args}
        placement="top-end"
        trigger={<Button>top-end</Button>}
      >
        <ShortContent />
      </Dropdown>
    </Inline>
  </Stack>
);

Placements.args = {
  ...Playground.args,
  hasPaneArrow: true,
  defaultIsOpen: true,
  maxPaneWidth: 'auto',
};
Placements.parameters = {
  docs: {
    inlineStories: true,
  },
};

export const Elevated = DropdownTemplate.bind({});
Elevated.args = {
  ...Playground.args,
  isPaneElevated: true,
  defaultIsOpen: true,
};

export const WithArrow: Story<DropdownProps> = (args) => (
  <div style={{ height: 170 }}>
    <Inline gap="lg" justify="space-between">
      <Dropdown {...args} placement="bottom-start">
        <Content />
      </Dropdown>
      <Dropdown {...args} placement="bottom-end" isPaneElevated>
        <Content />
      </Dropdown>
    </Inline>
  </div>
);
WithArrow.args = {
  ...Playground.args,
  hasPaneArrow: true,
  defaultIsOpen: true,
};

export const WithCustomMaxWidth = DropdownTemplate.bind({});
WithCustomMaxWidth.args = {
  ...Playground.args,
  maxPaneWidth: 450,
  defaultIsOpen: true,
};
export const WithAutoMaxWidth = DropdownTemplate.bind({});
WithAutoMaxWidth.args = {
  ...Playground.args,
  maxPaneWidth: 'auto',
  defaultIsOpen: true,
};

export const WithCustomInnerPadding = DropdownTemplate.bind({});
WithCustomInnerPadding.args = {
  ...Playground.args,
  defaultIsOpen: true,
  innerPaddingSize: 'xl',
  innerPaddingType: 'squish',
};

const options = [
  { value: 'Kitty', label: 'Kitty' },
  { value: 'Lilly', label: 'Lilly' },
  { value: 'Lucy', label: 'Lucy' },
  { value: 'Leo', label: 'Leo' },
  { value: 'Jack', label: 'Jack' },
];

export const UsingWithAnotherComponent: Story<DropdownProps> = () => (
  <Dropdown
    innerPaddingSize="sm"
    trigger={
      <Button iconStart={{ iconName: 'plus' }} variant="text">
        Add kitten
      </Button>
    }
  >
    <CreatableSelect
      createNewLabel="Buy new kitten"
      options={options}
      isMenuPositionRelative
      isMulti
      menuIsOpen
    />
  </Dropdown>
);
UsingWithAnotherComponent.parameters = {
  screenshot: { skip: true },
};
