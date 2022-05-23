import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SpaceSizes } from '../../../theme/space.enums';
import { Box } from '../mocks/Box';
import Grid from './Grid';

export default {
  title: 'layout/primitives/Grid',
  component: Grid,
  argTypes: {
    align: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: '"stretch"' },
      },
    },
    wrapperEl: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '"div"' },
      },
    },
    parentEl: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '"div"' },
      },
    },
  },
} as Meta;

const GridTemplate: Story = (args) => (
  <Grid style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box>Item</Box>
    <Box>Long item</Box>
    <Box>Very long item item item</Box>
    <Box>Item</Box>
    <Box>Item</Box>
    <Box>Long item</Box>
    <Box>Very long item item item item</Box>
    <Box>Very long item item item</Box>
    <Box>Item</Box>
    <Box>Long item</Box>
  </Grid>
);

export const Playground = GridTemplate.bind({});
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithGap = GridTemplate.bind({});
WithGap.args = {
  gap: SpaceSizes.sm,
};

export const WithVerticalAlignment = GridTemplate.bind({});
WithVerticalAlignment.args = {
  ...WithGap.args,
  align: 'center',
};

export const WithCustomColumnsNumber = GridTemplate.bind({});
WithCustomColumnsNumber.args = {
  ...WithGap.args,
  cols: 3,
};
