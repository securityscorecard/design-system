import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import HintTooltip from './HintTooltip';
import { HintTooltipProps } from './HintTooltip.types';
import { Inline, Padbox, Stack } from '../layout';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';
import { Text } from '../Text';

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
      <Padbox paddingSize="xxl">
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
  background-color: var(--sscds-color-primary-3);
`;

export const Default: StoryFn<HintTooltipProps> = ({ ...args }) => (
  <Inline>
    <Padbox paddingSize="lg">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </Padbox>
    <ColorBackgroundWrapper paddingSize="lg">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </ColorBackgroundWrapper>
  </Inline>
);

export const InlineHintTooltip: StoryFn<HintTooltipProps> = () => (
  <Stack gap="lg">
    <Inline align="center" gap="lg">
      <Text size="lg">Heading</Text>
      <HintTooltip>{Popup}</HintTooltip>
    </Inline>
  </Stack>
);
