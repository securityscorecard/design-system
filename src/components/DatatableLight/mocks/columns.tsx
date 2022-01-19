import React from 'react';
import { CellProps, Column } from 'react-table';
import styled from 'styled-components';
import { pipe, reduce, toPairs } from 'ramda';

import { HexGrade } from '../../HexGrade';
import { Link, Strong, Text } from '../../typography';
import { FlexContainer } from '../../FlexContainer';
import { TextSizes, TextVariants } from '../../typography/Text/Text.enums';
import { Data } from './types';
import { Grades } from '../../HexGrade/HexGrade.types';

const StyledCompanyCell = styled.div`
  flex: 1 0 auto;
  margin-right: 8px;
  font-size: 14px;
  line-height: 1;
`;

const StyledCompanyCaption = styled.div`
  line-height: 1.2;
`;

export const composeQuery = pipe(
  toPairs,
  reduce((acc, [key, value]) => `${acc}&${key}=${value}`, ''),
);

export const columnsForFirstTable: Column<Data>[] = [
  {
    Header: 'Company',
    accessor: 'companyName',
    width: 200,
    Cell: ({
      row: {
        original: { companyName, companyLink, companyGrade },
      },
    }: CellProps<Data>): React.ReactElement => {
      return (
        <FlexContainer alignItems="center">
          <StyledCompanyCell>
            <HexGrade grade={companyGrade as Grades} size={32} />
          </StyledCompanyCell>
          <StyledCompanyCaption>
            <div>{companyName}</div>
            <Link
              color="secondary"
              href={companyLink}
              style={{ textDecoration: 'none' }}
            >
              {companyLink}
            </Link>
          </StyledCompanyCaption>
        </FlexContainer>
      );
    },
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
];

export const columnsForSecondTable: Column<Data>[] = [
  {
    Header: 'Company',
    accessor: 'companyName',
    width: 200,
    Cell: ({
      row: {
        original: { companyName, companyLink, companyGrade },
      },
    }: CellProps<Data>): React.ReactElement => {
      return (
        <FlexContainer alignItems="center">
          <StyledCompanyCell>
            <HexGrade grade={companyGrade as Grades} size={32} />
          </StyledCompanyCell>
          <StyledCompanyCaption>
            <div>{companyName}</div>
            <Link
              color="secondary"
              href={companyLink}
              style={{ textDecoration: 'none' }}
            >
              {companyLink}
            </Link>
          </StyledCompanyCaption>
        </FlexContainer>
      );
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 96,
    Cell: React.memo(
      ({ value }: { value: string }): React.ReactElement => {
        switch (value) {
          case 'Removed':
          case 'Dynamic':
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
    Header: 'Source',
    accessor: 'source',
    width: 160,
    cellType: 'multiValue',
    multiValueDisplayLimit: 3,
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
];
