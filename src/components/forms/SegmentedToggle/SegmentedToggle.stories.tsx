import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SegmentedToggle, SegmentedToggleItem } from './SegmentedToggle';
import { SpaceSizes } from '../../../theme/space.enums';
import { Stack } from '../../layout/Stack';
import { Text } from '../../Text';

/**
 * ```jsx
 * import { SegmentedToggle, SegmentedToggleItem } from '@securityscorecard/design-system';
 * ```
 */

const meta = {
  title: 'components/forms/SegmentedToggle',
  component: SegmentedToggle,
  argTypes: {
    children: {
      description:
        'List of SegmentedToggleItem components that will be rendered as options',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      // @ts-expect-error Storybook is strangly typed here
      type: {
        required: true,
      },
    },
    group: {
      description:
        'The group is used to identify the SegmentedToggle within the form',
    },
    isDisabled: {
      description: 'Indicates if the SegmentedToggle is disabled or not.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    isExpanded: {
      description:
        'Should the SegmentedToggle be expanded to full available width.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      description: 'Callback when the SegmentedToggle has changed.',
      table: {
        type: {
          summary: '(event: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
  },
} satisfies Meta<typeof SegmentedToggle>;
export default meta;

type Story = StoryObj<typeof meta>;

const children = ({ group }) => (
  <>
    <SegmentedToggleItem
      itemId={`${group}-input1`}
      label="One"
      value="1"
      defaultChecked
    />
    <SegmentedToggleItem itemId={`${group}-input2`} label="Two" value="2" />
    <SegmentedToggleItem itemId={`${group}-input3`} label="Three" value="3" />
  </>
);

export const Playground: Story = {
  args: {
    group: 'playground',
    children: children({ group: 'playground' }),
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const Default: Story = {
  args: { children: children({ group: 'default' }), group: 'default' },
};

export const WithCount: Story = {
  args: {
    children: (
      <>
        <SegmentedToggleItem
          itemId="counter-input1"
          label="One"
          value="1"
          defaultChecked
        />
        <SegmentedToggleItem
          count={10}
          itemId="counter-input2"
          label="Two"
          value="2"
        />
        <SegmentedToggleItem
          count={20}
          itemId="counter-input3"
          label="Three"
          value="3"
        />
      </>
    ),
    group: 'counter',
  },
};

export const Disabled: Story = {
  args: {
    children: children({ group: 'disabled' }),
    group: 'disabled',
    isDisabled: true,
  },
};

export const DarkMode: Story = {
  args: { children: children({ group: 'darkMode' }), group: 'darkMode' },
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};

export const StateManagement: Story = {
  args: {
    children: children({ group: 'stateManagement' }),
    group: 'stateManagement',
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('1');

    return (
      <Stack gap={SpaceSizes.lg} justify="flex-start">
        <SegmentedToggle
          {...args}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        />
        <Text>Selected value: {selected}</Text>
      </Stack>
    );
  },
  parameters: {
    screenshot: { skip: true },
  },
};
