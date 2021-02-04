import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { MemoryRouter } from 'react-router-dom';
import { always, equals } from 'ramda';
import { isEmptyString } from 'ramda-adjunct';
import MockDate from 'mockdate';

import { FlexContainer } from '../../../../FlexContainer';
import TimeFromNow from './TimeFromNow';
import {
  inLast1YearDate,
  inLast5YearsDate,
  inLast6MonthsDate,
  inLast7DaysDate,
  todayDate,
} from './TimeFromNow.mock';

export default {
  title: 'components/Datatable/components/TableCellRenderers/TimeFromNow',
  component: TimeFromNow,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

MockDate.set(todayDate);
dayjs.extend(utc);

const defaultProps = {
  nullCondition: always(false),
};

export const Default: Story = () => (
  <TimeFromNow column={defaultProps} value="2018-12-02T14:57:02Z" />
);

export const Today: Story = () => (
  <TimeFromNow column={defaultProps} value={todayDate} />
);

export const InLast7Days: Story = () => (
  <TimeFromNow column={defaultProps} value={inLast7DaysDate} />
);

export const InPast: Story = () => (
  <FlexContainer flexDirection="column">
    <TimeFromNow column={defaultProps} value={inLast6MonthsDate} />
    <TimeFromNow column={defaultProps} value={inLast1YearDate} />
    <TimeFromNow column={defaultProps} value={inLast5YearsDate} />
  </FlexContainer>
);

export const NullValue: Story = () => (
  <TimeFromNow
    column={{
      nullCondition: equals('unknown'),
    }}
    value="unknown"
  />
);

export const CustomNullValue: Story = () => (
  <TimeFromNow
    column={{
      nullCondition: isEmptyString,
      nullConditionValue: 'Unknown duration',
    }}
    value=""
  />
);

export const WithLink: Story = () => (
  <FlexContainer flexDirection="column">
    <TimeFromNow
      column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
      value="2018-12-02T14:57:02Z"
    />
    <TimeFromNow
      column={{
        ...defaultProps,
        onClick: (val) => action(`href ${val}`),
        hrefComposer: (val) => `/date/${val}`,
      }}
      value="2017-12-03T14:57:02Z"
    />
    <TimeFromNow
      column={{
        ...defaultProps,
        onClick: (val) => action(`to ${val}`),
        toComposer: (val) => `/date/${val}`,
      }}
      value="2016-12-04T14:57:02Z"
    />
  </FlexContainer>
);
