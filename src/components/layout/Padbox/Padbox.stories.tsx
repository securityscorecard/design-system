import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import Padbox, { PadboxProps } from './Padbox';
import { getColor } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { generateControl } from '../../../utils/tests/storybook';
import { PaddingTypes } from './Padbox.enums';

export default {
  title: 'layout/primitives/Padbox',
  component: Padbox,
  argTypes: {
    paddingType: {
      ...generateControl('select', PaddingTypes),
      defaultValue: PaddingTypes.square,
      table: {
        defaultValue: { summary: PaddingTypes.square },
        type: {
          summary: Object.keys(PaddingTypes)
            .map((type) => `'${type}'`)
            .join('|'),
        },
      },
    },
  },
} as Meta;

const Content = styled.div`
  background-color: ${getColor('primary.50')};
`;

const PadboxTemplate: StoryFn<PadboxProps> = (args) => (
  <Padbox style={{ backgroundColor: '#0275d8' }} {...args}>
    <Content>
      Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci
      auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante
      pretium eget.
    </Content>
  </Padbox>
);

export const Playground = PadboxTemplate.bind({});
Playground.args = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.none,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SquareInset = PadboxTemplate.bind({});
SquareInset.args = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.lg,
};

export const SquishInset = PadboxTemplate.bind({});
SquishInset.args = {
  paddingType: PaddingTypes.squish,
  paddingSize: SpaceSizes.lg,
};

export const StretchInset = PadboxTemplate.bind({});
StretchInset.args = {
  paddingType: PaddingTypes.stretch,
  paddingSize: SpaceSizes.lg,
};
