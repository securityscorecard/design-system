import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { LoadingProps } from './Loading.types';
import { Loading } from './Loading';

export default {
  title: 'components/Loading',
  component: Loading,
} as Meta;

export const Playground: Story<LoadingProps> = (args) => <Loading {...args} />;
Playground.args = {
  progress: 20,
  subject: 'Data',
  testId: 'test',
  height: 24,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithMessage: Story<LoadingProps> = (args) => <Loading {...args} />;

WithMessage.args = {
  progress: 40,
  subject: 'Data', // overriden by message
  testId: 'test',
  message: 'This message overrides subject',
  height: 24,
};

export const WithoutProgress: Story<LoadingProps> = (args) => (
  <Loading {...args} />
);

WithoutProgress.args = {
  subject: 'Data',
  testId: 'test',
  height: 24,
};
