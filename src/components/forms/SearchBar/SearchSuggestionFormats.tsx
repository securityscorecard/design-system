import React from 'react';

import { Col, Row } from '../../layout';
import { Strong } from '../../typography';
import {
  SearchSuggestionDefaultPropType,
  SearchSuggestionFilterPropType,
} from './SearchSuggestions.types';

const SearchSuggestionDefault = ({ suggestion }) => {
  return suggestion.value;
};

const SearchSuggestionFilter = ({ suggestion }) => {
  return (
    <Row>
      <Col cols={3}>{suggestion.filter.field} </Col>
      <Col cols={3}>{suggestion.filter.condition}</Col>
      <Col cols={6}>
        <Strong>{suggestion.value}</Strong>
      </Col>
    </Row>
  );
};

SearchSuggestionDefault.propTypes = {
  suggestion: SearchSuggestionDefaultPropType.isRequired,
};

SearchSuggestionFilter.propTypes = {
  suggestion: SearchSuggestionFilterPropType.isRequired,
};

export { SearchSuggestionDefault, SearchSuggestionFilter };
