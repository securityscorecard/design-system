import React from 'react';
import PropTypes from 'prop-types';
import { isNotEmpty } from 'ramda-adjunct';
import styled from 'styled-components';

import { getColor } from '../../../utils/helpers';
import { Col } from '../../layout';
import { FlexContainer } from '../../FlexContainer';
import { BatchModule } from '../BatchModule';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { ControlModuleProps } from './ControlModule.types';
import { Filters } from '../../Filters';
import { dataMock, dataPointsMock } from '../../Filters/mocks/options';
import { actionsMock } from '../mocks/actions';
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';
import { ActionPropType } from '../types/Action.types';

const ControlModuleContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite3H')};
`;

const FiltersContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite5H')};
`;

const placeholderFunc = () => {
  return 0;
};

const ControlModule: React.FC<ControlModuleProps> = ({
  toolsTabItems = [],
  placeholder: searchPlaceholder,
  onSearch,
  renderSearchSuggestion = renderSuggestionFilter,
  actions = { actionsMock },
  filteredLength,
}) => {
  return (
    // <FlexContainer
    //   alignItems="center"
    //   justifyContent="space-between"
    //   padding={{ vertical: 0.8, horizontal: 1.2 }}
    // >
    <ControlModuleContainer flexDirection="column">
      <FlexContainer padding={{ vertical: 0.5 }}>
        <Col cols={5}>
          <FlexContainer margin={{ top: 0.2 }}>
            {isNotEmpty(toolsTabItems) &&
              toolsTabItems.map((tool) => {
                return <ToolsTabItem key={tool.label} {...tool} />;
              })}
          </FlexContainer>
        </Col>
        <Col>
          <SearchBar
            placeholder={searchPlaceholder}
            renderSearchSuggestion={renderSearchSuggestion}
            onSearch={onSearch}
          />
        </Col>
      </FlexContainer>
      <FiltersContainer padding={0.5}>
        <Filters
          data={dataMock}
          dataPoints={dataPointsMock}
          onApply={placeholderFunc}
          onCancel={placeholderFunc}
          onChange={placeholderFunc}
          onClose={placeholderFunc}
        />
      </FiltersContainer>

      <FlexContainer padding={0.5}>
        <BatchModule actions={actions} filteredLength={filteredLength} />
      </FlexContainer>
    </ControlModuleContainer>
  );
};

ControlModule.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  filteredLength: PropTypes.number,
  toolsTabItems: PropTypes.shape({}),
  actions: PropTypes.arrayOf(ActionPropType),
  renderSearchSuggestion: PropTypes.func,
};

export default ControlModule;
