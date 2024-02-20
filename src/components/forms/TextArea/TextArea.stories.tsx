import type { Meta, Story } from '@storybook/react';
import type { TextAreaProps } from './TextArea.types';

import { useState } from 'react';

import TextArea from './TextArea';

export default {
  title: 'components/forms/TextArea',
  component: TextArea,
  argTypes: {
    maxLength: {
      description: 'Sets maximal length of text and enables characters counter',
    },
    placeholder: { control: 'text', table: { type: { summary: 'string' } } },
    defaultValue: { control: 'text', table: { type: { summary: 'string' } } },
  },
} as Meta;

export const Playground: Story<TextAreaProps> = (args) => (
  <TextArea {...args} aria-label="Text" />
);
Playground.parameters = {
  screenshot: { skip: true },
};

export const Default: Story = () => <TextArea aria-label="Text" />;

export const Filled: Story = () => (
  <TextArea aria-label="Text" defaultValue="DefaultValue text" />
);

export const WithMaxLength: Story = () => (
  <TextArea aria-label="Text" maxLength={100} />
);

export const WithPlaceholder: Story = () => (
  <TextArea aria-label="Text" placeholder="Your comment..." />
);

export const Invalid: Story = () => (
  <TextArea
    aria-label="Text"
    defaultValue="Text over 10 characters limit"
    maxLength={10}
    isInvalid
  />
);

export const Disabled: Story = () => <TextArea aria-label="Text" isDisabled />;

const lipsum = `Donec sed nunc sed leo vestibulum pretium. Aenean sollicitudin velit neque. Curabitur placerat, velit sit amet lobortis condimentum, libero tortor ullamcorper quam, nec porttitor massa sem quis tellus. Sed feugiat nec libero a fermentum. Vivamus laoreet sapien convallis, interdum sapien vitae, lobortis eros. Ut interdum dui ut mauris malesuada, vitae pellentesque est fermentum. Cras quis erat est. Proin tempus a leo ut pulvinar. Nulla scelerisque tempor mollis. Etiam quis dolor non diam sollicitudin mollis eu vitae nisl. Vestibulum bibendum augue vel justo fringilla, sed ultrices libero congue. Maecenas nec erat ac ante mollis eleifend. Sed ut mattis metus. Nullam molestie, diam blandit aliquam tincidunt, magna leo auctor diam, vel eleifend risus ex vel tortor. Donec ornare pellentesque urna quis volutpat. Donec dictum, arcu id luctus tincidunt, arcu purus venenatis lorem, at imperdiet orci lacus a metus.`;
export const Autosize: Story = () => (
  <TextArea aria-label="Text" defaultValue={lipsum} />
);

export const Controlled: Story = () => {
  const [val, setVal] = useState('');

  return (
    <TextArea
      aria-label="Text"
      maxLength={100}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};
Controlled.parameters = {
  screenshot: { disable: true },
};
