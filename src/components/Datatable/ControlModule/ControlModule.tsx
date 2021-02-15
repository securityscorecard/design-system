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
  columnVisibilityActions,
  filteringActions,
  columnOrderingActions,
  customViewsActions,
}) => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(defaultIsFilteringOpen);

  const handleCloseFilter = () => {
    filtersConfig.onClose();
    setAreFiltersOpen(false);
  };

  const filterToolActions = {
    onToolActivate: () => {
      setAreFiltersOpen(true);
      filteringActions.onToolActivate();
    },
    onToolDeactivate: () => {
      setAreFiltersOpen(false);
      filteringActions.onToolDeactivate();
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
              {...columnOrderingActions}
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
              {...columnVisibilityActions}
            />
          )}
          {hasCustomViews && (
            <ToolsTabItem
              iconName={SSCIconNames.cog}
              label="Views"
              {...customViewsActions}
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

      {hasFiltering && areFiltersOpen && (
        <FiltersContainer padding={{ top: 1.2, bottom: 0.8, horizontal: 0.8 }}>
          <Filters {...filtersConfig} onClose={handleCloseFilter} />
        </FiltersContainer>
      )}
    </FlexContainer>
  );
};

const toolActionPropType = PropTypes.shape({
  onToolActivate: PropTypes.func,
  onToolDeactivate: PropTypes.func,
});

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
  columnVisibilityActions: toolActionPropType,
  filteringActions: toolActionPropType,
  columnOrderingActions: toolActionPropType,
  customViewsActions: toolActionPropType,
};

export default ControlModule;
