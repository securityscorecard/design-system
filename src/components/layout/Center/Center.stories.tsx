import { Meta, StoryFn } from '@storybook/react';

import { SpaceSizes } from '../../../theme/space.enums';
import { theme } from '../../../theme';
import { Button } from '../../Button';
import { Box } from '../mocks/Box';
import Center, { CenterProps } from './Center';

export default {
  title: 'layout/primitives/Center',
  component: Center,
  argTypes: {
    maxWidth: {
      defaultValue: theme.layout.containerWidth,
      table: {
        defaultValue: { summary: theme.layout.containerWidth.toString() },
      },
    },
  },
} as Meta;

const CenterTemplate: StoryFn<CenterProps> = (args) => (
  <Center {...args} style={{ backgroundColor: 'mistyrose' }}>
    <Box />
    <Button color="primary" variant="solid">
      Click me
    </Button>
    <Box />
  </Center>
);

export const Playground = CenterTemplate.bind({});
Playground.args = {
  maxWidth: 500,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithCenteredChildren = CenterTemplate.bind({});
WithCenteredChildren.args = {
  ...Playground.args,
  areChildrenCentered: true,
};

export const WithCenteredText = CenterTemplate.bind({});
WithCenteredText.args = {
  ...Playground.args,
  isTextCentered: true,
};

export const WithGutters = CenterTemplate.bind({});
WithGutters.args = {
  ...Playground.args,
  gutters: SpaceSizes.lg,
};

export const WithCustomMaxWidth = CenterTemplate.bind({});
WithCustomMaxWidth.args = {
  maxWidth: 300,
};
