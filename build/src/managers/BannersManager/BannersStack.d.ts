import React from 'react';
import type { BannersStackProps } from './types';
declare const BannersStack: {
    ({ initialState }: BannersStackProps): React.FunctionComponentElement<{
        onClose: () => void;
        __hasPagination: boolean;
        __onNext: () => void;
        __onPrev: () => void;
        __isFirst: boolean;
        __isLast: boolean;
        __current: number;
        __total: any;
    }>;
    displayName: string;
};
export default BannersStack;
