import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import {
  getBorderRadius,
  getColor,
  getDepth,
  getFontFamily,
  getFontSize,
  getLineHeight,
} from '../../utils/helpers';
import { useOuterClick } from '../useOuterCallback';
import { DropdownPaneProps, DropdownPaneStyles } from './DropdownPane.types';

export const StyledDropdownPane = styled.div<DropdownPaneStyles>`
  position: fixed;
  background: ${getColor('graphite5H')};
  color: ${getColor('graphite4B')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  z-index: ${getDepth('dropdown')};
  border: 1px solid ${getColor('graphiteB')};
  border-radius: ${getBorderRadius};

  ${({ isElevated }) =>
    isElevated && `box-shadow: 0 2px 6px 0 ${transparentize(0.85, '#000')}`};
  ${({ width }) => width && `width: ${width}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ right }) => right && `right: ${right}px`};
  ${({ top }) => top && `top: ${top}px`};
  ${({ bottom }) => bottom && `bottom: ${bottom}px`};
`;

const DropdownPane: React.FC<DropdownPaneProps> = ({
  children,
  onClickOut,
  ...style
}) => {
  const dropdownPaneRef = useOuterClick(onClickOut);

  return (
    <StyledDropdownPane ref={dropdownPaneRef} {...style}>
      {children}
    </StyledDropdownPane>
  );
};

DropdownPane.propTypes = {
  onClickOut: PropTypes.func.isRequired,
};

export default DropdownPane;
