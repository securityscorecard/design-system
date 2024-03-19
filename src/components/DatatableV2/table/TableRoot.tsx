import styled from 'styled-components';

import { getColor, getFontSize, getRadii } from '../../../utils';

const TableRoot = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  transform: scale(1, -1);

  &::-webkit-scrollbar {
    box-sizing: content-box;
    height: 1.5rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${getRadii('round')};
    background-color: ${getColor('primary.500')};
    border: 8px solid ${getColor('neutral.0')};
  }

  &::-webkit-scrollbar-track-piece {
    border-radius: ${getRadii('round')};
    background-color: ${getColor('neutral.300')};
    border: 8px solid ${getColor('neutral.0')};
  }

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

    &.is-selected .ds-table-cell {
      background-color: var(--sscds-table-color-selection) !important;
    }
  }

  .ds-table-cell {
    display: flex;
    padding: var(--sscds-table-spacing-cell);
    background-color: var(--sscds-table-color-background);

    &.is-pinned + .ds-table-cell:not(.is-pinned) {
      border-left: none !important;
    }
  }

  /** END LAYOUT */

  .ds-table-header-row,
  .ds-table-row:not(:last-of-type) {
    border-bottom: 1px solid var(--sscds-table-color-border);
  }

  .ds-table-body-row:nth-child(odd) {
    background-color: var(--sscds-table-color-zebra);
  }

  .ds-table-header-cell {
    position: relative;
    justify-content: center;
    padding: var(--sscds-table-spacing-cell-header);

    &:not(:first-of-type) {
      border-left: 1px solid var(--sscds-table-color-border) !important;
    }

    .ds-table-header-cell-title {
      text-align: left;
      font-weight: var(--sscds-table-typography-weight-header);
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
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
      transition: var(--sscds-action-transition);
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

    &.is-sorted .ds-table-header-cell-sort-button {
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
    z-index: 2;
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
