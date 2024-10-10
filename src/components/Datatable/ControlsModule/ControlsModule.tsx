import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { all, isEmpty, map, mergeDeepRight, omit, pipe, zipObj } from 'ramda';
import { isNonEmptyArray, isNotNilOrEmpty } from 'ramda-adjunct';

import { getColor } from '../../../utils';
import { Search } from '../components/Search';
import { Filters } from '../../Filters';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ColumnsControls } from '../components/ColumnsControls';
import { ControlButton } from '../components/ControlButton';
import { DatatableStore } from '../Datatable.store';
import {
  ControlState,
  Controls,
  ControlsLocalState,
  ControlsModuleProps,
} from './ControlsModule.types';
import { Filter } from '../../Filters/Filters.types';
import { ControlTypes } from './ControlsModule.enums';
import { SpaceSizes } from '../../../theme';
import { Inline, Padbox } from '../../layout';

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

const prepareControlState: (providedState: [boolean, boolean]) => ControlState =
  zipObj(['isActive', 'isApplied']);

const defaultControlState: ControlState = {
  isActive: false,
  isApplied: false,
};

const mergeControlState = mergeDeepRight(defaultControlState);

// TODO: commented part will be enabled when functionality is implemented
function ControlsModule<D extends Record<string, unknown>>({
  hasSearch,
  searchConfig,
  hasFiltering,
  filteringConfig,
  defaultIsFilteringOpen,
  defaultIsFilteringApplied,
  hasColumnsControls,
  defaultIsColumnsControlsOpen,
  defaultIsColumnsControlsApplied,
  isDataLoading,
  onCancelLoading,
  onControlToggle,
}: ControlsModuleProps<D>) {
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
        defaultIsColumnsControlsOpen,
        defaultIsColumnsControlsApplied,
      ]),
    ),
  });
  const [appliedFilters, setAppliedFilters] = useState(0);

  useEffect(() => {
    DatatableStore.update((s) => {
      s.query = defaultSearchValue;
      s.filters = filteringState;
      s.hasAppliedFilters = controlsState[ControlTypes.filters].isApplied;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isToolbarEnabled = hasFiltering || hasColumnsControls;

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

    setAppliedFilters(appliedfilters.length);
  };

  const handleOnSearch = (query: string): void => {
    onSearch(query);

    DatatableStore.update((s) => {
      s.pageIndex = 0;
      s.query = query;
      s.isCanceled = false;
      s.shouldResetSelectedRows = true;
    });
  };

  const handleOnSearchClear = (): void => {
    onSearchClear();

    DatatableStore.update((s) => {
      s.pageIndex = 0;
      s.query = '';
    });
  };
  // trigger search on mount if defaultValue is provided
  useEffect(() => {
    if (isNotNilOrEmpty(defaultSearchValue)) {
      handleOnSearch(defaultSearchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({ columnOrder: s.columnOrder, hiddenColumns: s.hiddenColumns }),
      ({ columnOrder, hiddenColumns }) => {
        if (all(isEmpty, [columnOrder, hiddenColumns])) {
          applyControlStateChange(ControlTypes.columns, {
            isApplied: false,
          });
        }
      },
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Padbox paddingSize={SpaceSizes.sm}>
        <Inline align="center" gap={SpaceSizes.lg} stretch="end">
          {isToolbarEnabled && (
            <Inline gap="sm">
              {hasColumnsControls && (
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
                  {(props) => (
                    <ControlButton
                      iconName={SSCIconNames.columns3}
                      label="Toggle columns"
                      onClick={() =>
                        handleControlOnClick(
                          ControlTypes.columns,
                          controlsState[ControlTypes.columns].isActive,
                        )
                      }
                      {...props}
                    />
                  )}
                </ColumnsControls>
              )}
              {shouldShowFiltering && (
                <ControlButton
                  appliedFilters={appliedFilters}
                  iconName={SSCIconNames.filter}
                  // isActive={controlsState[ControlTypes.filters].isActive}
                  label="Filters"
                  onClick={() =>
                    handleControlOnClick(
                      ControlTypes.filters,
                      controlsState[ControlTypes.filters].isActive,
                    )
                  }
                />
              )}
            </Inline>
          )}

          {hasSearch && (
            <Search
              defaultValue={defaultSearchValue}
              onClear={handleOnSearchClear}
              onSearch={handleOnSearch}
              {...restSearchConfig}
              style={{ height: '2.25rem' }}
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
    </div>
  );
}

ControlsModule.displayName = 'ControlsModule';

export default ControlsModule;
