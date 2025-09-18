/* eslint-disable filenames/match-exported */
import styled, { css } from 'styled-components';
import { identity, memoizeWith, pipe } from 'ramda';

import { getFormStyle, pxToRem } from '../../../utils';
import { LinkActiveStyles, LinkBaseStyles, LinkHoverStyles } from '../BaseLink';

const getRemToggleSize = memoizeWith(
  identity,
  pipe(getFormStyle('toggleSize'), pxToRem),
);

export const BaseTableContainer = styled.div`
  width: 100%;
  transform: scale(1, -1);
  overflow-x: auto;

  &::-webkit-scrollbar {
    box-sizing: content-box;
    outline: 1px solid var(--sscds-color-border-default);
    height: ${pxToRem(20)};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: var(--sscds-radii-rounded);
    background-color: var(--sscds-color-primary-9);
    border: 6px solid var(--sscds-color-neutral-0);
  }
  &::-webkit-scrollbar-track-piece {
    border-radius: var(--sscds-radii-rounded);
    background-color: var(--sscds-color-neutral-4);
    border: 6px solid var(--sscds-color-neutral-0);
  }
`;

const DsLinkCell = css`
  --sscds-link-color: var(--sscds-color-link-default);
  --sscds-link-color-hover: var(--sscds-color-link-hover);
  --sscds-link-color-active: var(--sscds-color-link-active);

  ${LinkBaseStyles};

  &:hover {
    ${LinkHoverStyles};
  }

  &:active {
    ${LinkActiveStyles};
  }

  &.is-discrete {
    --sscds-link-color: var(--sscds-color-neutral-13);
    --sscds-link-color-hover: var(--sscds-color-neutral-11);
    --sscds-link-color-active: var(--sscds-color-neutral-13);

    font-weight: var(--sscds-font-weight-body-default);
  }
`;

export const StyledBaseTable = styled.table`
  width: 100%;
  transform: scale(1, -1);

  .ds-table-row.is-selected {
    .ds-table-cell {
      background: var(--sscds-color-background-selectable-active);
    }
  }

  .ds-table-cell {
    display: flex;
    align-items: flex-start;
    font-family: var(--sscds-font-family-body);
    font-size: var(--sscds-font-size-body-md);
    font-weight: var(--sscds-font-weight-body-default);
    line-height: ${pxToRem(24)};
    color: var(--sscds-color-text-default);
    background: var(--sscds-color-neutral-0);
    padding: ${pxToRem(12, 8)};

    &.is-sticky {
      justify-content: center;
      flex: 0 0 auto;
      position: sticky;
      z-index: 4;

      &.is-sticky-left {
        left: 0;
      }
      &.is-sticky-right {
        right: 0;
      }
    }

    &.is-odd {
      background: var(--sscds-color-neutral-1);
    }
    .ds-table-cell-link {
      ${DsLinkCell};
    }

    .ds-table-cell-multivalue {
      display: flex;
      flex-wrap: wrap;
      margin: ${pxToRem(-2)};

      .ds-multivalue-pill {
        align-items: center;
        padding: ${pxToRem(0, 8)};
        background: var(--sscds-color-background-pill-gray-default);
        border-radius: var(--sscds-radii-rounded);
        white-space: nowrap;
        margin: ${pxToRem(2)};

        &.ds-table-cell-link {
          text-decoration: none;
          color: var(--sscds-color-text-default);

          &:hover,
          &:active {
            background-color: var(--sscds-color-background-selectable-active);
            color: var(--sscds-color-text-default);
          }
        }
      }
    }

    .ds-table-cell-null {
      color: var(--sscds-color-text-subtle);
    }
  }

  .ds-table-checkbox {
    display: flex;
    position: relative;

    .ds-table-checkbox-input {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;

      &:checked + .ds-table-checkbox-mark {
        background: ${getFormStyle('activeBorderColor')};
        border-color: ${getFormStyle('activeBorderColor')};

        .ds-table-checkbox-icon {
          display: block;
        }
      }
      &:disabled + .ds-table-checkbox-mark {
        border-color: ${getFormStyle('disabledBorderColor')};
        background: ${getFormStyle('disabledBgColor')};
      }

      &.is-indeterminate + .ds-table-checkbox-mark {
        background: ${getFormStyle('activeBorderColor')};
        border-color: ${getFormStyle('activeBorderColor')};

        .ds-table-checkbox-icon {
          display: block;
        }
      }

      &:focus-visible + .ds-table-checkbox-mark {
        outline: 3px solid var(--sscds-focus-indicator-color);
        outline-offset: 1px;
      }
    }

    .ds-table-checkbox-mark {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 ${getRemToggleSize};
      height: ${getRemToggleSize};
      width: ${getRemToggleSize};
      border: 1px solid ${getFormStyle('borderColor')};
      border-radius: var(--sscds-radii-default);
      background: var(--sscds-color-neutral-0);
      padding: ${pxToRem(3)};

      .ds-table-checkbox-icon {
        display: none;
        font-size: var(--sscds-font-size-body-sm);
        width: 1em;
        color: ${getFormStyle('activeColor')};
      }
    }

    .ds-table-checkbox-label {
      position: relative;
      z-index: 1;
      margin-bottom: 0;
      min-height: ${getRemToggleSize};
      line-height: ${getRemToggleSize};
      padding-left: ${getRemToggleSize};
      margin-left: ${({ theme }) => `-${getRemToggleSize({ theme })}`};
    }
  }

  &.has-exclusive-selection .ds-table-checkbox {
    .ds-table-checkbox-input {
      &:checked + .ds-table-checkbox-mark {
        background: var(--sscds-color-neutral-0);
        border-color: ${getFormStyle('borderColor')};

        .ds-table-checkbox-icon {
          display: none;
        }
      }
    }

    .ds-table-checkbox-mark {
      border-color: ${getFormStyle('activeBorderColor')};
      background: ${getFormStyle('activeBorderColor')};

      .ds-table-checkbox-icon {
        display: block;
      }
    }
  }
`;

export const BaseTableAndLoadingOverlayContainer = styled.div`
  position: relative;
`;
