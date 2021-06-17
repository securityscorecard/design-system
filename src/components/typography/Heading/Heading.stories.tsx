import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Heading, { H0, H1, H2, H3, H4 } from './Heading';
import { HeadingProps } from './Heading.types';
import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/typography/Heading',
  component: Heading,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      ...generateControl('select', HeadingSizes),
    },
    variant: {
      ...generateControl('select', HeadingVariants),
    },
    margin: { control: { disable: true } },
    padding: { control: { disable: true } },
  },
} as Meta;

export const playground: Story<
  HeadingProps & { children: React.ReactChild }
> = (args) => <Heading {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  children: 'Playground Heading',
};

export const h0: Story = () => (
  <>
    <H0>Heading H0</H0>
    <H0 variant={HeadingVariants.secondary}>Heading H0 - secondary</H0>
  </>
);
h0.storyName = 'Heading H0';

export const h1: Story = () => (
  <>
    <H1>Heading H1</H1>
    <H1 variant={HeadingVariants.secondary}>Heading H1 - secondary</H1>
  </>
);
h1.storyName = 'Heading H1';

export const h2: Story = () => (
  <>
    <H2>Heading H2</H2>
    <H2 variant={HeadingVariants.secondary}>Heading H2 - secondary</H2>
  </>
);
h2.storyName = 'Heading H2';

export const h3: Story = () => (
  <>
    <H3>Heading H3</H3>
    <H3 variant={HeadingVariants.secondary}>Heading H3 - secondary</H3>
  </>
);
h3.storyName = 'Heading H3';

export const h4: Story = () => (
  <>
    <H4>Heading H4</H4>
    <H4 variant={HeadingVariants.secondary}>Heading H4 - secondary</H4>
  </>
);
h4.storyName = 'Heading H4';

export const customizedH1: Story = () => (
  <Heading
    margin={{ vertical: 1 }}
    padding={{ horizontal: 2 }}
    size={HeadingSizes.h1}
  >
    Heading H1
  </Heading>
);
customizedH1.storyName = 'Heading H1 with customized margins';
