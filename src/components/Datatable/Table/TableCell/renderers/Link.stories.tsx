import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { always, equals } from 'ramda';
import { isEmptyString, noop } from 'ramda-adjunct';

import Link from './Link';

export default {
  title: 'components/Datatable/components/TableCellRenderers/Link',
  component: Link,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const defaultProps = {
  nullCondition: always(false),
  onClick: noop,
};

export const NullValue: Story = () => (
  <Link
    column={{
      ...defaultProps,
      nullCondition: equals('unknown'),
    }}
    value="unknown"
  />
);

export const CustomNullValue: Story = () => (
  <Link
    column={{
      ...defaultProps,
      nullCondition: isEmptyString,
      nullConditionValue: 'Unknown link',
    }}
    value=""
  />
);

export const OnClickHandler: Story = () => (
  <Link
    column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
    value="OnClick handler"
  />
);
export const AbsoluteLink: Story = () => (
  <Link
    column={{
      ...defaultProps,
      onClick: (val) => action(`href ${val}`),
      hrefComposer: (val) => `/link/${val}`,
    }}
    value="Absolute link"
  />
);
export const RelativeLink: Story = () => (
  <Link
    column={{
      ...defaultProps,
      onClick: (val) => action(`to ${val}`),
      toComposer: (val) => `/link/${val}`,
    }}
    value="Relative link"
  />
);
