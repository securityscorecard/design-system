import React from 'react';
import { DSContextValue, DSProviderProps } from './DSProvider.types';
export declare const defaultDSContext: {
    portalsContainerId: string;
    hasIncludedGlobalStyles: boolean;
    debugMode: boolean;
};
export declare const DSContext: React.Context<DSContextValue>;
declare const DSProvider: React.FC<DSProviderProps>;
export default DSProvider;
