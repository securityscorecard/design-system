import type { Property } from 'csstype';
import type { ComponentPropsWithRef } from 'react';
import type { ResponsiveSpaceSize } from '../../../types/responsive.types';

import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';

import { parseResponsiveStyles } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { CLX_LAYOUT } from '../../../theme/constants';
import { gapParser } from '../../../utils/parsers';

interface ClusterRootProps {
  $gap?: ResponsiveSpaceSize;
  $align?: Property.AlignItems;
  $overflow?: Property.Overflow;
  $justify?: Property.JustifyContent;
  className?: string;
}

export interface ClusterProps extends ComponentPropsWithRef<'div'> {
  /**
   * Whitespace around each child of the Inline
   */
  gap?: ClusterRootProps['$gap'];
  /**
   * Horizontal alignment of elements inside Inline
   */
  justify?: ClusterRootProps['$justify'];
  /**
   * Vertical alignment of elements inside Inline
   */
  align?: ClusterRootProps['$align'];
  className?: string;
}

const ClusterRoot = styled.div<ClusterRootProps>(({ $justify, $align }) => {
  return css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: ${$justify};
    align-items: ${$align};
    ${parseResponsiveStyles('gap', '$gap', gapParser)};
  `;
});

const Cluster = forwardRef<HTMLDivElement, ClusterProps>(
  ({ children, gap, align, justify, ...props }, ref) => (
    <ClusterRoot
      ref={ref}
      $align={align}
      $gap={gap}
      $justify={justify}
      className={cls(CLX_LAYOUT, props?.className)}
      {...props}
    >
      {children}
    </ClusterRoot>
  ),
);

Cluster.defaultProps = {
  gap: SpaceSizes.none,
};

export default Cluster;
