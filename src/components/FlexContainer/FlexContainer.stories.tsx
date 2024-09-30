import { Meta, StoryFn } from '@storybook/react';

import { H2 } from '../Heading';
import { Paragraph } from '../Paragraph';
import FlexContainer from './FlexContainer';

const lipsum = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra
magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut
leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et.`,
  `Donec id mi commodo eros porta tempus. Vivamus et elit ut
leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et.`,
];

export default {
  title: 'components/FlexContainer',
  component: FlexContainer,
} as Meta;

export const Sample: StoryFn = () => (
  <>
    <FlexContainer alignItems="center" padding={2}>
      <H2 margin="none" padding={{ right: 2 }}>
        Hello World!
      </H2>
      <Paragraph margin="none">{lipsum[1]}</Paragraph>
    </FlexContainer>
    <FlexContainer flexDirection="column" margin={{ horizontal: 3 }}>
      <Paragraph>{lipsum[0]}</Paragraph>
      <Paragraph>{lipsum[1]}</Paragraph>
    </FlexContainer>
  </>
);
