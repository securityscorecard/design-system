import type { SpaceSize } from '../../../theme/space.types';

import styled from 'styled-components';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { getSpace, pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { CLX_LAYOUT } from '../../../theme/constants';

export interface CenterProps {
  /**
   * Maximal content width
   */
  maxWidth?: number;
  /**
   * Gutters arround content. Gutters are not counted in maximal content width.
   */
  gutters?: SpaceSize;
  /**
   * Centers all children inside component
   */
  areChildrenCentered?: boolean;
  /**
   * Centers text in component
   */
  isTextCentered?: boolean;
  className?: string;
}

const Center = styled.div
  .withConfig<CenterProps>({
    shouldForwardProp: (prop) =>
      !includes(prop, [
        'maxWidth',
        'gutters',
        'areChildrenCentered',
        'isTextCentered',
      ]),
  })
  .attrs((props) => ({
    ...props,
    className: cls(CLX_LAYOUT, props?.className),
  }))<CenterProps>`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth, theme }) =>
    pxToRem(isNotUndefined(maxWidth) ? maxWidth : theme.layout.containerWidth)};
  ${({ gutters, theme }) => {
    const size = getSpace(gutters, { theme });

    return `
      padding-left: ${size};
      padding-right: ${size};
    `;
  }};

  ${({ areChildrenCentered }) =>
    areChildrenCentered &&
    `
    display:flex;
    flex-direction: column;
    align-items: center;
  `};

  ${({ isTextCentered }) => isTextCentered && `text-align: center;`};
`;

Center.defaultProps = {
  gutters: SpaceSizes.none,
  areChildrenCentered: false,
  isTextCentered: false,
};

export default Center;
