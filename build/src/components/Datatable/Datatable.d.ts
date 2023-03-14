import React from 'react';
import { DatatableProps } from './Datatable.types';
declare function Datatable<D extends Record<string, unknown>>({ id, data, dataSize, columns, dataPrimaryKey, onCancelLoading, isDataLoading, onDataFetch, batchActions, isControlsEnabled, isBatchModuleEnabled, controlsConfig, tableConfig, resetSelectionFn, }: DatatableProps<D>): React.ReactElement;
declare namespace Datatable {
    var propTypes: {
        data: any;
        dataSize: any;
        columns: any;
        isDataLoading: any;
        batchActions: any;
        dataPrimaryKey: any;
        isControlsEnabled: any;
        controlsConfig: any;
        tableConfig: any;
        pageButtonsCount: any;
        resetSelectionFn: any;
        onDataFetch: any;
        onCancelLoading: any;
    };
    var displayName: string;
}
export default Datatable;
