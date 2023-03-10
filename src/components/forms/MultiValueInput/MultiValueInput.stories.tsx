import type { Meta, Story } from '@storybook/react/types-6-0';
import type { MultiValueInputProps } from './MultiValueInput.types';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { noop } from 'ramda-adjunct';

import MultiValueInput from './MultiValueInput';
import { Label } from '../Label';
import { Heading, Strong } from '../../typographyLegacy';
import { Inline, Stack } from '../../layout';
import { Button } from '../../Button';
import { Banner } from '../../Banner';

export default {
  component: MultiValueInput,
  title: 'components/forms/MultiValueInput',
} as Meta;

const MultiValueInputTemplate: Story<MultiValueInputProps> = (args) => (
  <MultiValueInput {...args} aria-label="MultiValueInput" />
);

export const Playground = MultiValueInputTemplate.bind({});
Playground.args = {
  onValueAdd: action('OnValueAdd'),
  onValueRemove: action('OnValueRemove'),
  onValuesChange: action('OnValuesChange'),
  onInputChange: action('OnInputChange'),
};

export const Filled = MultiValueInputTemplate.bind({});
Filled.args = {
  ...Playground.args,
  value: ['john@example.com', 'jane@example.com'],
};

export const WithPlaceholder = MultiValueInputTemplate.bind({});
WithPlaceholder.args = {
  ...Playground.args,
  placeholder: 'Share with...',
};

export const Focus = MultiValueInputTemplate.bind({});
Focus.args = {
  ...Playground.args,
  isFocused: true,
  className: 'focus-within',
};

export const Invalid = MultiValueInputTemplate.bind({});
Invalid.args = {
  ...Playground.args,
  isInvalid: true,
};

export const Disabled = MultiValueInputTemplate.bind({});
Disabled.args = {
  ...Playground.args,
  isDisabled: true,
};

export const NonClearable = MultiValueInputTemplate.bind({});
NonClearable.args = {
  ...Playground.args,
  isClearable: false,
  value: ['john@example.com', 'jane@example.com'],
};
NonClearable.title = 'Non-clearable';

export const Validation: Story = (args) => {
  const [isInvalid, setIsInvalid] = useState(true);

  return (
    <>
      <Label htmlFor="number">Numbers only</Label>
      <MultiValueInput
        {...args}
        inputId="emails"
        inputValue="abc"
        isInvalid={isInvalid}
        pattern="[0-9]+"
        value={['12']}
        onInputChange={(e) => {
          setIsInvalid(!!e.target.validity.patternMismatch);
        }}
      />
    </>
  );
};

export const PillTruncation: Story<MultiValueInputProps> = (args) => (
  <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <MultiValueInput {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <MultiValueInput {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <MultiValueInput {...args} maxPillLabelLength={5} />
  </Stack>
);
PillTruncation.args = {
  ...Playground.args,
  value: [
    '123456789012345678901234567890',
    '12345678901234567890',
    '1234567890',
  ],
};

export const PillWrapping: Story<MultiValueInputProps> = (args) => (
  <div style={{ width: '200px' }}>
    <MultiValueInput {...args} />
  </div>
);
PillWrapping.args = {
  ...Playground.args,
  value: ['12345678901234567890', '1234567890'],
};

export const ControlledInput: Story<MultiValueInputProps> = (args) => {
  const [values, setValues] = useState([]);

  return (
    <Stack gap="sm">
      <Banner variant="warn" onClose={noop}>
        Handling duplicated values is <Strong>up to the consumer</Strong> for
        the controlled input.
      </Banner>
      <MultiValueInput
        {...args}
        value={values}
        onValueAdd={(_, v) => {
          setValues(v);
          action('valueAdd')(v);
        }}
        onValueRemove={(v) => {
          setValues(v);
          action('valueRemove')(v);
        }}
        onValuesChange={(v) => {
          setValues(v);
          action('valuesChange')(v);
        }}
      />
      <Inline gap="md">
        <Button
          onClick={() => setValues(['controlledValue1', 'controlledValue2'])}
        >
          Add values
        </Button>
        <Button onClick={() => setValues([])}>Reset values</Button>
      </Inline>
    </Stack>
  );
};

ControlledInput.parameters = {
  screenshot: { skip: true },
};
