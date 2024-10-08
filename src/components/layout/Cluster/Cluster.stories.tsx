import { Meta, StoryFn } from '@storybook/react';

import { SpaceSizes } from '../../../theme/space.enums';
import { Box } from '../mocks/Box';
import Cluster, { ClusterProps } from './Cluster';

export default {
  title: 'layout/primitives/Cluster',
  component: Cluster,
  argTypes: {
    align: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: '"stretch"' },
      },
    },
    justify: {
      options: [
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'space-evenly',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: '"flex-start"' },
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

const ClusterTemplate: StoryFn<ClusterProps> = (args) => (
  <Cluster {...args}>
    <Box>Item</Box>
    <Box style={{ height: '100px' }}>Long item</Box>
    <Box>Very long item item item</Box>
    <Box>Item</Box>
    <Box>Item</Box>
    <Box>Long item</Box>
    <Box>Very long item item item item</Box>
    <Box>Very long item item item</Box>
    <Box>Item</Box>
    <Box>Long item</Box>
  </Cluster>
);

export const Playground = ClusterTemplate.bind({});
Playground.args = { gap: 'md' };
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithGap = ClusterTemplate.bind({});
WithGap.args = {
  gap: SpaceSizes.sm,
};

export const WithHorizontalAlignment = ClusterTemplate.bind({});
WithHorizontalAlignment.args = {
  ...WithGap.args,
  justify: 'center',
};

export const WithVerticalAlignment = ClusterTemplate.bind({});
WithVerticalAlignment.args = {
  ...WithGap.args,
  align: 'center',
};
