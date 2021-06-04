import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Padbox, { PadboxProps } from './Padbox';
import { getColor } from '../../../utils';
import { PaddingTypes } from '../../../types/spacing.types';
import { SpaceSizes } from '../../../theme/space.enums';
import { generateControl } from '../../../utils/tests/storybook';

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
  background-color: ${getColor('blueberry0')};
`;

const PadboxTemplate: Story<PadboxProps> = (args) => (
  <Padbox style={{ backgroundColor: '#0275d8' }} {...args}>
    <Content>
      Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci
      auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante
      pretium eget.
    </Content>
  </Padbox>
);

export const playground = PadboxTemplate.bind({});
playground.args = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.none,
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
