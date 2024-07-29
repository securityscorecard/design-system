import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Message, { Error, Note } from './Message';
import { MessageProps } from './Message.types';
import { MessageVariants } from './Message.enums';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/forms/Message',
  component: Message,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      ...generateControl('select', MessageVariants),
    },
  },
} as Meta;

export const Playground: StoryFn<MessageProps> = (args) => (
  <Message {...args} />
);
Playground.args = {
  children: 'Form field message',
  variant: MessageVariants.note,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const NoteMessage: StoryFn = () => <Note>Select your home country</Note>;
export const ErrorMessage: StoryFn = () => (
  <Error>This field is required</Error>
);
