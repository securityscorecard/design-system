import styled, { css } from 'styled-components';

import { pxToRem } from '../../utils';
import { Padbox } from '../layout';
import { PaginationItemProps } from './Pagination.types';

const StyledPaginationComponent = styled.button<{
  $isShrinked: boolean;
  $isCurrent: boolean;
}>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-width: ${pxToRem(40)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(5, 6)};
  margin: ${pxToRem(0, 4)};
  background: none;
  border: 1px solid transparent;
  border-radius: var(--sscds-radii-button);
  font-size: var(--sscds-font-size-elementlabel-sm);
  line-height: var(--sscds-font-lineheight-elementlabel);
  color: var(--sscds-color-text-default);
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &:disabled {
    color: var(--sscds-color-text-disabled);
    cursor: default;
  }

  ${({ $isShrinked }) =>
    $isShrinked &&
    css`
      min-width: ${pxToRem(32)};
    `};

  ${({ $isCurrent }) =>
    $isCurrent
      ? css`
          border-color: var(--sscds-color-border-surface-dynamic);
          background-color: var(--sscds-color-background-surface-dynamic);
          font-size: var(--sscds-font-size-elementlabel-md);
          font-weight: var(--sscds-font-weight-elementlabel-strong);
          cursor: default;
        `
      : css`
          &:hover {
            border-color: var(--sscds-color-border-surface-hover);
            background-color: var(--sscds-color-background-surface-hover);
          }
        `};
`;

export const PaginationItem = ({
  children,
  isDisabled,
  isCurrent,
  isShrinked,
  onClick,
  key,
  ...props
}: PaginationItemProps) => {
  const handleOnClick = () => {
    if (isCurrent) {
      return;
    }

    onClick();
  };
  return (
    <StyledPaginationComponent
      key={key}
      $isCurrent={isCurrent}
      $isShrinked={isShrinked}
      data-testid="pagination-item"
      disabled={isDisabled}
      type="button"
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </StyledPaginationComponent>
  );
};

export const PaginationItemElipsis = styled(Padbox).attrs(() => ({
  children: <span aria-hidden="true">...</span>,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(40)};
  height: ${pxToRem(32)};
  font-size: var(--sscds-font-size-elementlabel-sm);
  line-height: var(--sscds-font-lineheight-elementlabel);
  color: var(--sscds-color-text-subtle);
  margin: ${pxToRem(0, 4)};
`;
