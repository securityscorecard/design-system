import { ReactNode } from 'react';
import { Meta, StoryFn } from '@storybook/react';
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
  title: 'tests/Datatable/Table/renderers',
  component: CellRenderer,
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ width: '400px', margin: '0 auto' }}>
          <BaseTableContainer tabIndex={0}>
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

const LinkComponent = ({
  to,
  children,
  className,
}: {
  to: string;
  className: string;
  children: ReactNode;
}) => (
  <a className={className} href={to}>
    {children}
  </a>
);

type Story = StoryFn<CellRendererProps<CellRendererData>>;

/**
 *  DEFAULT RENDERER
 */
export const Default: Story = (args) => (
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

export const WithNullValue: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
WithNullValue.args = {
  ...Default.args,
  value: 'unknown',
  column: {
    ...Default.args.column,
    nullCondition: equals('unknown'),
  },
};

export const WithCustomNullValue: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
WithCustomNullValue.args = {
  ...WithNullValue.args,
  column: {
    ...WithNullValue.args.column,
    nullConditionValue: 'NaN',
  },
};

export const NullValueWithTooltip: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
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
export const TextWithTooltip: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
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
export const TextWithCustomFormatter: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
TextWithCustomFormatter.args = {
  ...Default.args,
  value: 123456789,
  column: {
    ...Default.args.column,
    cellFormatter: (val) => abbreviateNumber(val),
  },
};

/**
 *  MULTIVALUE RENDERER
 */
export const MultiValue: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValue.args = {
  ...Default.args,
  value: ['value1', 'value2', 'value3', 'value4', 'value5'],
  column: {
    ...Default.args.column,
    cellType: CellTypes.multiValue,
  },
};
export const MultiValueWithOnClick: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValueWithOnClick.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellOnClick: action('onCellValueClick'),
  },
};
export const MultiValueWithAbsoluteLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValueWithAbsoluteLink.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const MultiValueWithRelativeLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValueWithRelativeLink.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const MultiValueWithTooltip: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
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
export const MultiValueWithDisabledDisplayLimit: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValueWithDisabledDisplayLimit.args = {
  ...MultiValue.args,
  column: {
    ...MultiValue.args.column,
    multiValueDisplayLimit: 0,
  },
};
export const MultiValueWithCustomFormatter: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
MultiValueWithCustomFormatter.args = {
  ...MultiValue.args,
  value: [1235678, 987654, 654213],
  column: {
    ...MultiValue.args.column,
    cellFormatter: (val) => abbreviateNumber(val),
  },
};

/**
 *  LINK RENDERER
 */
export const LinkWithOnClick: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
LinkWithOnClick.args = {
  ...Default.args,
  column: {
    ...Default.args.column,
    cellType: CellTypes.link,
    cellOnClick: action('onCellValueClick'),
  },
};
export const LinkWithAbsoluteLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
LinkWithAbsoluteLink.args = {
  ...LinkWithOnClick.args,
  column: {
    ...LinkWithOnClick.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const LinkWithRelativeLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
LinkWithRelativeLink.args = {
  ...LinkWithOnClick.args,
  column: {
    ...LinkWithOnClick.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const LinkWithTooltip: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
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
export const LinkWithCustomFormatter: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
LinkWithCustomFormatter.args = {
  ...LinkWithOnClick.args,
  value: 123456789,
  column: {
    ...LinkWithOnClick.args.column,
    cellFormatter: (val) => abbreviateNumber(val),
  },
};

/**
 *  DISCRETE LINK RENDERER
 */
export const DiscreteLinkWithOnClick: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
DiscreteLinkWithOnClick.args = {
  ...Default.args,
  column: {
    ...Default.args.column,
    cellType: CellTypes.discreteLink,
    cellOnClick: action('onCellValueClick'),
  },
};
export const DiscreteLinkWithAbsoluteLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
DiscreteLinkWithAbsoluteLink.args = {
  ...DiscreteLinkWithOnClick.args,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellHrefComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
  },
};
export const DiscreteLinkWithRelativeLink: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
DiscreteLinkWithRelativeLink.args = {
  ...DiscreteLinkWithOnClick.args,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellToComposer: (val, row) => `?value=${val}&${composeQuery(row)}`,
    cellLinkComponent: LinkComponent,
  },
};
export const DiscreteLinkWithTooltip: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
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
export const DiscreteLinkWithCustomFormatter: Story = (args) => (
  <CellRenderer<CellRendererData> {...args} />
);
DiscreteLinkWithCustomFormatter.args = {
  ...DiscreteLinkWithOnClick.args,
  value: 123456789,
  column: {
    ...DiscreteLinkWithOnClick.args.column,
    cellFormatter: (val) => abbreviateNumber(val),
  },
};
