import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { map, mergeDeepRight, omit, pipe, zipObj } from 'ramda';
import { isNonEmptyArray } from 'ramda-adjunct';

import { getColor } from '../../../utils';
import { SearchBar } from '../../forms/SearchBar';
import { Filters } from '../../Filters';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ControlButton } from './ControlButton';
import { DatatableStore } from '../Datatable.store';
import {
  ControlState,
  Controls,
  ControlsConfigPropType,
  ControlsLocalState,
  ControlsModuleProps,
} from './ControlsModule.types';
import { Filter } from '../../Filters/Filters.types';
import { ControlTypes } from './ControlsModule.enums';
import { ColumnsControls } from './ColumnsControls';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Inline, Padbox, Stack } from '../../layout';

const FiltersContainer = styled(Padbox)`
  display: flex;
  background-color: ${getColor('neutral.0')};
`;

const resetActiveControls: (
  toggledControl: Controls[],
  currentState: ControlsLocalState,
) => ControlsLocalState = pipe(
  omit,
  map((controlState) => ({ ...controlState, isActive: false })),
);

const prepareControlState: (
  providedState: [boolean, boolean],
) => ControlState = zipObj(['isActive', 'isApplied']);

const defaultControlState: ControlState = {
  isActive: false,
  isApplied: false,
};

const mergeControlState = mergeDeepRight(defaultControlState);

// TODO: commented part will be enabled when functionality is implemented
const ControlsModule = <D extends Record<string, unknown>>({
  hasSearch,
  searchConfig,
  hasFiltering,
  filteringConfig,
  defaultIsFilteringOpen,
  defaultIsFilteringApplied,
  // hasColumnVisibility,
  // defaultIsColumnVisibilityOpen,
  // defaultIsColumnVisibilityApplied,
  // defaultHiddenColumns,
  isDataLoading,
  hasColumnOrdering,
  defaultIsColumnOrderingOpen,
  defaultIsColumnOrderingApplied,
  // hasGrouping,
  // defaultIsGroupingOpen,
  // defaultIsGroupingApplied,
  // defaultGroups,
  // hasViews,
  // defaultIsViewsOpen,
  // defaultIsViewsApplied,
  // defaultViews,
  onCancelLoading,
  onControlToggle,
}: ControlsModuleProps<D>): React.ReactElement => {
  const {
    onClose: onFilteringClose,
    onApply: onFilteringApply,
    state: filteringState,
    fields: filteringFields,
    ...restFilteringConfig
  } = filteringConfig;
  const {
    onSearch,
    onClear: onSearchClear,
    defaultValue: defaultSearchValue,
    ...restSearchConfig
  } = searchConfig;

  const filteringStoreState = DatatableStore.useState((s) => s.filters);
  const [controlsState, setControlsState] = useState<ControlsLocalState>({
    [ControlTypes.filters]: mergeControlState(
      prepareControlState([
        defaultIsFilteringOpen,
        defaultIsFilteringApplied || isNonEmptyArray(filteringState),
      ]),
    ),
    [ControlTypes.columns]: mergeControlState(
      prepareControlState([
        /* defaultIsColumnVisibilityOpen || */ defaultIsColumnOrderingOpen,
        /* defaultIsColumnVisibilityApplied || */ defaultIsColumnOrderingApplied,
      ]),
    ),
    // [ControlTypes.groups]: mergeControlState(
    //   prepareControlState([defaultIsGroupingOpen, defaultIsGroupingApplied]),
    // ),
    // [ControlTypes.views]: mergeControlState(
    //   prepareControlState([
    //     defaultIsViewsOpen,
    //     defaultIsViewsApplied,
    //   ]),
    // ),
  });

  useEffect(() => {
    DatatableStore.update((s) => {
      s.query = defaultSearchValue;
      s.filters = filteringState;
      s.hasAppliedFilters = controlsState[ControlTypes.filters].isApplied;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isToolbarEnabled = hasFiltering || hasColumnOrdering;
  // hasColumnVisibility ||
  // hasFiltering ||
  // hasGrouping ||
  // hasViews;

  const shouldShowFiltering = hasFiltering && isNonEmptyArray(filteringFields);

  const applyControlStateChange = (
    control: Controls,
    newState: Partial<ControlState>,
  ): void => {
    setControlsState((state) => ({
      ...state,
      [control]: {
        ...state[control],
        ...newState,
      },
    }));
  };

  const handleControlOnClick = (control: Controls, isActive: boolean): void => {
    onControlToggle(control, !isActive);
    setControlsState((state) => ({
      ...resetActiveControls([control], state),
      [control]: {
        ...state[control],
        isActive: !state[control].isActive,
      },
    }));
  };

  const handleCloseFilter = () => {
    onFilteringClose();
    applyControlStateChange(ControlTypes.filters, { isActive: false });
  };

  const handleApplyFilter = (appliedfilters: Filter[]): void => {
    const hasAppliedFilters = isNonEmptyArray(appliedfilters);
    onFilteringApply(appliedfilters);
    applyControlStateChange(ControlTypes.filters, {
      isApplied: hasAppliedFilters,
    });

    DatatableStore.update((s) => {
      s.pageIndex = 0;
      s.filters = appliedfilters;
      s.hasAppliedFilters = hasAppliedFilters;
      s.isCanceled = false;
    });
  };

  const handleOnSearch = (query: string): void => {
    onSearch(query);

    DatatableStore.update((s) => {
      s.pageIndex = 0;
      s.query = query;
      s.isCanceled = false;
    });
  };

  const handleOnSearchClear = (): void => {
    onSearchClear();

    DatatableStore.update((s) => {
      s.pageIndex = 0;
      s.query = '';
    });
  };

  return (
    <Stack>
      <Padbox paddingSize={SpaceSizes.md} paddingType={PaddingTypes.squish}>
        <Inline gap={SpaceSizes.lg} stretch="end">
          {isToolbarEnabled && (
            <Inline>
              {
                /* hasColumnVisibility || */ hasColumnOrdering && (
                  <ColumnsControls
                    isOpen={controlsState[ControlTypes.columns].isActive}
                    onApply={(shouldApply) => {
                      applyControlStateChange(ControlTypes.columns, {
                        isApplied: shouldApply,
                      });
                      handleControlOnClick(
                        ControlTypes.columns,
                        controlsState[ControlTypes.columns].isActive,
                      );
                    }}
                    onClose={() =>
                      handleControlOnClick(
                        ControlTypes.columns,
                        controlsState[ControlTypes.columns].isActive,
                      )
                    }
                    onOpen={() =>
                      handleControlOnClick(
                        ControlTypes.columns,
                        controlsState[ControlTypes.columns].isActive,
                      )
                    }
                  >
                    <ControlButton
                      iconName={SSCIconNames.reorder}
                      isActive={controlsState[ControlTypes.columns].isActive}
                      isApplied={controlsState[ControlTypes.columns].isApplied}
                      label="Columns"
                      onClick={() =>
                        handleControlOnClick(
                          ControlTypes.columns,
                          controlsState[ControlTypes.columns].isActive,
                        )
                      }
                    />
                  </ColumnsControls>
                )
              }
              {shouldShowFiltering && (
                <ControlButton
                  iconName={SSCIconNames.filter}
                  isActive={controlsState[ControlTypes.filters].isActive}
                  isApplied={controlsState[ControlTypes.filters].isApplied}
                  label="Filters"
                  onClick={() =>
                    handleControlOnClick(
                      ControlTypes.filters,
                      controlsState[ControlTypes.filters].isActive,
                    )
                  }
                />
              )}
              {/* {hasGrouping && (
              <ControlButton
                iconName={SSCIconNames.sitemap}
                isActive={controlsState[ControlTypes.groups].isActive}
                isApplied={controlsState[ControlTypes.groups].isApplied}
                label="Groups"
                onClick={() => handleControlOnClick(ControlTypes.groups, controlsState[ControlTypes.groups].isActive)}
              />
            )}
            {hasCustomViews && (
              <ControlButton
                iconName={SSCIconNames.cog}
                isActive={controlsState[ControlTypes.views].isActive}
                isApplied={controlsState[ControlTypes.views].isApplied}
                label="Views"
                onClick={() => handleControlOnClick(ControlTypes.views, controlsState[ControlTypes.views].isActive)}
              />
            )} */}
            </Inline>
          )}

          {hasSearch && (
            <SearchBar
              defaultValue={defaultSearchValue}
              hasSuggestions={false}
              onClear={handleOnSearchClear}
              onSearch={handleOnSearch}
              {...restSearchConfig}
              // renderSearchSuggestion={renderSuggestionFilter}
            />
          )}
        </Inline>
      </Padbox>

      {shouldShowFiltering && controlsState[ControlTypes.filters].isActive && (
        <FiltersContainer paddingSize={SpaceSizes.md}>
          <Filters
            fields={filteringFields}
            isLoading={isDataLoading}
            state={filteringStoreState}
            onApply={handleApplyFilter}
            onCancel={onCancelLoading}
            onClose={handleCloseFilter}
            {...restFilteringConfig}
          />
        </FiltersContainer>
      )}
    </Stack>
  );
};

ControlsModule.propTypes = ControlsConfigPropType;

export default ControlsModule;
