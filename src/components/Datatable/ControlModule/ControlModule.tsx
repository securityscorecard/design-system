import React, { useEffect, useState } from 'react';
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
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';

const ControlModuleContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite3H')};
`;

const FiltersContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite5H')};
`;

const ControlModule: React.FC<ControlModuleProps> = ({
  toolsTabItems = [],
  placeholder: searchPlaceholder = 'Search',
  onSearch,
  renderSearchSuggestion = renderSuggestionFilter,
  data: filtersData,
  dataPoints: filtersDataPoints,
  onApply: onApplyFilter,
  onCancel: onCancelFilter,
  onChangeFilter,
  onClose,
  actions,
  isFilterOpen = false,
}) => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(isFilterOpen);
  const [tools, setTools] = useState(toolsTabItems);

  const onCloseFilter = () => {
    onClose();
    setAreFiltersOpen(false);
  };

  useEffect(() => {
    const updatedTools = toolsTabItems.map((tool) => {
      return {
        ...tool,
        ...(tool.label === 'Filter' && {
          onToolActivate: (event) => {
            tool.onToolActivate(event);
            setAreFiltersOpen(true);
          },
          onToolDeactivate: (event) => {
            tool.onToolDeactivate(event);
            setAreFiltersOpen(false);
          },
        }),
      };
    });
    setTools(updatedTools);
  }, [toolsTabItems]);

  return (
    <ControlModuleContainer flexDirection="column">
      <FlexContainer padding={{ vertical: 0.5 }}>
        <Col cols={5}>
          <FlexContainer margin={{ top: 0.2 }}>
            {isNotEmpty(tools) &&
              tools.map((tool) => {
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
      {areFiltersOpen && (
        <FiltersContainer padding={{ horizontal: 0.5, vertical: 1 }}>
          <Filters
            data={filtersData}
            dataPoints={filtersDataPoints}
            onApply={onApplyFilter}
            onCancel={onCancelFilter}
            onChangeFilter={onChangeFilter}
            onClose={onCloseFilter}
          />
        </FiltersContainer>
      )}

      <BatchModule actions={actions} />
    </ControlModuleContainer>
  );
};

ControlModule.propTypes = {
  toolsTabItems: PropTypes.arrayOf(
    PropTypes.exact({ ...ToolsTabItem.propTypes }),
  ),
  ...SearchBar.propTypes,
  ...Filters.propTypes,
  ...BatchModule.propTypes,
  isFilterOpen: PropTypes.bool,
};

export default ControlModule;
