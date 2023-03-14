import type { IdType } from 'react-table';
import { SearchProps } from '../components/Search/Search.types';
import { FiltersProps } from '../../Filters/Filters.types';
import { ControlTypes } from './ControlsModule.enums';
export declare type Controls = typeof ControlTypes[keyof typeof ControlTypes];
export declare type ControlState = {
    isActive: boolean;
    isApplied: boolean;
};
export declare type ControlsLocalState = Record<Controls, ControlState>;
export interface ControlsConfig<D> {
    hasSearch: boolean;
    searchConfig: Partial<SearchProps>;
    hasFiltering: boolean;
    filteringConfig: Partial<FiltersProps>;
    defaultIsFilteringOpen: boolean;
    defaultIsFilteringApplied: boolean;
    hasColumnsControls: boolean;
    defaultIsColumnsControlsOpen: boolean;
    defaultIsColumnsControlsApplied: boolean;
    onColumnOrderChange: (columnOrder: IdType<D>[]) => void;
    onColumnVisibilityChange: (hiddenColumns: IdType<D>[]) => void;
    onControlToggle: (control: Controls, isActive: boolean) => void;
    onCancelLoading: () => void;
    isDataLoading: boolean;
}
export declare const ControlsConfigPropType: {
    hasSearch: any;
    searchConfig: any;
    hasFiltering: any;
    defaultIsFilteringOpen: any;
    defaultIsFilteringApplied: any;
    filteringConfig: any;
    isDataLoading: any;
    onCancelLoading: any;
    onControlToggle: any;
    hasColumnsControls: any;
    defaultIsColumnsControlsOpen: any;
    defaultIsColumnsControlsApplied: any;
};
export declare type ControlsModuleProps<D> = Omit<ControlsConfig<D>, 'onColumnOrderChange'>;
