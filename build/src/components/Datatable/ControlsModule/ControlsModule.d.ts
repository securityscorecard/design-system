import React from 'react';
import { ControlsModuleProps } from './ControlsModule.types';
declare function ControlsModule<D extends Record<string, unknown>>({ hasSearch, searchConfig, hasFiltering, filteringConfig, defaultIsFilteringOpen, defaultIsFilteringApplied, hasColumnsControls, defaultIsColumnsControlsOpen, defaultIsColumnsControlsApplied, isDataLoading, onCancelLoading, onControlToggle, }: ControlsModuleProps<D>): React.ReactElement;
declare namespace ControlsModule {
    var propTypes: {
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
    var displayName: string;
}
export default ControlsModule;
