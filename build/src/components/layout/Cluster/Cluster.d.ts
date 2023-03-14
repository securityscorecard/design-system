import React from 'react';
import { ReactComponentLike } from 'prop-types';
import { Property } from 'csstype';
import { SpaceSize } from '../../../theme/space.types';
interface ClusterWrapperProps {
    $overflow: 'hidden' | 'visible';
}
interface ClusterParentProps {
    $gap?: SpaceSize;
    $align?: Property.AlignItems;
    $justify?: Property.JustifyContent;
    className?: string;
}
export interface ClusterProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Whitespace around each child of the Inline
     */
    gap?: ClusterParentProps['$gap'];
    /**
     * Horizontal alignment of elements inside Inline
     */
    justify?: ClusterParentProps['$justify'];
    /**
     * Vertical alignment of elements inside Inline
     */
    align?: ClusterParentProps['$align'];
    /**
     * Tag or component reference for wrapper element
     */
    wrapperEl?: ReactComponentLike;
    /**
     * Overflow type of the wrapper element
     */
    wrapperOverflow?: ClusterWrapperProps['$overflow'];
    /**
     * Tag or component reference for parent element
     */
    parentEl?: ReactComponentLike;
    className?: string;
}
declare const Cluster: React.FC<ClusterProps>;
export default Cluster;
