import React from 'react';
import { ReactComponentLike } from 'prop-types';
import { Property } from 'csstype';
import { SpaceSize } from '../../../theme/space.types';
interface GridWrapperProps {
    $overflow: 'hidden' | 'visible';
}
interface GridParentProps {
    $gap?: SpaceSize;
    $align?: Property.AlignItems;
    $cols?: number;
}
export interface GridProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Whitespace around each child of the Inline
     */
    gap?: GridParentProps['$gap'];
    /**
     * Number of columns in the grid
     */
    cols?: GridParentProps['$cols'];
    /**
     * Vertical alignment of elements inside Inline
     */
    align?: GridParentProps['$align'];
    /**
     * Tag or component reference for wrapper element
     */
    wrapperEl?: ReactComponentLike;
    /**
     * Overflow type of the wrapper element
     */
    wrapperOverflow?: GridWrapperProps['$overflow'];
    /**
     * Tag or component reference for parent element
     */
    parentEl?: ReactComponentLike;
    className?: string;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
