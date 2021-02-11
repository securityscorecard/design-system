import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { always } from 'ramda';
import { isEmptyArray } from 'ramda-adjunct';

import MultiValue from './MultiValue';
import { FlexContainer } from '../../../../FlexContainer';

export default {
  title: 'components/Datatable/components/TableCellRenderers/MultiValue',
  component: MultiValue,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const defaultProps = {
  nullCondition: always(false),
  displayLimit: 2,
};
const values = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

export const Default: Story = () => (
  <MultiValue column={defaultProps} value={values} />
);

export const WithCustomDisplayLimit: Story = () => (
  <MultiValue column={{ ...defaultProps, displayLimit: 4 }} value={values} />
);

export const WithDisabledDisplayLimit: Story = () => (
  <MultiValue column={{ ...defaultProps, displayLimit: 0 }} value={values} />
);

export const NullValue: Story = () => (
  <MultiValue
    column={{
      ...defaultProps,
      nullCondition: isEmptyArray,
    }}
    value={[]}
  />
);

export const CustomNullValue: Story = () => (
  <MultiValue
    column={{
      ...defaultProps,
      nullCondition: isEmptyArray,
      nullConditionValue: 'Empty',
    }}
    value={[]}
  />
);

export const WithLink: Story = () => (
  <FlexContainer flexDirection="column">
    <MultiValue
      column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
      value={values}
    />
    <MultiValue
      column={{
        ...defaultProps,
        onClick: (val) => action(`href ${val}`),
        hrefComposer: (val) => `/count/${val}`,
      }}
      value={values}
    />
    <MultiValue
      column={{
        ...defaultProps,
        onClick: (val) => action(`to ${val}`),
        toComposer: (val) => `/count/${val}`,
      }}
      value={values}
    />
  </FlexContainer>
);
