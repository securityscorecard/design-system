import { BatchActionArgs } from '../Datatable.types';
import { Action } from '../types/Action.types';
import { ActionKinds } from '../../../types/action.types';
export declare const subactionsMock: ActionKinds<BatchActionArgs>[];
export declare const actionsMock: Action<BatchActionArgs>[];
export declare const tableActionsMock: Action<string[]>[];
export declare const datatableRowActions: {
    label: string;
    name: string;
    onClick: import("@storybook/addon-actions").HandlerFunction;
}[];
export declare const datatableBatchActions: ({
    label: JSX.Element;
    name: string;
    onClick: import("@storybook/addon-actions").HandlerFunction;
    subActions?: undefined;
} | {
    label: string;
    name: string;
    subActions: {
        label: string;
        name: string;
        onClick: import("@storybook/addon-actions").HandlerFunction;
    }[];
    onClick?: undefined;
})[];
