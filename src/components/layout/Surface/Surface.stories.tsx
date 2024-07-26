import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Surface from './Surface';
import { Padbox, Stack } from '../index';
import { H5 } from '../../Heading';
import { Text } from '../../Text';

export default {
  title: 'layout/Surface',
  component: Surface,
  args: {
    mode: 'light',
  },
} as Meta<typeof Surface>;

const Child = ({ mode }) => (
  <Stack gap="sm">
    <H5 style={{ color: mode === 'light' ? '#2a2a2a' : 'white' }}>
      Hello user!
    </H5>
    <Text style={{ color: mode === 'light' ? '#2a2a2a' : 'white' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros
      porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor.
      Suspendisse placerat turpis nisl, quis gravida sem semper et.
    </Text>
  </Stack>
);

const Template: StoryFn<typeof Surface> = (args) => (
  <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode ?? 'light'} />
    </Padbox>
  </Surface>
);

export const Playground: StoryFn<typeof Surface> = Template.bind({});
Playground.args = {
  mode: 'light',
  background: 'white',
  radius: 'sm',
  elevation: 0,
  hasBorder: false,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Background: StoryFn<typeof Surface> = (args) => {
  return (
    <Stack gap="lgPlus">
      <Template {...args} background="white" />
      <Template {...args} background="dynamic" />
      <Template {...args} background="transparent" />
    </Stack>
  );
};
Background.parameters = {
  backgrounds: { default: 'grey' },
};

export const BorderRadius: StoryFn<typeof Surface> = (args) => {
  return (
    <Stack gap="lgPlus">
      <Template {...args} radius="none" />
      <Template {...args} radius="sm" />
      <Template {...args} radius="md" />
      <Template {...args} radius="lg" />
    </Stack>
  );
};
BorderRadius.args = {
  background: 'dynamic',
  hasBorder: true,
};

export const Elevation: StoryFn<typeof Surface> = (args) => {
  const elevation = args.elevation ?? 1;
  return (
    <Stack gap="lgPlus">
      <Template {...args} elevation={elevation} />
      <Template {...args} elevation={elevation + 1} />
      <Template {...args} elevation={elevation + 2} />
    </Stack>
  );
};
Elevation.args = {
  background: 'white',
  hasBorder: true,
  elevation: 1,
};

export const Bordered: StoryFn<typeof Surface> = Template.bind({});
Bordered.args = {
  background: 'white',
  hasBorder: true,
};

export const DynamicBackgroundOnLight: StoryFn<typeof Surface> = (args) => (
  <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode} />
      <Surface {...args}>
        <Padbox paddingSize="md">
          <Child mode={args.mode} />
          <Surface {...args}>
            <Padbox paddingSize="md">
              <Child mode={args.mode} />
            </Padbox>
          </Surface>
        </Padbox>
      </Surface>
    </Padbox>
  </Surface>
);
DynamicBackgroundOnLight.args = {
  background: 'dynamic',
  mode: 'light',
  hasBorder: true,
};

export const DynamicBackgroundOnDark: StoryFn<typeof Surface> = (args) => (
  <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode} />
      <Surface {...args}>
        <Padbox paddingSize="md">
          <Child mode={args.mode} />
          <Surface {...args}>
            <Padbox paddingSize="md">
              <Child mode={args.mode} />
            </Padbox>
          </Surface>
        </Padbox>
      </Surface>
    </Padbox>
  </Surface>
);
DynamicBackgroundOnDark.args = {
  background: 'dynamic',
  mode: 'dark',
  hasBorder: true,
};
DynamicBackgroundOnDark.parameters = {
  backgrounds: { default: 'black' },
};
