import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../../../utils/helpers';
import { FlexContainer } from '../../../../FlexContainer';
import { PaginationItemProps } from './Pagination.types';

const StyledPaginationComponent = styled.button<{
  $isShrinked: boolean;
  $isCurrent: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${pxToRem(40)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(5, 6)};
  margin: ${pxToRem(0, 4)};
  background: none;
  border: 1px solid transparent;
  border-radius: ${getBorderRadius};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('lg')};
  color: ${getColor('graphite4B')};
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    border-color: ${getColor('graphiteHB')};
    background-color: ${getColor('graphite5H')};
  }

  &:disabled {
    color: ${getColor('graphiteB')};
    cursor: default;
  }

  ${({ $isShrinked }) =>
    $isShrinked &&
    css`
      min-width: ${pxToRem(32)};
    `};

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      border-color: ${getColor('graphiteHB')};
      background-color: ${getColor('graphite2H')};
      font-size: ${getFontSize('lg')};
      font-weight: ${getFontWeight('bold')};
      cursor: default;
    `};
`;

export const PaginationItem: React.FC<PaginationItemProps> = ({
  children,
  isDisabled,
  isCurrent,
  isShrinked,
  onClick,
  ...props
}) => {
  const handleOnClick = () => {
    if (isCurrent) {
      return;
    }

    onClick();
  };
  return (
    <StyledPaginationComponent
      $isCurrent={isCurrent}
      $isShrinked={isShrinked}
      disabled={isDisabled}
      type="button"
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </StyledPaginationComponent>
  );
};

PaginationItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isShrinked: PropTypes.bool,
};

export const PaginationItemElipsis = styled(FlexContainer).attrs(() => ({
  children: '...',
  alignItems: 'center',
  justifyContent: 'center',
}))`
  width: ${pxToRem(40)};
  height: ${pxToRem(32)};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('lg')};
  color: ${getColor('graphiteB')};
  margin: ${pxToRem(0, 4)};
`;
