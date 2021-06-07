import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Padbox } from '../Padbox';
import { getColor } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
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

const Box = styled(Padbox).attrs((props) => ({
  paddingSize: SpaceSizes.sm,
  children:
    props.children ||
    'Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante pretium eget.',
}))`
  background-color: ${getColor('blueberry0')};
  width: 150px;
  min-height: 150px;
`;

const InlineTemplate: Story<InlineProps> = (args) => (
  <Inline style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box />
    <Box style={{ height: '300px' }} />
    <Box />
    <Box />
  </Inline>
);

export const playground = InlineTemplate.bind({});

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
