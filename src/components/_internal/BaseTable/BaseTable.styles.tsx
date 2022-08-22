/* eslint-disable filenames/match-exported */
import styled, { css } from 'styled-components';
import { identity, memoizeWith, pipe } from 'ramda';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getRadii,
  getToken,
  pxToRem,
} from '../../../utils';
import {
  LinkActiveStyles,
  LinkBaseStyles,
  LinkFocusStyles,
  LinkHoverStyles,
} from '../BaseLink';

const getRemToggleSize = memoizeWith(
  identity,
  pipe(getFormStyle('toggleSize'), pxToRem),
);

export const BaseTableContainer = styled.div`
  width: 100%;
  transform: scale(1, -1);
  overflow-x: auto;

  &::-webkit-scrollbar {
    border-bottom: 1px solid ${getColor('neutral.400')};
    appearance: none;
    height: ${pxToRem(12)};
  }
  &::-webkit-scrollbar-thumb {
    background: content-box ${getColor('neutral.500')};
  }
`;

const DsLinkCell = css`
  ${LinkBaseStyles};

  &:hover {
    ${LinkHoverStyles};
  }

  &:focus-visible {
    ${LinkFocusStyles};
  }

  &:active {
    ${LinkActiveStyles};
  }

  &.is-discrete {
    font-weight: ${getFontWeight('regular')};
    color: ${getToken(`link-color-text-secondary`)};

    &:hover {
      color: ${getToken(`link-color-text-secondary-hover`)};
    }
    &:focus-visible {
      color: ${getToken(`link-color-text-secondary-hover`)};
      background-color: ${getToken(`link-color-background-secondary-focus`)};
    }
    &:active {
      color: ${getToken(`link-color-text-secondary-active`)};
    }
  }
`;

export const StyledBaseTable = styled.table.attrs({ $color: 'primary' })`
  width: 100%;
  transform: scale(1, -1);

  .ds-table-row.is-selected {
    .ds-table-cell {
      background: ${getColor('primary.50')};
    }
  }

  .ds-table-cell {
    display: flex;
    align-items: flex-start;
    font-family: ${getFontFamily('base')};
    font-size: ${getFontSize('md')};
    font-weight: ${getFontWeight('regular')};
    line-height: ${pxToRem(24)};
    color: ${getColor('neutral.900')};
    background: ${getColor('neutral.0')};
    padding: ${pxToRem(12, 8)};

    &:focus {
      outline: none;
    }

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
      background: #fcfcfc;
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
        background: ${getColor('neutral.200')};
        border-radius: ${getRadii('default')};
        white-space: nowrap;
        margin: ${pxToRem(2)};

        &.ds-table-cell-link {
          text-decoration: none;
          color: ${getColor('neutral.900')};

          &:hover,
          &:focus-visible,
          &:active {
            background-color: ${getColor('primary.50')};
            color: ${getColor('neutral.900')};
          }
        }
      }
    }

    .ds-table-cell-null {
      color: ${getColor('neutral.700')};
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
    }

    .ds-table-checkbox-mark {
      flex: 0 0 ${getRemToggleSize};
      height: ${getRemToggleSize};
      width: ${getRemToggleSize};
      border: ${getFormStyle('borderWidth')} solid
        ${getFormStyle('borderColor')};
      border-radius: ${getRadii('default')};
      background: ${getColor('neutral.0')};
      padding: ${pxToRem(3)};

      .ds-table-checkbox-icon {
        display: none;
        font-size: ${pxToRem(12)};
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
        background: ${getColor('neutral.0')};
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
