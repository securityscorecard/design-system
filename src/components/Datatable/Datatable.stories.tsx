import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import Datatable from './Datatable';
import { Col, Container, Row } from '../layout';

export default {
  title: 'components/Datatable',
  component: Datatable,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
} as Meta;

export const Default: Story = () => (
  <Container>
    <Row>
      <Col>
        <Datatable />
      </Col>
    </Row>
  </Container>
);
