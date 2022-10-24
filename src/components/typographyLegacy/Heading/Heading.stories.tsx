import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Heading, { H0, H1, H2, H3, H4, H5 } from './Heading';
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

export const Playground: Story<
  HeadingProps & { children: React.ReactChild }
> = (args) => <Heading {...args} />;
Playground.args = {
  children: 'Playground Heading',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const H0Story: Story = () => (
  <>
    <H0>Heading H0</H0>
    <H0 variant={HeadingVariants.secondary}>Heading H0 - secondary</H0>
  </>
);
H0Story.storyName = 'Heading H0';

export const H1Story: Story = () => (
  <>
    <H1>Heading H1</H1>
    <H1 variant={HeadingVariants.secondary}>Heading H1 - secondary</H1>
  </>
);
H1Story.storyName = 'Heading H1';

export const H2Story: Story = () => (
  <>
    <H2>Heading H2</H2>
    <H2 variant={HeadingVariants.secondary}>Heading H2 - secondary</H2>
  </>
);
H2Story.storyName = 'Heading H2';

export const H3Story: Story = () => (
  <>
    <H3>Heading H3</H3>
    <H3 variant={HeadingVariants.secondary}>Heading H3 - secondary</H3>
  </>
);
H3Story.storyName = 'Heading H3';

export const H4Story: Story = () => (
  <>
    <H4>Heading H4</H4>
    <H4 variant={HeadingVariants.secondary}>Heading H4 - secondary</H4>
  </>
);
H4Story.storyName = 'Heading H4';

export const H5Story: Story = () => (
  <>
    <H5>Heading H5</H5>
    <H5 variant={HeadingVariants.secondary}>Heading H5 - secondary</H5>
  </>
);
H5Story.storyName = 'Heading H5';

export const CustomizedH1: Story = () => (
  <Heading
    margin={{ vertical: 1 }}
    padding={{ horizontal: 2 }}
    size={HeadingSizes.h1}
  >
    Heading H1
  </Heading>
);
CustomizedH1.storyName = 'Heading H1 with customized margins';

export const HeadingAs: Story = () => (
  <Heading as="h3" size={HeadingSizes.h1}>
    Heading H1 as H3
  </Heading>
);
HeadingAs.storyName = 'Heading H1 as H3';
