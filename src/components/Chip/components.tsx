import styled from 'styled-components';

export const ChipRoot = styled.div`
  display: inline-flex;
  width: fit-content;

  /* Size dependent */
  padding: var(--sscds-chip-padding-block);
  border-radius: var(--sscds-chip-radius);

  /* Color dependent */
  background: var(--sscds-chip-color-background);
  color: var(--sscds-chip-color-text);
  box-shadow: inset 0 0 0 1px
    var(--sscds-interactivechip-color-border, transparent);

  &:hover {
    background: var(
      --sscds-interactivechip-color-background-hover,
      var(--sscds-chip-color-background)
    );
    box-shadow: inset 0 0 0 1px
      var(--sscds-interactivechip-color-border-hover, transparent);
  }

  .sscds-chip-label {
    &:first-child {
      padding-inline-start: var(--sscds-space-1x);
    }
    &:last-child {
      padding-inline-end: var(--sscds-space-1x);
    }
  }
`;
