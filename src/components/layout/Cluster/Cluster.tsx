import type { ReactComponentLike } from 'prop-types';
import type { Property } from 'csstype';
import type { FC, HTMLAttributes } from 'react';
import type { SpaceSize } from '../../../theme/space.types';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import cls from 'classnames';

import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import {
  AlignItemsPropType,
  JustifyContentPropType,
} from '../../../types/flex.types';
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

const Cluster: FC<ClusterProps> = ({
  children,
  gap,
  align,
  justify,
  parentEl,
  wrapperEl,
  wrapperOverflow = 'hidden',
  ...props
}) => (
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

Cluster.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  align: AlignItemsPropType,
  justify: JustifyContentPropType,
  wrapperEl: PropTypes.elementType,
  parentEl: PropTypes.elementType,
  className: PropTypes.string,
};

Cluster.defaultProps = {
  gap: SpaceSizes.none,
};

export default Cluster;
