import React from 'react';
import PropTypes from 'prop-types';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Row } from 'react-table';
import { MemoryRouter } from 'react-router-dom';
import { equals, F as stubFalse } from 'ramda';
import { action } from '@storybook/addon-actions';

import { composeQuery } from '../mocks/columns';
import { BaseTableContainer, StyledBaseTable } from '../BaseTable.styles';
import CellRenderer from './CellRenderer';
import { CellRendererProps } from './renderers.types';
import { CellTypes } from './renderers.enums';
import { abbreviateNumber } from '../../../../utils';

export default {
  title: 'components/Datatable/internalComponents/Table/renderers',
  component: CellRenderer,
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ width: '400px', margin: '0 auto' }}>
          <BaseTableContainer>
            <StyledBaseTable>
              <tbody>
                <tr>
                  <td className="ds-table-cell">{storyFn()}</td>
                </tr>
              </tbody>
            </StyledBaseTable>
          </BaseTableContainer>
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

type CellRendererData = {
  column1: string;
  column2: string[];
};

const LinkComponent: React.FC<{ to: string; className: string }> = ({
  to,
  children,
  className,
}) => (
  <a className={className} href={to}>
    {children}
  </a>
);
LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

/**
 *  DEFAULT RENDERER
 */
export const Default: Story<CellRendererProps<CellRendererData>> = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
Default.args = {
  value: 'value',
  column: {
    cellType: CellTypes.text,
    nullCondition: stubFalse,
  },
  row: {
    original: { column1: 'value', column2: ['value1', 'value2'] },
  } as Row<CellRendererData>,
};

export const WithNullValue: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
WithNullValue.args = {
  ...Default.args,
  value: 'unknown',
  column: {
    ...Default.args.column,
    nullCondition: equals('unknown'),
  },
};

export const WithCustomNullValue: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
WithCustomNullValue.args = {
  ...WithNullValue.args,
  column: {
    ...WithNullValue.args.column,
    nullConditionValue: 'NaN',
  },
};

export const NullValueWithTooltip: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
NullValueWithTooltip.args = {
  ...WithCustomNullValue.args,
  column: {
    ...WithCustomNullValue.args.column,
    cellTooltipPopupComposer: (val, row) => (
      <div>
        Value: {val}
        <br />
        Row data: <br />
        <pre>{JSON.stringify(row, null, 2)}</pre>
      </div>
    ),
  },
};

/**
 *  TEXT RENDERER
 */
export const TextWithTooltip: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
TextWithTooltip.args = {
  ...Default.args,
  column: {
    ...Default.args.column,
    cellTooltipPopupComposer: (val, row) => (
      <div>
        Value: {val}
        <br />
        Row data: <br />
        <pre>{JSON.stringify(row, null, 2)}</pre>
      </div>
    ),
  },
};
export const TextWithCustomFormatter: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
TextWithCustomFormatter.args = {
  ...Default.args,
  value: 123456789,
  column: {
    ...Default.args.column,
    cellFormatter: abbreviateNumber,
  },
};

/**
 *  MULTIVALUE RENDERER
 */
export const MultiValue: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
MultiValue.args = {
  ...Default.args,
  value: ['value1', 'value2', 'value3', 'value4', 'value5'],
  column: {
    ...Default.args.column,
    cellType: CellTypes.multiValue,
  },
};
export const MultiValueWithOnClick: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithOnClick.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellOnClick: action('onCellValueClick'),
  },
};
export const MultiValueWithAbsoluteLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithAbsoluteLink.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const MultiValueWithRelativeLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithRelativeLink.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const MultiValueWithTooltip: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithTooltip.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellTooltipPopupComposer: (val, row) => (
      <div>
        Pill value: {val}
        <br />
        Row data: <br />
        <pre>{JSON.stringify(row, null, 2)}</pre>
      </div>
    ),
  },
};
export const MultiValueWithDisabledDisplayLimit: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithDisabledDisplayLimit.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    multiValueDisplayLimit: 0,
  },
};
export const MultiValueWithCustomFormatter: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
MultiValueWithCustomFormatter.args = {
  ...MultiValue.args,
  value: [1235678, 987654, 654213],
  column: {
    ...MultiValue.args.column,
    cellFormatter: abbreviateNumber,
  },
};

/**
 *  LINK RENDERER
 */
export const LinkWithOnClick: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
LinkWithOnClick.args = {
  ...Default.args,
  column: {
    ...Default.args.column,
    cellType: CellTypes.link,
    cellOnClick: action('onCellValueClick'),
  },
};
export const LinkWithAbsoluteLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
LinkWithAbsoluteLink.args = {
  ...LinkWithOnClick.args,
  column: {
    ...LinkWithOnClick.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const LinkWithRelativeLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
LinkWithRelativeLink.args = {
  ...LinkWithOnClick.args,
  column: {
    ...LinkWithOnClick.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const LinkWithTooltip: Story<CellRendererProps<CellRendererData>> = (
  args,
) => <CellRenderer<CellRendererData> {...args} />;
LinkWithTooltip.args = {
  ...LinkWithOnClick.args,
  column: {
    ...LinkWithOnClick.args.column,
    cellTooltipPopupComposer: (val, row) => (
      <div>
        Value: {val}
        <br />
        Row data: <br />
        <pre>{JSON.stringify(row, null, 2)}</pre>
      </div>
    ),
  },
};
export const LinkWithCustomFormatter: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
LinkWithCustomFormatter.args = {
  ...LinkWithOnClick.args,
  value: 123456789,
  column: {
    ...LinkWithOnClick.args.column,
    cellFormatter: abbreviateNumber,
  },
};

/**
 *  DISCRETE LINK RENDERER
 */
export const DiscreteLinkWithOnClick: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
DiscreteLinkWithOnClick.args = {
  ...Default.args,
  column: {
    ...Default.args.column,
    cellType: CellTypes.discreteLink,
    cellOnClick: action('onCellValueClick'),
  },
};
export const DiscreteLinkWithAbsoluteLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
DiscreteLinkWithAbsoluteLink.args = {
  ...DiscreteLinkWithOnClick.args,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const DiscreteLinkWithRelativeLink: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
DiscreteLinkWithRelativeLink.args = {
  ...DiscreteLinkWithOnClick.args,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const DiscreteLinkWithTooltip: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
DiscreteLinkWithTooltip.args = {
  ...DiscreteLinkWithOnClick.args,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellTooltipPopupComposer: (val, row) => (
      <div>
        Value: {val}
        <br />
        Row data: <br />
        <pre>{JSON.stringify(row, null, 2)}</pre>
      </div>
    ),
  },
};
export const DiscreteLinkWithCustomFormatter: Story<
  CellRendererProps<CellRendererData>
> = (args) => <CellRenderer<CellRendererData> {...args} />;
DiscreteLinkWithCustomFormatter.args = {
  ...DiscreteLinkWithOnClick.args,
  value: 123456789,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellFormatter: abbreviateNumber,
  },
};
