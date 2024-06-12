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

    &[data-active='true'] .ds-table-cell {
      background-color: var(--sscds-table-color-active);
    }
    &[data-active]:hover .ds-table-cell {
      background-color: var(--sscds-color-primary-050);
      cursor: pointer;
    }
  }
  .ds-table-cell {
    display: flex;
    flex-direction: row;
    padding: var(--sscds-table-spacing-cell);
    height: 100%;
    background-color: var(--sscds-table-color-background);

    &[data-pinned]:not([data-pinned='false']) {
      position: sticky;
      z-index: 1;

      & + .ds-table-cell[data-pinned='false'] {
        border-left: none !important;
      }
    }
  }

  .ds-table-cell-select {
    min-width: 2.5rem;
    flex: 0 0 2.5rem;
    justify-content: center;
  }

  .ds-table-cell-expand,
  .ds-table-cell-actions {
    min-width: 3rem;
    flex: 0 0 3rem;
    justify-content: center;
  }

  .ds-table-header-row,
  .ds-table-row:not(:last-of-type) {
    border-bottom: 1px solid var(--sscds-table-color-border);
  }

  .ds-table-header-cell {
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 3.75rem;
    padding: var(--sscds-table-spacing-cell-header);

    &:not(:first-of-type) {
      border-left: 1px solid var(--sscds-table-color-border) !important;
    }

    .ds-table-header-cell-title {
      text-align: left;
      font-weight: var(--sscds-table-typography-weight-header);
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix*/
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

      &:focus-visible {
        z-index: 1;
      }
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
    &[data-sorted]:not([data-sorted='false'])
      .ds-table-header-cell-sort-button {
      opacity: 1;
    }
  }

  .ds-table-body-cell {
    align-items: flex-start;
  }

  .ds-table-body-cell:has([data-radix-popper-content-wrapper]) {
    z-index: 2 !important;
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

  &[data-fullscreen='true'] {
    .ds-table {
      max-height: calc(100vh - var(--sscds-table-height-pagination));
      overflow: auto;
    }

    .ds-table-header {
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }

  &[data-horizontal-scroll='false'] {
    & .ds-table-cell {
      box-shadow: none !important;
    }
  }

  .ds-table-unstyled-button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
`;

export default TableRoot;
