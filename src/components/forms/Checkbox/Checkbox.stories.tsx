import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import { Inline } from '../../layout';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

const textExample = 'Use the same details for billing & shipping on my invoice';

const labelMappingValues = {
  labelAsComponent: (
    <Text size="md" variant="secondary">
      Checkbox label inside a Text component
    </Text>
  ),
  labelAsString: 'Checkbox label',
  labelAsIconAndText: (
    <Inline align="center" gap="sm">
      <Icon color="neutral.900" name="wrench" />
      <Text>{textExample}</Text>
    </Inline>
  ),
};

export default {
  title: 'components/forms/Checkbox',
  component: Checkbox,
  argTypes: {
    name: {
      description: 'Name property of the form',
      control: { disable: true },
    },
    checkboxId: {
      description: 'ID property of the form',
      control: { disable: true },
    },
    defaultChecked: {
      description: 'Default value of the checkbox',
      table: { type: { summary: 'boolean' } },
    },
    isDisabled: {
      description: 'Make element not interactive when certain condition is met',
    },
    isIndeterminate: {
      description: 'Subordinate checkboxes might have various values',
    },
    isInvalid: {
      description: 'It marks the selection when wrong',
    },
    label: {
      description: 'Adds text to the checkbox',
      options: Object.keys(labelMappingValues),
      mapping: labelMappingValues,
      control: {
        type: 'select',
        labels: {
          labelAsComponent: 'Label as Text component',
          labelAsString: 'Label as string',
          labelAsIconAndText: 'Label as Icon and Text',
        },
      },
    },
  },
} as Meta;

export const Playground: StoryFn<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);
Playground.args = {
  name: 'playground',
  checkboxId: 'playground',
  label: labelMappingValues.labelAsString,
  defaultChecked: false,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultCheckbox: StoryFn = () => (
  <Checkbox
    checkboxId="defaultCheckbox"
    label={textExample}
    name="defaultCheckbox"
    onChange={action('Checkbox clicked')}
  />
);

export const CheckedCheckbox: StoryFn = () => (
  <Checkbox
    checkboxId="checkedCheckbox"
    label={textExample}
    name="checkedCheckbox"
    defaultChecked
  />
);

export const IndeterminateCheckbox: StoryFn = () => (
  <Checkbox
    checkboxId="indeterminateCheckbox"
    label={textExample}
    name="indeterminateCheckbox"
    isIndeterminate
  />
);

export const InvalidCheckbox: StoryFn = () => (
  <Checkbox
    checkboxId="invalidCheckbox"
    label={textExample}
    name="invalidCheckbox"
    isInvalid
  />
);

export const DisabledCheckbox: StoryFn = () => (
  <Checkbox
    checkboxId="disabledCheckbox"
    label={textExample}
    name="disabledCheckbox"
    isDisabled
  />
);

export const CheckboxWithLabelAsComponent: StoryFn = () => (
  <Checkbox
    checkboxId="disabledCheckbox"
    label={<Text>{textExample}</Text>}
    name="disabledCheckbox"
  />
);

export const CheckboxWithLabelAsComponentWithIcon: StoryFn = () => (
  <Checkbox
    checkboxId="disabledCheckbox"
    label={
      <Inline align="center" gap="sm">
        <Icon color="neutral.900" name="wrench" />
        <Text>{textExample}</Text>
      </Inline>
    }
    name="disabledCheckbox"
  />
);
