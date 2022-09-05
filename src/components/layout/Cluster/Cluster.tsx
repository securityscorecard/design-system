import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { Property } from 'csstype';
import { prop } from 'ramda';

import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import {
  AlignItemsPropType,
  JustifyContentPropType,
} from '../../../types/flex.types';

interface ClusterWrapperProps {
  $overflow: 'hidden' | 'visible';
}
interface ClusterParentProps {
  $gap?: SpaceSize;
  $align?: Property.AlignItems;
  $justify?: Property.JustifyContent;
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
}

const ClusterWrapper = styled.div<ClusterWrapperProps>`
  overflow: ${prop('$overflow')};
`;
const ClusterParent = styled.div<ClusterParentProps>(
  ({ $gap, $justify, $align, theme }) => {
    const gapSize = getSpace($gap, { theme });

    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: ${$justify};
      align-items: ${$align};
      margin: calc(${gapSize} / -2);

      & > * {
        margin: calc(${gapSize} / 2);
      }
    `;
  },
);

const Cluster: React.FC<ClusterProps> = ({
  children,
  gap,
  align,
  justify,
  parentEl,
  wrapperEl,
  wrapperOverflow = 'hidden',
  ...props
}) => (
  <ClusterWrapper $overflow={wrapperOverflow} as={wrapperEl}>
    <ClusterParent
      $align={align}
      $gap={gap}
      $justify={justify}
      as={parentEl}
      {...props}
    >
      {children}
    </ClusterParent>
  </ClusterWrapper>
);

Cluster.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  align: AlignItemsPropType,
  justify: JustifyContentPropType,
  wrapperEl: PropTypes.elementType,
  parentEl: PropTypes.elementType,
};

Cluster.defaultProps = {
  gap: SpaceSizes.none,
};

export default Cluster;
