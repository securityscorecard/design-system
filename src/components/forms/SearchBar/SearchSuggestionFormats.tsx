import React from 'react';

import { Col, Row } from '../../layout';
import { Strong } from '../../typography';
import {
  renderSuggestionFunc,
  renderSuggestionWithFilterFunc,
} from './SearchBar.types';

export const renderSuggestionDefault: renderSuggestionFunc = ({ value }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{value}</>;
};

export const renderSuggestionFilter: renderSuggestionWithFilterFunc = ({
  value,
  filter,
}) => {
  return (
    <Row>
      <Col cols={3}>{filter.field} </Col>
      <Col cols={3}>{filter.condition}</Col>
      <Col cols={6}>
        <Strong>{value}</Strong>
      </Col>
    </Row>
  );
};
