import styled from 'styled-components';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { getSpace, pxToRem } from '../../../utils';
import { SpaceSize } from '../../../theme/space.types';
import { SpaceSizes } from '../../../theme/space.enums';
import { CLX_LAYOUT } from '../../../theme/constants';

export interface CenterProps {
  /**
   * Maximal content width
   */
  maxWidth?: number;
  /**
   * Gutters around content. Gutters are not counted in maximal content width.
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
  .attrs<CenterProps>((props) => ({
    ...props,
    gutters: props.gutters ?? SpaceSizes.none,
    areChildrenCentered: props.areChildrenCentered ?? false,
    isTextCentered: props.isTextCentered ?? false,
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

export default Center;
