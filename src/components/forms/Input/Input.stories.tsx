import type { InputHTMLAttributes } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Input from './Input';
import { InputProps } from './Input.types';

export default {
  title: 'components/forms/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'number', 'tel', 'email', 'password', 'date', 'url'],
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary:
            '"text" | "number" | "tel" | "email" | "password" | "date" | "url"',
        },
        defaultValue: { summary: 'text' },
      },
      description: 'Any valid HTML input type, *DO NOT USE* button like types',
    },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    isInvalid: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} as Meta;

export const Playground: StoryFn<
  InputProps & InputHTMLAttributes<HTMLInputElement>
> = (args) => <Input {...args} aria-label="Input" />;
Playground.args = { type: 'text' };
Playground.parameters = {
  screenshot: { skip: true },
};

export const Default: StoryFn = () => <Input aria-label="Input" type="text" />;

export const Filled: StoryFn = () => (
  <Input aria-label="Input" defaultValue="SecurityScorecard" type="text" />
);

export const WithPlaceholder: StoryFn = () => (
  <Input aria-label="Input" placeholder="Company name" type="text" />
);

export const Focus: StoryFn = () => (
  <Input aria-label="Input" className="focus" type="text" />
);

export const Invalid: StoryFn = () => (
  <Input aria-label="Input" type="text" isInvalid />
);

export const Disabled: StoryFn = () => (
  <Input
    aria-label="Input"
    defaultValue="SecurityScorecard"
    type="text"
    isDisabled
  />
);
