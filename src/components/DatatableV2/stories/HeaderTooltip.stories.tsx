import type { ComponentMeta } from '@storybook/react';
import type { Story } from './Template';

import Datatable from '../Datatable';
import Template, { columns } from './Template';

export default {
  title: 'components/DatatableV2/HeaderTooltip',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

const TooltipComponent = ({ header, column }) => (
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
