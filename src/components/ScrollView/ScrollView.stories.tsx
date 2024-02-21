import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { faker } from '@faker-js/faker';

import { ScrollView } from './ScrollView';
import { Padbox } from '../layout';

export default {
  title: 'components/ScrollView',
  component: ScrollView,
} as ComponentMeta<typeof ScrollView>;

faker.seed(42);
const content = faker.lorem.paragraphs(50);

type Story = ComponentStory<typeof ScrollView>;
const Template: Story = (args) => <ScrollView {...args}>{content}</ScrollView>;

export const Playground: Story = Template.bind({});
Playground.parameters = {
  screenshot: { skip: true },
};
Playground.args = { maxHeight: 200 };

export const WithBorder: Story = Template.bind({});
WithBorder.args = {
  ...Playground.args,
  hasBorder: true,
};

export const WithRadius: Story = Template.bind({});
WithRadius.args = {
  ...WithBorder.args,
  radius: 'lg',
};

export const WithInnerPadding: Story = (args) => (
  <ScrollView {...args}>
    <Padbox paddingSize="md">{content}</Padbox>
  </ScrollView>
);
WithInnerPadding.args = WithRadius.args;

export const OnDarkBackground: Story = WithInnerPadding.bind({});
OnDarkBackground.args = WithRadius.args;
OnDarkBackground.parameters = {
  backgrounds: { default: 'black' },
};
