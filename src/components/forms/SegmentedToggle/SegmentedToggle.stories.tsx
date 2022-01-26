import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SegmentedToggleProps } from './SegmentedToggle.types';
import {
  SegmentedToggle,
  SegmentedToggleEnums,
  SegmentedToggleItem,
} from './index';
import { generateControl } from '../../../utils/tests/storybook';
import { SpaceSizes } from '../../../theme/space.enums';
import { Stack } from '../../layout/Stack';
import Text from '../../typography/Text/Text';
import { Button } from '../../Button';
import { Inline } from '../../layout/Inline';

export default {
  title: 'components/forms/SegmentedToggle',
  component: SegmentedToggle,
  argTypes: {
    name: { control: { disable: true } },
    size: {
      ...generateControl('select', SegmentedToggleEnums.SegmentedToggleSizes),
    },
  },
} as Meta;

export const playground: Story<SegmentedToggleProps> = (args) => (
  <SegmentedToggle {...args}>
    <SegmentedToggleItem itemId="input1" label="One" value="1" defaultChecked />
    <SegmentedToggleItem itemId="input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="input3" label="Three" value="3" />
  </SegmentedToggle>
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  group: 'playground',
  size: SegmentedToggleEnums.SegmentedToggleSizes.lg,
};

export const Default: Story = () => (
  <SegmentedToggle
    group="default"
    size={SegmentedToggleEnums.SegmentedToggleSizes.lg}
  >
    <SegmentedToggleItem
      itemId="default_input1"
      label="One"
      value="1"
      defaultChecked
    />
    <SegmentedToggleItem itemId="default_input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="default_input3" label="Three" value="3" />
  </SegmentedToggle>
);

export const DifferentSizes: Story = () => (
  <Stack gap={SpaceSizes.lg} justify="flex-start">
    <Inline gap="md">
      <SegmentedToggle
        group="sizes_lg"
        size={SegmentedToggleEnums.SegmentedToggleSizes.lg}
      >
        <SegmentedToggleItem
          itemId="lg_input1"
          label="One"
          value="1"
          defaultChecked
        />
        <SegmentedToggleItem itemId="lg_input2" label="Two" value="2" />
        <SegmentedToggleItem itemId="lg_input3" label="Three" value="3" />
      </SegmentedToggle>
      {/* Just to illustrate height match with button size */}
      <Button size="lg">Button</Button>
    </Inline>
    <Inline gap="md">
      <SegmentedToggle
        group="sizes_md"
        size={SegmentedToggleEnums.SegmentedToggleSizes.md}
      >
        <SegmentedToggleItem
          itemId="md_input1"
          label="One"
          value="1"
          defaultChecked
        />
        <SegmentedToggleItem itemId="md_input2" label="Two" value="2" />
        <SegmentedToggleItem itemId="md_input3" label="Three" value="3" />
      </SegmentedToggle>
      {/* Just to illustrate height match with button size */}
      <Button size="md">Button</Button>
    </Inline>
  </Stack>
);

export const Disabled: Story = () => (
  <Stack gap={SpaceSizes.lg} justify="flex-start">
    <SegmentedToggle
      group="sizes_lg_disabled"
      size={SegmentedToggleEnums.SegmentedToggleSizes.lg}
      isDisabled
    >
      <SegmentedToggleItem
        itemId="disabled_lg_input1"
        label="One"
        value="1"
        defaultChecked
      />
      <SegmentedToggleItem itemId="disabled_lg_input2" label="Two" value="2" />
      <SegmentedToggleItem
        itemId="disabled_lg_input3"
        label="Three"
        value="3"
      />
    </SegmentedToggle>

    <SegmentedToggle
      group="sizes_md_disabled"
      size={SegmentedToggleEnums.SegmentedToggleSizes.md}
      isDisabled
    >
      <SegmentedToggleItem
        itemId="disabled_md_input1"
        label="One"
        value="1"
        defaultChecked
      />
      <SegmentedToggleItem itemId="disabled_md_input2" label="Two" value="2" />
      <SegmentedToggleItem
        itemId="disabled_md_input3"
        label="Three"
        value="3"
      />
    </SegmentedToggle>
  </Stack>
);

export const StateManagement: Story = () => {
  const [selected, setSelected] = useState('1');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Stack gap={SpaceSizes.lg} justify="flex-start">
      <SegmentedToggle
        group="state"
        size={SegmentedToggleEnums.SegmentedToggleSizes.lg}
        onChange={handleChange}
      >
        <SegmentedToggleItem
          itemId="state_input1"
          label="One"
          value="1"
          defaultChecked
        />
        <SegmentedToggleItem itemId="state_input2" label="Two" value="2" />
        <SegmentedToggleItem itemId="state_input3" label="Three" value="3" />
      </SegmentedToggle>
      <Text>Selected value: {selected}</Text>
    </Stack>
  );
};

StateManagement.parameters = {
  screenshot: { skip: true },
};
