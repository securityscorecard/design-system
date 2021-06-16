import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SpaceSizes } from '../../../theme/space.enums';
import layout from '../../../theme/layout';
import { Button } from '../../Button';
import { Box } from '../mocks/Box';
import Center, { CenterProps } from './Center';

export default {
  title: 'layout/primitives/Center',
  component: Center,
  argTypes: {
    maxWidth: {
      defaultValue: layout.containerWidth,
      table: {
        defaultValue: { summary: layout.containerWidth },
      },
    },
  },
} as Meta;

const CenterTemplate: Story<CenterProps> = (args) => (
  <div style={{ backgroundColor: '#dadada' }}>
    <Center style={{ backgroundColor: '#0275d8' }} {...args}>
      <Box />
      <Button variant="outline">Click me</Button>
      <Box />
    </Center>
  </div>
);

export const playground = CenterTemplate.bind({});
playground.args = {
  maxWidth: 500,
};

export const WithCenteredChildren = CenterTemplate.bind({});
WithCenteredChildren.args = {
  ...playground.args,
  areChildrenCentered: true,
};

export const WithCenteredText = CenterTemplate.bind({});
WithCenteredText.args = {
  ...playground.args,
  isTextCentered: true,
};

export const WithGutters = CenterTemplate.bind({});
WithGutters.args = {
  ...playground.args,
  gutters: SpaceSizes.lg,
};

export const WithCustomMaxWidth = CenterTemplate.bind({});
WithCustomMaxWidth.args = {
  maxWidth: 300,
};
