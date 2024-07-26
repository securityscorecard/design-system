import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';
import { RadioProps } from './Radio.types';
import { ColorTypes } from '../../../theme';
import { Inline } from '../../layout';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

const textExample = 'Use the same details for billing & shipping on my invoice';

const labelMappingValues = {
  labelAsComponent: (
    <Text size="md" variant="secondary">
      Radio label inside a Text component
    </Text>
  ),
  labelAsString: 'Radio label',
  labelAsIconAndText: (
    <Inline align="center" gap="sm">
      <Icon color="neutral.900" name="wrench" />
      <Text>{textExample}</Text>
    </Inline>
  ),
};

export default {
  title: 'components/forms/Radio',
  component: Radio,
  argTypes: {
    name: { control: { disable: true } },
    radioId: { control: { disable: true } },
    defaultChecked: { control: 'boolean' },
    label: {
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

export const Playground: StoryFn<RadioProps> = (args) => <Radio {...args} />;
Playground.args = {
  name: 'playground',
  radioId: 'playground',
  label: labelMappingValues.labelAsString,
  defaultChecked: false,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultRadio: StoryFn = () => (
  <Radio
    label={textExample}
    name="defaultRadio"
    radioId="defaultRadio"
    onChange={action('Radio clicked')}
  />
);

export const CheckedRadio: StoryFn = () => (
  <Radio
    label={textExample}
    name="checkedRadio"
    radioId="checkedRadio"
    defaultChecked
  />
);

export const InvalidRadio: StoryFn = () => (
  <Radio
    label={textExample}
    name="invalidRadio"
    radioId="invalidRadio"
    isInvalid
  />
);

export const RadioWithLabelAsComponent: StoryFn = () => (
  <Radio
    label={<Text>{textExample}</Text>}
    name="radioWithLabelAsComponent"
    radioId="radioWithLabelAsComponent"
  />
);

export const RadioWithLabelAsComponentWithIcon: StoryFn = () => (
  <Radio
    label={
      <Inline align="center" gap="sm">
        <Icon color={ColorTypes.neutral900} name="wrench" />
        <Text>{textExample}</Text>
      </Inline>
    }
    name="radioWithLabelAsComponentWithIcon"
    radioId="radioWithLabelAsComponentWithIcon"
  />
);
