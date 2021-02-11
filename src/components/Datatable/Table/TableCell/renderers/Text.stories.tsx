import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { always, equals } from 'ramda';
import { isEmptyString } from 'ramda-adjunct';

import Text from './Text';
import { FlexContainer } from '../../../../FlexContainer';

export default {
  title: 'components/Datatable/components/TableCellRenderers/Text',
  component: Text,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const defaultProps = {
  nullCondition: always(false),
};

export const Default: Story = () => (
  <Text column={defaultProps} value="Text value" />
);

export const NullValue: Story = () => (
  <Text
    column={{
      nullCondition: equals('unknown'),
    }}
    value="unknown"
  />
);

export const CustomNullValue: Story = () => (
  <Text
    column={{ nullCondition: isEmptyString, nullConditionValue: 'Unknown' }}
    value=""
  />
);

export const WithLink: Story = () => (
  <FlexContainer flexDirection="column">
    <Text
      column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
      value="OnClick handler"
    />
    <Text
      column={{
        ...defaultProps,
        onClick: (val) => action(`href ${val}`),
        hrefComposer: (val) => `/count/${val}`,
      }}
      value="Absolute link"
    />
    <Text
      column={{
        ...defaultProps,
        onClick: (val) => action(`to ${val}`),
        toComposer: (val) => `/count/${val}`,
      }}
      value="Relative link"
    />
  </FlexContainer>
);
