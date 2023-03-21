import type { Meta, Story } from '@storybook/react';
import type { ReactChild } from 'react';
import type { MessageProps } from './Message.types';

import Message, { Error, Note } from './Message';
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

export const Playground: Story<MessageProps & { children: ReactChild }> = (
  args,
) => <Message {...args} />;
Playground.args = {
  children: 'Form field message',
  variant: MessageVariants.note,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const NoteMessage: Story = () => <Note>Select your home country</Note>;
export const ErrorMessage: Story = () => <Error>This field is required</Error>;
