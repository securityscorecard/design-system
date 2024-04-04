import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import HintTooltip from './HintTooltip';
import { HintTooltipProps } from './HintTooltip.types';
import { Link, Paragraph, Text } from '../typographyLegacy';
import { Inline, Padbox, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import { getColor } from '../../utils';

export default {
  title: 'components/HintTooltip',
  component: HintTooltip,
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  decorators: [
    (storyFn) => (
      <Padbox paddingSize={SpaceSizes.xxl}>
        <Inline justify="center">{storyFn()}</Inline>
      </Padbox>
    ),
  ],
} as Meta;

const Popup = (
  <Stack gap="md">
    <Paragraph size="md">This is the tooltip content</Paragraph>
    <Link>Here is some link</Link>
  </Stack>
);

const ColorBackgroundWrapper = styled(Padbox)`
  background-color: ${getColor('primary.50')};
`;

export const Default: Story<HintTooltipProps> = ({ ...args }) => (
  <Inline>
    <Padbox height="120" paddingSize="lg" width="240">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </Padbox>
    <ColorBackgroundWrapper height="120" paddingSize="lg" width="240">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </ColorBackgroundWrapper>
  </Inline>
);

export const InlineHintTooltip: Story<HintTooltipProps> = () => (
  <Stack gap="lg">
    <Inline align="center" gap="lg">
      <Text size="lg">Heading</Text>
      <HintTooltip>{Popup}</HintTooltip>
    </Inline>
  </Stack>
);
