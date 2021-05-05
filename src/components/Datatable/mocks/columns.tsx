import React from 'react';
import { action } from '@storybook/addon-actions';
import { CellProps, Column } from 'react-table';
import { Link as RouterLink } from 'react-router-dom';
import { pipe, reduce, toPairs } from 'ramda';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { TextSizes, TextVariants } from '../../typography/Text/Text.enums';
import { Strong, Text } from '../../typography';
import { Tooltip } from '../../Tooltip';
import { abbreviateNumber } from '../../../utils/helpers';
import { Data } from './types';

export const composeQuery = pipe(
  toPairs,
  reduce((acc, [key, value]) => `${acc}&${key}=${value}`, ''),
);
export const simpleColumns: Column<Data>[] = [
  {
    Header: 'IP Address',
    accessor: 'ipAddress',
    width: 200,
    cellType: 'link',
    cellLinkComponent: 'a',
    cellHrefComposer: (val: string, row: Data): string =>
      `?value=${val}&${composeQuery(row)}`,
  },
  {
    Header: 'Status',
    headerTooltip: <Text>Show status of the asset.</Text>,
    accessor: 'status',
    width: 96,
    Cell: React.memo(
      ({ value }: { value: string }): React.ReactElement => {
        switch (value) {
          case 'Removed':
          case 'Dynamic':
            return (
              <Text size={TextSizes.inherit} variant={TextVariants.context}>
                {value}
              </Text>
            );
          case 'Claimed':
          case 'Disputed':
            return (
              <Text size={TextSizes.inherit} variant={TextVariants.secondary}>
                {value}
              </Text>
            );

          default:
            return <Strong>{value}</Strong>;
        }
      },
    ),
  },
  {
    Header: 'Domains',
    accessor: 'domainsCount',
    width: 96,
    cellTooltipPopupComposer: (val: string, row: Data): React.ReactElement => (
      <div>
        <div>{val}</div>
        <pre>
          <code>{JSON.stringify(row, null, 2)}</code>
        </pre>
      </div>
    ),
  },
  {
    Header: 'Detection',
    accessor: 'detectionMethod',
    width: 160,
    cellType: 'multiValue',
    cellOnClick: action('onCellValueClick (detectionMethod)'),
  },
  {
    Header: 'Source',
    accessor: 'source',
    width: 160,
    cellType: 'multiValue',
    multiValueDisplayLimit: 3,
  },
  { Header: 'Country', accessor: 'country', width: 144 },
  {
    Header: 'Issues',
    accessor: 'issuesCount',
    width: 88,
    cellType: 'discreteLink',
    cellLinkComponent: 'button',
    cellFormatter: abbreviateNumber,
    cellOnClick: action('onCellValueClick (issuesCount)'),
  },
  {
    Header: 'Findings',
    accessor: 'findingsCount',
    width: 88,
    cellType: 'discreteLink',
    cellLinkComponent: RouterLink,
    cellToComposer: (val: string, row: Data): string =>
      `?value=${val}&${composeQuery(row)}`,
    cellFormatter: abbreviateNumber,
  },
  {
    Header: 'First observed',
    accessor: 'observationDate',
    width: 120,
    cellFormatter: (value: string): string =>
      dayjs(value).format('D MMMM YYYY'),
  },
  {
    Header: 'Last observed',
    accessor: 'lastObservationDate',
    width: 120,
    cellFormatter: (value: string): string => {
      dayjs.extend(relativeTime);
      const date = dayjs(value);
      const now = dayjs();

      // value is today
      if (date.isSame(now, 'day')) return 'Today';
      // value is in last 7 days
      if (date.isAfter(now.subtract(7, 'day'))) return date.format('dddd');
      return date.from(now, true);
    },
  },
  {
    id: 'observedFor',
    Header: 'Observed for',
    width: 120,
    Cell: ({
      row: {
        original: { observationDate, lastObservationDate },
      },
    }: CellProps<Data>): React.ReactElement => {
      dayjs.extend(relativeTime);

      return (
        <Tooltip
          popup={
            <>
              <div>
                Observation date: {dayjs(observationDate).format('D MMMM YYYY')}
              </div>
              <div>
                Last observation date:{' '}
                {dayjs(lastObservationDate).format('D MMMM YYYY')}
              </div>
            </>
          }
        >
          {dayjs(observationDate).to(dayjs(lastObservationDate), true)}
        </Tooltip>
      );
    },
  },
];
