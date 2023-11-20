import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Surface from './Surface';
import { Padbox, Stack } from '../index';
import { H5, Text } from '../../typographyLegacy';

export default {
  title: 'layout/Surface',
  component: Surface,
  args: {
    mode: 'light',
  },
} as ComponentMeta<typeof Surface>;

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

const Template: ComponentStory<typeof Surface> = (args) => (
  <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode ?? 'light'} />
    </Padbox>
  </Surface>
);

export const Playground: ComponentStory<typeof Surface> = Template.bind({});
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

export const Background: ComponentStory<typeof Surface> = (args) => {
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

export const BorderRadius: ComponentStory<typeof Surface> = (args) => {
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

export const Elevation: ComponentStory<typeof Surface> = (args) => {
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

export const Bordered: ComponentStory<typeof Surface> = Template.bind({});
Bordered.args = {
  background: 'white',
  hasBorder: true,
};

export const DynamicBackgroundOnLight: ComponentStory<typeof Surface> = (
  args,
) => (
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

export const DynamicBackgroundOnDark: ComponentStory<typeof Surface> = (
  args,
) => (
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
