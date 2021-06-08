import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Center, { CenterProps } from './Center';
import { Button } from '../../Button';
import { getColor } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { Padbox } from '../Padbox';
import layout from '../../../theme/layout';

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

const Box = styled(Padbox).attrs((props) => ({
  paddingSize: SpaceSizes.sm,
  children:
    props.children ||
    'Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante pretium eget.',
}))`
  background-color: ${getColor('blueberry0')};
`;

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
