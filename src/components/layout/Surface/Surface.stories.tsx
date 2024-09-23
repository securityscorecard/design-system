import type { Meta, StoryObj } from '@storybook/react';

import Surface from './Surface';
import { Padbox, Stack } from '../index';
import { H5 } from '../../Heading';
import { Text } from '../../Text';

const meta = {
  title: 'layout/Surface',
  component: Surface,
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
        <Surface {...args} background="default" />
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
    return (
      <Stack gap="lgPlus">
        <Surface {...args} elevation={1} />
        <Surface {...args} elevation={2} />
        <Surface {...args} elevation={3} />
        <Surface {...args} elevation={4} />
        <Surface {...args} elevation={5} />
      </Stack>
    );
  },
  args: {
    ...Playground.args,
    hasBorder: true,
  },
};

export const Bordered: Story = {
  args: {
    ...Playground.args,
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
    hasBorder: true,
  },
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
