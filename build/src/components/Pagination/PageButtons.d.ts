import React from 'react';
import { PageButtonsProps } from './Pagination.types';
export declare const calculatePagePositions: (currentPage: number, pageCount: number, positionsCount: number) => {
    showRightEllipsis: boolean;
    showLeftEllipsis: boolean;
    pages: number[];
};
declare const PageButtons: React.FC<PageButtonsProps>;
export default PageButtons;
