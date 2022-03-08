import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SpaceSizes } from '../../../theme/space.enums';
import { Box as MockBox } from '../mocks/Box';
import Inline, { InlineProps } from './Inline';
import { StretchEnum } from './Inline.enums';

export default {
  title: 'layout/primitives/Inline',
  component: Inline,
  argTypes: {
    align: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
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
    },
  },
} as Meta;

const Box = ({ style = {} }: { style?: React.CSSProperties }) => (
  <MockBox style={{ width: '150px', minHeight: '150px', ...style }} />
);

const InlineTemplate: Story<InlineProps> = (args) => (
  <Inline style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box />
    <Box style={{ height: '300px' }} />
    <Box />
    <Box />
  </Inline>
);

export const Playground = InlineTemplate.bind({});

export const WithGap = InlineTemplate.bind({});
WithGap.args = {
  gap: SpaceSizes.sm,
};

export const WithHorizontalAlignment = InlineTemplate.bind({});
WithHorizontalAlignment.args = {
  ...WithGap.args,
  justify: 'center',
};

export const WithVerticalAlignment = InlineTemplate.bind({});
WithVerticalAlignment.args = {
  ...WithGap.args,
  align: 'center',
};

export const WithStretchStart = InlineTemplate.bind({});
WithStretchStart.args = {
  ...WithGap.args,
  stretch: StretchEnum.start,
};

export const WithStretchEnd = InlineTemplate.bind({});
WithStretchEnd.args = {
  ...WithGap.args,
  stretch: StretchEnum.end,
};

export const WithStretchAll = InlineTemplate.bind({});
WithStretchAll.args = {
  ...WithGap.args,
  stretch: StretchEnum.all,
};

export const WithStretchAtIndex = InlineTemplate.bind({});
WithStretchAtIndex.args = {
  ...WithGap.args,
  stretch: 2,
};
