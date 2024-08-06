import type { Meta, StoryObj } from '@storybook/react';

import Surface from './Surface';
import { Padbox, Stack } from '../index';
import { H5 } from '../../Heading';
import { Text } from '../../Text';

const meta = {
  title: 'layout/Surface',
  component: Surface,
  args: {
    mode: 'light',
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

const Child = () => (
  <Stack gap="sm">
    <H5>Hello user!</H5>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros
      porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor.
      Suspendisse placerat turpis nisl, quis gravida sem semper et.
    </Text>
  </Stack>
);

export const Playground: Story = {
  args: {
    mode: 'light',
    background: 'default',
    radius: 'sm',
    elevation: 0,
    hasBorder: false,
    children: (
      <Padbox paddingSize="md">
        <Child />
      </Padbox>
    ),
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const Background: Story = {
  render: (args) => {
    return (
      <Stack gap="lgPlus">
        <Surface {...args} background="white" />
        <Surface {...args} background="dynamic" />
        <Surface {...args} background="transparent" />
      </Stack>
    );
  },
  args: Playground.args,
  parameters: {
    backgrounds: { default: 'grey' },
  },
};

export const BorderRadius: Story = {
  render: (args) => {
    return (
      <Stack gap="lgPlus">
        <Surface {...args} radius="none" />
        <Surface {...args} radius="sm" />
        <Surface {...args} radius="md" />
        <Surface {...args} radius="lg" />
      </Stack>
    );
  },
  args: {
    ...Playground.args,
    background: 'dynamic',
    hasBorder: true,
  },
};

export const Elevation: Story = {
  render: (args) => {
    const elevation = args.elevation ?? 1;
    return (
      <Stack gap="lgPlus">
        <Surface {...args} elevation={elevation} />
        <Surface {...args} elevation={elevation + 1} />
        <Surface {...args} elevation={elevation + 2} />
      </Stack>
    );
  },
  args: {
    ...Playground.args,
    background: 'white',
    hasBorder: true,
    elevation: 1,
  },
};

export const Bordered: Story = {
  args: {
    ...Playground.args,
    background: 'white',
    hasBorder: true,
  },
};

export const DynamicBackgroundOnLight: Story = {
  render: (args) => (
    <Surface {...args}>
      <Padbox paddingSize="md">
        <Child />
        <Surface {...args}>
          <Padbox paddingSize="md">
            <Child />
            <Surface {...args}>
              <Padbox paddingSize="md">
                <Child />
              </Padbox>
            </Surface>
          </Padbox>
        </Surface>
      </Padbox>
    </Surface>
  ),
  args: {
    ...Playground.args,
    background: 'dynamic',
    mode: 'light',
    hasBorder: true,
  },
};

export const DynamicBackgroundOnDark: Story = {
  render: (args) => (
    <Surface {...args}>
      <Padbox paddingSize="md">
        <Child />
        <Surface {...args}>
          <Padbox paddingSize="md">
            <Child />
            <Surface {...args}>
              <Padbox paddingSize="md">
                <Child />
              </Padbox>
            </Surface>
          </Padbox>
        </Surface>
      </Padbox>
    </Surface>
  ),
  args: {
    ...Playground.args,
    background: 'dynamic',
    mode: 'dark',
    hasBorder: true,
  },
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
