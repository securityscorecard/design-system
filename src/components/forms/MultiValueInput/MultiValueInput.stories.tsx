import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { noop } from 'ramda-adjunct';

import MultiValueInput from './MultiValueInput';
import { Label } from '../Label';
import { Heading, Strong } from '../../typographyLegacy';
import { Inline, Stack } from '../../layout';
import { Button } from '../../Button';
import { Banner } from '../../Banner';

/**
 *
 * The MultiValueInput component is a form field element designed to enable users to input multiple similar values
 * and present those values in a tags form. It provides a flexible and convenient way for users to enter and manage
 * multiple values within a single input field.
 *
 * This component is particularly useful in scenarios where users need to provide multiple selections or categorize
 * items with tags, such as in search fields, tagging systems, or inputting multiple recipients for an email.
 *
 * ## Usage
 * ```js
 * import { MultiValueInput } from '@securityscorecard/design-system'
 * ```
 *
 * ## Troubleshotting
 * The `MultiValueInput` uses `:focus-within` CSS pseudo-class internally. This pseudo-class is not supported
 * by some older browsers (see [Browser compatibility](https://caniuse.com/?search=focus-within)). If you ever
 * find out that the field doesn't get focus ring when focus is on the intenal input or on pill clear button
 * `focus-within-polyfill` from [NPM](https://www.npmjs.com/package/focus-within-polyfill).
 *
 * ## Playground
 */
const meta = {
  component: MultiValueInput,
} satisfies Meta<typeof MultiValueInput>;

export default meta;

type Story = StoryObj<typeof MultiValueInput>;

const MultiValueInputTemplate: Story = {
  render: (args) => <MultiValueInput {...args} aria-label="MultiValueInput" />,
};

export const Playground = {
  ...MultiValueInputTemplate,
  args: {
    onValueAdd: action('OnValueAdd'),
    onValueRemove: action('OnValueRemove'),
    onValuesChange: action('OnValuesChange'),
    onInputChange: action('OnInputChange'),
  },
};

export const Filled = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    value: ['john@example.com', 'jane@example.com'],
  },
};

export const WithPlaceholder = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    placeholder: 'Share with...',
  },
};

export const Focus = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    isFocused: true,
    className: 'focus-within',
  },
};

export const Invalid = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    isInvalid: true,
  },
};

export const Disabled = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    isDisabled: true,
  },
};

export const NonClearable = {
  ...MultiValueInputTemplate,
  args: {
    ...Playground.args,
    isClearable: false,
    value: ['john@example.com', 'jane@example.com'],
  },
  title: 'Non-clearable',
};

export const Validation: Story = {
  render: function Render(args) {
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
  },
};

export const PillTruncation: Story = {
  render: (args) => (
    <Stack gap="md">
      <Heading size="h3">Default truncation N=16</Heading>
      <MultiValueInput {...args} />
      <Heading size="h3">Custom truncation N=25</Heading>
      <MultiValueInput {...args} maxPillLabelLength={25} />
      <Heading size="h3">Custom truncation N=5</Heading>
      <MultiValueInput {...args} maxPillLabelLength={5} />
    </Stack>
  ),
  args: {
    ...Playground.args,
    value: [
      '123456789012345678901234567890',
      '12345678901234567890',
      '1234567890',
    ],
  },
};

export const PillWrapping: Story = {
  render: (args) => (
    <div style={{ width: '200px' }}>
      <MultiValueInput {...args} />
    </div>
  ),
  args: {
    ...Playground.args,
    value: ['12345678901234567890', '1234567890'],
  },
};

export const ControlledInput: Story = {
  render: function Render(args) {
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
  },
  parameters: {
    screenshot: { skip: true },
  },
};
