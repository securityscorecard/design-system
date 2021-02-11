import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { always, equals } from 'ramda';

import Count from './Count';
import { FlexContainer } from '../../../../FlexContainer';

export default {
  title: 'components/Datatable/components/TableCellRenderers/Count',
  component: Count,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const defaultProps = {
  nullCondition: always(false),
};

export const Default: Story = () => (
  <Count column={defaultProps} value={5462} />
);

export const NullValue: Story = () => (
  <Count
    column={{
      nullCondition: equals(0),
    }}
    value={0}
  />
);

export const CustomNullValue: Story = () => (
  <Count
    column={{ nullCondition: equals(0), nullConditionValue: 'Unknown' }}
    value={0}
  />
);

export const WithLink: Story = () => (
  <FlexContainer flexDirection="column">
    <Count
      column={{ ...defaultProps, onClick: (val) => action(`onClick ${val}`) }}
      value={1111}
    />
    <Count
      column={{
        ...defaultProps,
        onClick: (val) => action(`href ${val}`),
        hrefComposer: (val) => `/count/${val}`,
      }}
      value={2222}
    />
    <Count
      column={{
        ...defaultProps,
        onClick: (val) => action(`to ${val}`),
        toComposer: (val) => `/count/${val}`,
      }}
      value={3333}
    />
  </FlexContainer>
);
