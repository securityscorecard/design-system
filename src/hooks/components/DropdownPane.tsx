import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import {
  getBorderRadius,
  getColor,
  getFontFamily,
  getFontSize,
  getLineHeight,
} from '../../utils';
import { useOuterClick } from '../useOuterCallback';
import { DropdownPaneProps, DropdownPaneStyles } from './DropdownPane.types';

export const StyledDropdownPane = styled.div<DropdownPaneStyles>`
  position: absolute;
  background: ${getColor('graphite5H')};
  color: ${getColor('graphite4B')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  border: 1px solid ${getColor('graphiteB')};
  border-radius: ${getBorderRadius};

  ${({ $isElevated }) =>
    $isElevated && `box-shadow: 0 2px 6px 0 ${transparentize(0.85, '#000')}`};
`;

const DropdownPane: React.FC<DropdownPaneProps> = ({
  children,
  onClickOut,
  isElevated = false,
  ...props
}) => {
  const dropdownPaneRef = useOuterClick(onClickOut);

  return (
    <StyledDropdownPane
      ref={dropdownPaneRef}
      $isElevated={isElevated}
      {...props}
    >
      {children}
    </StyledDropdownPane>
  );
};

DropdownPane.propTypes = {
  onClickOut: PropTypes.func.isRequired,
  isElevated: PropTypes.bool,
};

export default DropdownPane;
