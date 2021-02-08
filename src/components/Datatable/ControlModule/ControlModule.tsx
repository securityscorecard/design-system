import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isNotEmpty } from 'ramda-adjunct';
import styled from 'styled-components';

import { getColor } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { ControlModuleProps } from './ControlModule.types';
import { Filters } from '../../Filters';
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';

const FiltersContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite5H')};
`;

const ControlModule: React.FC<ControlModuleProps> = ({
  toolsTabItems,
  placeholder: searchPlaceholder = 'Search',
  onSearch,
  data: filtersData,
  dataPoints: filtersDataPoints,
  onApply: onApplyFilter,
  onCancel: onCancelFilter,
  onChangeFilter,
  onClose,
  defaultIsFilterOpen = false,
}) => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(defaultIsFilterOpen);
  const [tools, setTools] = useState(toolsTabItems);

  const handleCloseFilter = () => {
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
    <FlexContainer flexDirection="column">
      <FlexContainer
        alignItems="center"
        padding={{ vertical: 0.4, horizontal: 0.8 }}
      >
        {isNotEmpty(tools) && (
          <FlexContainer flexShrink={1} margin={{ right: 1.6 }}>
            {tools.map((tool) => {
              return <ToolsTabItem key={tool.label} {...tool} />;
            })}
          </FlexContainer>
        )}
        <FlexContainer flexGrow={1}>
          <SearchBar
            placeholder={searchPlaceholder}
            renderSearchSuggestion={renderSuggestionFilter}
            onSearch={onSearch}
          />
        </FlexContainer>
      </FlexContainer>

      {areFiltersOpen && (
        <FiltersContainer padding={{ top: 1.2, bottom: 0.8, horizontal: 0.8 }}>
          <Filters
            data={filtersData}
            dataPoints={filtersDataPoints}
            onApply={onApplyFilter}
            onCancel={onCancelFilter}
            onChangeFilter={onChangeFilter}
            onClose={handleCloseFilter}
          />
        </FiltersContainer>
      )}
    </FlexContainer>
  );
};

ControlModule.propTypes = {
  toolsTabItems: PropTypes.arrayOf(
    PropTypes.exact({ ...ToolsTabItem.propTypes }).isRequired,
  ),
  ...SearchBar.propTypes,
  ...Filters.propTypes,
  defaultIsFilterOpen: PropTypes.bool,
};

export default ControlModule;
