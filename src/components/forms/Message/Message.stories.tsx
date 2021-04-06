import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Message, { Error, Note } from './Message';
import { MessageProps } from './Message.types';
import { MessageVariants } from './Message.enums';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/forms/Message',
  component: Message,
} as Meta;

export const playground: Story<MessageProps> = (args) => <Message {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  children: {
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
    },
    defaultValue: 'Form field message',
  },
  variant: {
    ...generateControl('select', MessageVariants),
    defaultValue: MessageVariants.note,
  },
};

export const NoteMessage: Story = () => <Note>Select your home country</Note>;
export const ErrorMessage: Story = () => <Error>This field is required</Error>;
