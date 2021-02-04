import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { always, equals } from 'ramda';
import { isEmptyString } from 'ramda-adjunct';

import Date from './Date';
import { FlexContainer } from '../../../../FlexContainer';

export default {
  title: 'components/Datatable/components/TableCellRenderers/Date',
  component: Date,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const defaultProps = {
  nullCondition: always(false),
};

export const Default: Story = () => (
  <Date column={defaultProps} value="2020-12-02T14:57:02Z" />
);

export const NullValue: Story = () => (
  <Date
    column={{
      nullCondition: equals('unknown'),
    }}
    value="unknown"
  />
);

export const CustomNullValue: Story = () => (
  <Date
    column={{
      nullCondition: isEmptyString,
      nullConditionValue: 'Unknown Date',
    }}
    value=""
  />
);

export const WithLink: Story = () => (
  <FlexContainer flexDirection="column">
    <Date
      column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
      value="2020-12-02T14:57:02Z"
    />
    <Date
      column={{
        ...defaultProps,
        onClick: (val) => action(`href ${val}`),
        hrefComposer: (val) => `/date/${val}`,
      }}
      value="2020-12-03T14:57:02Z"
    />
    <Date
      column={{
        ...defaultProps,
        onClick: (val) => action(`to ${val}`),
        toComposer: (val) => `/date/${val}`,
      }}
      value="2020-12-04T14:57:02Z"
    />
  </FlexContainer>
);
