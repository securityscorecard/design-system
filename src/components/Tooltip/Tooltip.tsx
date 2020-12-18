import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isFalsy } from 'ramda-adjunct';

import {
  createPaddingSpacing,
  getBorderRadius,
  getColor,
  getDepth,
  pxToRem,
} from '../../utils/helpers';
import { Placements, TooltipProps } from './Tooltip.types';
import { TooltipPlacements } from './Tooltip.enums';

const bottomPlacement = css`
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);

  &::before {
    transform: translate(-50%);
    top: -5px;
    left: 50%;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent ${getColor('graphite5H')} transparent;
  }
`;

const topPlacement = css`
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);

  &::before {
    transform: translate(-50%);
    bottom: -5px;
    left: 50%;
    border-width: 5px 5px 0 5px;
    border-color: ${getColor('graphite5H')} transparent transparent transparent;
  }
`;

const leftPlacement = css`
  right: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);

  &::before {
    transform: translateY(-50%);
    top: 50%;
    right: -5px;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent ${getColor('graphite5H')};
  }
`;

const rightPlacement = css`
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);

  &::before {
    transform: translateY(-50%);
    top: 50%;
    left: -5px;
    border-width: 5px 5px 5px 0;
    border-color: transparent ${getColor('graphite5H')} transparent transparent;
  }
`;

const tooltipPlacements = {
  [TooltipPlacements.bottom]: bottomPlacement,
  [TooltipPlacements.top]: topPlacement,
  [TooltipPlacements.left]: leftPlacement,
  [TooltipPlacements.right]: rightPlacement,
};

const Popup = styled.div<{ placement: Placements }>`
  position: absolute;
  z-index: ${getDepth('tooltip')};
  width: ${pxToRem(270)};
  background: ${getColor('graphite5H')};
  ${createPaddingSpacing(0.75)};
  border-radius: ${getBorderRadius};
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  visibility: hidden;
  opacity: 0;
  transition: opacity 500ms linear, visibility 0s linear 500ms;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  ${({ placement }) => tooltipPlacements[placement]};
`;

const Element = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${/* sc-selector */ Popup}, &.hover ${/* sc-selector */ Popup} {
    visibility: visible;
    opacity: 1;
    transition: opacity 500ms linear, visibility 0s linear;
  }
`;

const Tooltip: React.FC<TooltipProps> = ({
  children,
  popup,
  placement = TooltipPlacements.bottom,
  ...props
}) => {
  if (isFalsy(popup)) return <>{children}</>;

  return (
    <Element {...props}>
      {children}
      <Popup placement={placement}>{popup}</Popup>
    </Element>
  );
};

Tooltip.propTypes = {
  popup: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(TooltipPlacements)),
};

export default Tooltip;
