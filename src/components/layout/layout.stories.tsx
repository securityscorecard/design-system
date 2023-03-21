import type { Meta, Story } from '@storybook/react';

import styled from 'styled-components';

import { Col, Container, Row } from './index';

export default {
  title: 'layout/LayoutGrid',
  component: Col,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { Container, Row, Grid } from '@securityscorecard/design-system';
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    cols: {
      control: { disable: true },
      table: {
        type: { summary: 'number | "auto"' },
      },
    },
    offset: {
      control: { disable: true },
    },
  },
} as Meta;

const Content = styled.div`
  text-align: center;
  background-color: #ebf4fc;
  border: 1px solid #80baeb;
  margin-bottom: 15px;
`;

export const SetWidthColumns: Story = () => (
  <Container>
    <Row>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
      <Col cols={1}>
        <Content>1</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
      <Col cols={2}>
        <Content>2</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={3}>
        <Content>3</Content>
      </Col>
      <Col cols={3}>
        <Content>3</Content>
      </Col>
      <Col cols={3}>
        <Content>3</Content>
      </Col>
      <Col cols={3}>
        <Content>3</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={4}>
        <Content>4</Content>
      </Col>
      <Col cols={4}>
        <Content>4</Content>
      </Col>
      <Col cols={4}>
        <Content>4</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={6}>
        <Content>6</Content>
      </Col>
      <Col cols={6}>
        <Content>6</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={12}>
        <Content>12</Content>
      </Col>
    </Row>
  </Container>
);

export const AutoWidthColumns: Story = () => (
  <Container>
    <Row>
      <Col cols={4}>
        <Content>4</Content>
      </Col>
      <Col cols="auto">
        <Content>Auto width (8)</Content>
      </Col>
    </Row>
  </Container>
);

export const OffsetColumns: Story = () => (
  <Container>
    <Row>
      <Col cols={4}>
        <Content>4</Content>
      </Col>
      <Col cols={4} offset={4}>
        <Content>4 and offset 4</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={3} offset={3}>
        <Content>3 and offset 3</Content>
      </Col>
      <Col cols={3} offset={3}>
        <Content>3 and offset 3</Content>
      </Col>
    </Row>
    <Row>
      <Col cols={3} offset={3}>
        <Content>3 and offset 3</Content>
      </Col>
      <Col cols={3}>
        <Content>3</Content>
      </Col>
    </Row>
  </Container>
);
