import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import TextArea from './TextArea';

export default {
  title: 'components/forms/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>;

type Story = StoryFn<typeof TextArea>;
const Template: Story = (args) => <TextArea aria-label="Text" {...args} />;

export const Playground: Story = Template.bind({});
Playground.parameters = {
  screenshot: { skip: true },
};

export const Default: Story = Template.bind({});

export const Filled: Story = Template.bind({});
Filled.args = {
  defaultValue: 'DefaultValue text',
};

export const WithMaxLength: Story = Template.bind({});
WithMaxLength.args = {
  maxLength: 100,
};

export const WithPlaceholder: Story = Template.bind({});
WithPlaceholder.args = { placeholder: 'Your comment...' };

export const Invalid: Story = Template.bind({});
Invalid.args = {
  defaultValue: 'Text over 10 characters limit',
  maxLength: 10,
  isInvalid: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = { isDisabled: true };

const lipsum = `Donec sed nunc sed leo vestibulum pretium. Aenean sollicitudin velit neque. Curabitur placerat, velit sit amet lobortis condimentum, libero tortor ullamcorper quam, nec porttitor massa sem quis tellus. Sed feugiat nec libero a fermentum. Vivamus laoreet sapien convallis, interdum sapien vitae, lobortis eros. Ut interdum dui ut mauris malesuada, vitae pellentesque est fermentum. Cras quis erat est. Proin tempus a leo ut pulvinar. Nulla scelerisque tempor mollis. Etiam quis dolor non diam sollicitudin mollis eu vitae nisl. Vestibulum bibendum augue vel justo fringilla, sed ultrices libero congue. Maecenas nec erat ac ante mollis eleifend. Sed ut mattis metus. Nullam molestie, diam blandit aliquam tincidunt, magna leo auctor diam, vel eleifend risus ex vel tortor. Donec ornare pellentesque urna quis volutpat. Donec dictum, arcu id luctus tincidunt, arcu purus venenatis lorem, at imperdiet orci lacus a metus.`;
export const Autosize: Story = Template.bind({});
Autosize.args = { defaultValue: lipsum };

export const WithMinHeight: Story = Template.bind({});
WithMinHeight.args = { minHeight: 300 };

export const WithMaxHeight: Story = Template.bind({});
WithMaxHeight.args = { ...Autosize.args, maxHeight: 150 };

export const ControlledInput: Story = (args) => {
  const [value, setValue] = useState(lipsum);

  return (
    <TextArea
      aria-label="Text"
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
