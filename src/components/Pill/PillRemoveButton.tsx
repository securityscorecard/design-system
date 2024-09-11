import styled from 'styled-components';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { PillRemoveButtonProps } from './Pill.types';

const PillRemoveButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 0 none;
  background: transparent;
  cursor: pointer;
  color: var(--sscds-pill-color-text, var(--sscds-color-text-pill-gray));
  border-radius: var(--sscds-radii-circle);
  margin-inline-end: calc(
    var(--sscds-pill-padding-inline, var(--sscds-space-2x)) * -1
  ) !important;
  width: var(--sscds-pill-size, var(--sscds-font-lineheight-30));
  height: var(--sscds-pill-size, var(--sscds-font-lineheight-30));

  &:hover,
  &:focus-visible {
    background-color: var(--sscds-color-background-action-subtle-hover);
  }
`;

const PillRemoveButton = ({ pillLabel, ...props }: PillRemoveButtonProps) => (
  <PillRemoveButtonWrapper
    aria-label={`Remove ${pillLabel}`}
    type="button"
    {...props}
  >
    <Icon name={SSCIconNames.times} size="sm" hasFixedSize />
  </PillRemoveButtonWrapper>
);

export default PillRemoveButton;
