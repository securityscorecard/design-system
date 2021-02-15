import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ControlsConfig } from '../Datatable.types';
import { Filters } from '../../Filters';
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';

const FiltersContainer = styled(FlexContainer)`
  background-color: ${getColor('graphite5H')};
`;
const ControlModule = <D extends Record<string, unknown>>({
  hasSearch = true,
  searchConfig,
  hasFiltering,
  filtersConfig,
  defaultIsFilteringOpen = true,
  hasColumnVisibility = true,
  // defaultHiddenColumns = [],
  hasColumnOrdering = false,
  // defaultColumnOrder,
  hasCustomViews = false,
  // defaultCustomView,
  columnVisibilityActions,
  filteringActions,
  columnOrderingActions,
  customViewsActions,
}: ControlsConfig<D>): React.ReactElement => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(defaultIsFilteringOpen);

  const handleCloseFilter = () => {
    filtersConfig.onClose();
    setAreFiltersOpen(false);
  };

  const filterToolActions = {
    onToolActivate: (event) => {
      setAreFiltersOpen(true);
      filteringActions.onToolActivate(event);
    },
    onToolDeactivate: (event) => {
      setAreFiltersOpen(false);
      filteringActions.onToolDeactivate(event);
    },
  };

  return (
    <FlexContainer flexDirection="column">
      <FlexContainer
        alignItems="center"
        padding={{ vertical: 0.4, horizontal: 0.8 }}
      >
        <FlexContainer flexShrink={1} margin={{ right: 1.6 }}>
          {hasColumnVisibility && (
            <ToolsTabItem
              iconName={SSCIconNames.reorder}
              label="Show/Hide"
              {...columnVisibilityActions}
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
          {hasColumnOrdering && (
            <ToolsTabItem
              iconName={SSCIconNames.sitemap}
              label="Group"
              {...columnOrderingActions}
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
