import type { Meta, StoryObj } from '@storybook/react';

import {
  Checkbox,
  Error,
  Input,
  Label,
  Note,
  Radio,
  Select,
  Switch,
  TextArea,
} from './index';
import { Inline, Stack } from '../layout';
import { HintTooltip } from '../HintTooltip';

const meta = {
  title: 'components/forms/Example',
  tags: ['!dev'],
  parameters: {
    a11y: { disable: true },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { value: 'HR', label: 'Croatia' },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Cura\u00e7ao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
];

export const Default: Story = {
  render: () => (
    <form>
      <Stack gap="md">
        <Stack>
          <Label>Your Name</Label>

          <Input type="text" isInvalid />

          <Error>This field is required</Error>
        </Stack>

        <Stack>
          <Label>Your Country</Label>

          <Select options={options} />

          <Note>Where you currently live</Note>
        </Stack>

        <Stack>
          <Label>I am</Label>

          <Stack gap="xs">
            <Radio label="Human" name="species" radioId="human" value="human" />

            <Radio
              label="Animal"
              name="species"
              radioId="animal"
              value="animal"
            />
          </Stack>
        </Stack>

        <Stack>
          <Label>My hobbies</Label>

          <Stack gap="xs">
            <Checkbox
              checkboxId="reading"
              label="Reading"
              name="hobbies"
              value="reading"
            />

            <Checkbox
              checkboxId="sleeping"
              label="Sleeping"
              name="hobbies"
              value="sleeping"
            />

            <Checkbox
              checkboxId="programming"
              label="Programming"
              name="hobbies"
              value="programming"
            />

            <Checkbox
              checkboxId="testing"
              label="Testing"
              name="hobbies"
              value="testing"
            />
          </Stack>
        </Stack>

        <Stack justify="flex-start">
          <Label>Do you want to make your profile public?</Label>

          <Switch switchId="public" />
        </Stack>

        <Stack>
          <Label>Your message to us</Label>

          <TextArea maxLength={140} />
        </Stack>
      </Stack>
    </form>
  ),
  parameters: {
    screenshot: {
      skip: true,
    },
  },
};

export const StackedFormField: Story = {
  render: () => (
    <div>
      <Label htmlFor="input-id">Input field label</Label>
      <Input id="input-id" type="text" />
    </div>
  ),
};

export const StackedFormFieldWithHint: Story = {
  render: () => (
    <div>
      <Label htmlFor="input-id">
        Input field label{' '}
        <HintTooltip placement="top">Hint tooltip content</HintTooltip>
      </Label>
      <Input id="input-id" type="text" />
    </div>
  ),
};

export const StackedFormFieldWithNote: Story = {
  render: () => (
    <div>
      <Label htmlFor="input-id">Input field label</Label>
      <Input id="input-id" type="text" />
      <Note>Short description for additional information</Note>
    </div>
  ),
};

export const StackedFormFieldWithError: Story = {
  render: () => (
    <div>
      <Label htmlFor="input-id">Input field label</Label>
      <Input id="input-id" type="text" isInvalid />
      <Error>Description of error</Error>
    </div>
  ),
};

export const InlinedFormField: Story = {
  render: () => (
    <Inline gap="4x" stretch="end">
      <Label htmlFor="input-id" isInline>
        Input field label
      </Label>
      <Input id="input-id" type="text" />
    </Inline>
  ),
};

export const InlinedFormFieldWithHint: Story = {
  render: () => (
    <Inline gap="4x" stretch="end">
      <Label htmlFor="input-id" isInline>
        Input field label{' '}
        <HintTooltip placement="top">Hint tooltip content</HintTooltip>
      </Label>
      <Input id="input-id" type="text" />
    </Inline>
  ),
};

export const InlinedFormFieldWithNote: Story = {
  render: () => (
    <Inline gap="4x" stretch="end">
      <Label htmlFor="input-id" isInline>
        Input field label
      </Label>
      <div>
        <Input id="input-id" type="text" />
        <Note>Short description for additional information</Note>
      </div>
    </Inline>
  ),
};

export const InlinedFormFieldWithError: Story = {
  render: () => (
    <Inline gap="4x" stretch="end">
      <Label htmlFor="input-id" isInline>
        Input field label
      </Label>
      <div>
        <Input id="input-id" type="text" isInvalid />
        <Error>Description of error</Error>
      </div>
    </Inline>
  ),
};
