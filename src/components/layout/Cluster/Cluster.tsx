import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Property } from 'csstype';
import { prop } from 'ramda';
import cls from 'classnames';

import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { ReactComponentLike } from '../../../types/utils.types';
import { CLX_LAYOUT } from '../../../theme/constants';

interface ClusterWrapperProps {
  $overflow: 'hidden' | 'visible';
}
interface ClusterParentProps {
  $gap?: SpaceSize;
  $align?: Property.AlignItems;
  $justify?: Property.JustifyContent;
  className?: string;
}

export interface ClusterProps extends HTMLAttributes<HTMLElement> {
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

const Cluster = ({
  children,
  gap,
  align,
  justify,
  parentEl,
  wrapperEl,
  wrapperOverflow = 'hidden',
  ...props
}: ClusterProps) => (
  <ClusterWrapper
    $overflow={wrapperOverflow}
    as={wrapperEl}
    className={cls(CLX_LAYOUT, props?.className)}
  >
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

Cluster.defaultProps = {
  gap: SpaceSizes.none,
};

export default Cluster;
