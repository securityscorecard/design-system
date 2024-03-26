import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import { Stack } from '../../layout';
import { Paragraph, Text } from '../../typographyLegacy';
import { Button } from '../../Button';

export default {
  title: 'components/DatatableV2/EmptyData',
  component: Datatable,
} as ComponentMeta<typeof Datatable>;

export const Default: Story = Template.bind({});
Default.args = {
  ...Template.args,
  data: [],
};

export const Custom: Story = Template.bind({});
Custom.args = {
  ...Default.args,
  renderNoDataFallback: () => (
    <Stack gap="md" justify="center">
      <Text as="p" size="h3">
        There are currently no comapnies
      </Text>
      <Paragraph variant="secondary">
        If you want to see followd companies in here you need to add it first
      </Paragraph>
      <Button iconStart={{ iconName: 'plus' }} onClick={action('add-company')}>
        Add company
      </Button>
    </Stack>
  ),
};
