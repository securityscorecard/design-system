import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Playground: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);
Playground.args = {
  progress: 20,
  subject: 'Data',
  testId: 'test',
  height: 24,
};
Playground.parameters = {
  screenshot: { skip: true },
};

const Template = (args) => <Loading {...args} />;

export const WithMessage: ComponentStory<typeof Loading> = Template.bind({});

WithMessage.args = {
  progress: 40,
  subject: 'Data', // overriden by message
  testId: 'test',
  message: 'This message overrides subject',
  height: 24,
};

export const WithoutProgress: ComponentStory<typeof Loading> = Template.bind(
  {},
);

WithoutProgress.args = {
  subject: 'Data',
  testId: 'test',
  height: 24,
};
