import styled from 'styled-components';

import { getColor, getRadii } from '../../../utils';

const TableRoot = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  transform: scale(1, -1);

  &[data-settings-state='open'] {
    min-height: 37.5rem;
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
    background: var(--sscds-table-color-header-background);
  }

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
      background-color: var(--sscds-color-primary-3);
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

  .ds-table-header-row,
  .ds-table-row:not(:last-of-type) {
    border-bottom: 1px solid var(--sscds-table-color-border);
  }

  .ds-table-header-cell {
    position: relative;
    flex-direction: column;
    justify-content: center;
    min-height: 2.5rem;
    padding: var(--sscds-table-spacing-cell-header);
    background-color: var(--sscds-table-color-header-background);

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
      font-size: var(--sscds-font-size-body-sm);
    }

    .ds-table-header-cell-column-actions-button-wrapper {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      background: linear-gradient(
        to right,
        transparent,
        var(--sscds-table-color-header-background) 20%
      );
      padding-block: var(--sscds-space-1x);
      padding-inline-start: var(--sscds-space-4x);
      padding-inline-end: var(--sscds-space-2x);
      transition: var(--sscds-action-transition);
    }

    &:hover,
    &:focus-within {
      .ds-table-header-cell-sort-button,
      .ds-table-header-cell-resize-handler,
      .ds-table-header-cell-column-actions-button-wrapper {
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

  .ds-table-cell-select,
  .ds-table-cell-expand,
  .ds-table-cell-actions {
    min-width: 3.5rem;
    flex: 0 0 3.5rem;
    justify-content: center;
    padding: var(--sscds-table-spacing-cell-display);
  }

  .ds-table-detail-panel-cell {
    position: sticky;
    left: 0;
  }

  .ds-table-select-button-target {
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
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
    & .ds-table-body-cell {
      border: none !important;
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
