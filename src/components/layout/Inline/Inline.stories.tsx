import type { CSSProperties } from 'react';
import { Meta, StoryFn } from '@storybook/react';

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

function Box({ style = {} }: { style?: CSSProperties }) {
  return <MockBox style={{ width: '150px', minHeight: '150px', ...style }} />;
}

const InlineTemplate: StoryFn<InlineProps> = (args) => (
  <Inline {...args}>
    <Box />
    <Box style={{ height: '300px' }} />
    <Box />
    <Box />
  </Inline>
);

export const Playground = InlineTemplate.bind({});
Playground.args = {
  gap: 'md',
};
Playground.parameters = {
  screenshot: { skip: true },
};

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
