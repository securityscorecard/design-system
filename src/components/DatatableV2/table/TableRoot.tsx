import styled from 'styled-components';

import { getFontSize, pxToRem } from '../../../utils';

const TableRoot = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  transform: scale(1, -1);
  .ds-table {
    width: 100%;
    transform: scale(1, -1);
  }

  .ds-table,
  .ds-table-header,
  .ds-table-body {
    display: grid;
  }
  .ds-table-row {
    display: flex;
  }
  .ds-table-body-row {
    align-items: flex-start;
    justify-content: flex-start;

    &:nth-child(odd) .ds-table-cell {
      background-color: var(--sscds-table-color-zebra);
    }

    &.isSelected .ds-table-cell {
      background-color: var(--sscds-table-color-selection) !important;
    }
  }
  .ds-table-cell {
    display: flex;
    padding: var(--sscds-table-spacing-cell);
    background-color: var(--sscds-table-color-background);
  }

  .ds-table-header-row,
  .ds-table-row:not(:last-of-type) {
    border-bottom: 1px solid var(--sscds-table-color-border);
  }

  .ds-table-header-cell {
    position: relative;
    justify-content: center;
    padding: var(--sscds-table-spacing-cell-header);
    /* height: ${pxToRem(60)}; */

    &:not(:last-of-type) {
      border-right: 1px solid var(--sscds-table-color-border) !important;
    }

    .ds-table-header-cell-title {
      font-weight: var(--sscds-table-typography-weight-header);
      text-overflow: ellipsis;

      &:hover {
        text-overflow: clip;
      }
    }

    .ds-table-header-cell-resize-handler {
      margin: 0;
      border: 0;
      display: inline-block;
      width: 0.25rem;
      background: var(--sscds-table-color-accent);
      cursor: col-resize;
      user-select: none;
      touch-action: none;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
      transition: var(--sscds-table-transition);
    }

    .ds-table-header-cell-sort-button {
      opacity: 0;
      font-size: ${getFontSize('sm')};
    }

    &:hover,
    &:focus-within {
      .ds-table-header-cell-sort-button,
      .ds-table-header-cell-resize-handler {
        opacity: 1;
      }
    }
    &.isSorted .ds-table-header-cell-sort-button {
      opacity: 1;
    }
  }

  .ds-table-body-cell {
    align-items: flex-start;
  }

  .ds-table-cell-display {
    padding: var(--sscds-table-spacing-cell-display);
  }

  .ds-table-settings-panel {
    transform: scale(1, -1);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-left: 1px solid var(--sscds-table-color-border);
    background: white;
    box-shadow: var(--sscds-table-shadow-settings);
    width: 100%;
    max-width: var(--sscds-table-size-settings-width);
  }
  .ds-table-settings-panel-item {
    border: 1px solid var(--sscds-table-color-border);

    &:first-of-type {
      border-top-left-radius: var(--sscds-table-radii-settings-item);
      border-top-right-radius: var(--sscds-table-radii-settings-item);
    }
    &:last-of-type {
      border-bottom-left-radius: var(--sscds-table-radii-settings-item);
      border-bottom-right-radius: var(--sscds-table-radii-settings-item);
    }
  }
  .ds-table-settings-panel-item + .ds-table-settings-panel-item {
    margin-top: -1px;
  }

  .ds-table-checkbox-wrapper {
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

export default TableRoot;
