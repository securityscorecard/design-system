import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ControlModuleProps } from './ControlModule.types';
import { Filters } from '../../Filters';
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';

const FiltersContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite5H')};
`;

const ControlModule: React.FC<ControlModuleProps> = ({
  hasSearch = true,
  searchConfig,
  hasFiltering = true,
  filtersConfig,
  defaultIsFilteringOpen = true,
  hasColumnVisibility = true,
  // defaultHiddenColumns = [],
  hasColumnOrdering = true,
  // defaultColumnOrder,
  hasCustomViews = true,
  // defaultCustomView,
}) => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(defaultIsFilteringOpen);

  const handleCloseFilter = () => {
    filtersConfig.onClose();
    setAreFiltersOpen(false);
  };

  const toolActions = {
    onToolActivate: () => {
      return 0;
    },
    onToolDeactivate: () => {
      return 0;
    },
  };

  const filterToolActions = {
    onToolActivate: () => {
      setAreFiltersOpen(true);
      return 0;
    },
    onToolDeactivate: () => {
      setAreFiltersOpen(false);
      return 0;
    },
  };

  return (
    <FlexContainer flexDirection="column">
      <FlexContainer
        alignItems="center"
        padding={{ vertical: 0.4, horizontal: 0.8 }}
      >
        <FlexContainer flexShrink={1} margin={{ right: 1.6 }}>
          {hasColumnOrdering && (
            <ToolsTabItem
              iconName={SSCIconNames.reorder}
              label="Show/Hide"
              {...toolActions}
            />
          )}
          {hasFiltering && (
            <ToolsTabItem
              iconName={SSCIconNames.filter}
              label="Filter"
              toolState={defaultIsFilteringOpen ? 'active' : 'default'}
              {...filterToolActions}
            />
          )}
          {hasColumnVisibility && (
            <ToolsTabItem
              iconName={SSCIconNames.sitemap}
              label="Group"
              {...toolActions}
            />
          )}
          {hasCustomViews && (
            <ToolsTabItem
              iconName={SSCIconNames.cog}
              label="Views"
              {...toolActions}
            />
          )}
        </FlexContainer>

        {hasSearch && (
          <FlexContainer flexGrow={1}>
            <SearchBar
              {...searchConfig}
              renderSearchSuggestion={renderSuggestionFilter}
            />
          </FlexContainer>
        )}
      </FlexContainer>

      {areFiltersOpen && (
        <FiltersContainer padding={{ top: 1.2, bottom: 0.8, horizontal: 0.8 }}>
          <Filters {...filtersConfig} onClose={handleCloseFilter} />
        </FiltersContainer>
      )}
    </FlexContainer>
  );
};

ControlModule.propTypes = {
  hasSearch: PropTypes.bool,
  searchConfig: SearchBar.propTypes,
  hasFiltering: PropTypes.bool,
  defaultIsFilteringOpen: PropTypes.bool,
  filtersConfig: Filters.propTypes,
  hasColumnVisibility: PropTypes.bool,
  defaultHiddenColumns: PropTypes.arrayOf(PropTypes.shape({})),
  hasColumnOrdering: PropTypes.bool,
  defaultColumnOrder: PropTypes.arrayOf(PropTypes.shape({})),
  hasCustomViews: PropTypes.bool,
  defaultCustomView: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ControlModule;
