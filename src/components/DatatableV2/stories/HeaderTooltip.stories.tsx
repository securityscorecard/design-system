import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';
import { DatatableColumn, DatatableHeader } from '../Datatable.types';
import { DataSource } from '../mocks/data';

export default {
  title: 'components/DatatableV2/HeaderTooltip',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

const TooltipComponent = ({
  header,
  column,
}: {
  header: DatatableHeader<DataSource>;
  column: DatatableColumn<DataSource>;
}) => (
  <div>
    {column.columnDef.header} - {header.id}
  </div>
);

export const TooltipEnabled: Story = Template.bind({});
TooltipEnabled.args = {
  ...Template.args,
  columns: [
    { ...columns[0], renderHeaderTooltip: TooltipComponent },
    { ...columns[1], renderHeaderTooltip: TooltipComponent },
    { ...columns[2], renderHeaderTooltip: TooltipComponent },
    { ...columns[3], renderHeaderTooltip: TooltipComponent },
  ],
};
