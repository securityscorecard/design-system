import styled, { css } from 'styled-components';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import {
  createPaddingSpacing,
  getBorderRadius,
  getColor,
  getDepth,
  getFontSize,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { TooltipPopupProps } from './Tooltip.types';

const bottomPlacement = ({ space, width }) => css`
  &::before {
    left: 0;
    top: ${pxToRem(space * -1)};
    width: ${pxToRem(width)};
    height: ${pxToRem(space)};
  }

  &::after {
    transform: translate(-50%);
    top: -5px;
    left: 50%;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #fff transparent;
  }
`;

const topPlacement = ({ space, width }) => css`
  &::before {
    left: 0;
    bottom: ${pxToRem(space * -1)};
    width: ${pxToRem(width)};
    height: ${pxToRem(space)};
  }

  &::after {
    transform: translate(-50%);
    bottom: -5px;
    left: 50%;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
  }
`;

const leftPlacement = ({ space }) => css`
  transform: translateY(50%);

  &::before {
    top: 0;
    right: ${pxToRem(space * -1)};
    width: ${pxToRem(space)};
    height: 100%;
  }

  &::after {
    transform: translateY(-50%);
    top: 50%;
    right: -5px;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent ${getColor('graphite5H')};
  }
`;

const rightPlacement = ({ space }) => css`
  transform: translateY(50%);

  &::before {
    top: 0;
    left: ${pxToRem(space * -1)};
    width: ${pxToRem(space)};
    height: 100%;
  }

  &::after {
    transform: translateY(-50%);
    top: 50%;
    left: -5px;
    border-width: 5px 5px 5px 0;
    border-color: transparent #fff transparent transparent;
  }
`;

const tooltipPlacements = {
  [PortalPlacements.bottom]: bottomPlacement,
  [PortalPlacements.top]: topPlacement,
  [PortalPlacements.left]: leftPlacement,
  [PortalPlacements.right]: rightPlacement,
};

const TooltipPopup = styled.div<TooltipPopupProps>`
  position: fixed;
  ${createPaddingSpacing(0.8)};
  background: ${getColor('graphite5H')};
  color: ${getColor('graphite4B')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  z-index: ${getDepth('tooltip')};
  border-radius: ${getBorderRadius};

  ${({ width }) => width && `width: ${width}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ right }) => right && `right: ${right}px`};
  ${({ top }) => top && `top: ${top}px`};
  ${({ bottom }) => bottom && `bottom: ${bottom}px`};

  &::before {
    content: '';
    position: absolute;
    ${({ width }) => width && `width: ${width}px`};
    ${({ space }) => space && `height: ${space}px`};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    transform: translate(-50%);
  }

  ${({ placement, space, width }) =>
    tooltipPlacements[placement]({ space, width })};
`;

export default TooltipPopup;
