import type { Meta, Story } from '@storybook/react/types-6-0';

import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsDateRange,
  fieldsDateRangePlaceholderUnits,
  fieldsDateRangeValidation,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/DateRangePicker',
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: ${pxToRem(60)};
`;

export const DateRange: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsDateRange}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const DateRangeValidation: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsDateRangeValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const DateRangePlaceholderUnits: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsDateRangePlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
