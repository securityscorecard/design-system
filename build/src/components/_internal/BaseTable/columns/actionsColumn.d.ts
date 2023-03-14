import React from 'react';
import { CellProps } from 'react-table';
export declare const actionsColumn: {
    id: string;
    sticky: string;
    width: number;
    disableSortBy: boolean;
    cellType: "actions";
    Cell: (props: CellProps<Record<string, unknown>>) => React.ReactElement;
};
