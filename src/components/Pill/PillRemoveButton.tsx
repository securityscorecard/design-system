import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  width: 1rem;
  height: 1rem;
  font-size: var(--sscds-font-size-body-sm);
  color: var(--sscds-color-icon-subtle);
  cursor: pointer;
  border-radius: var(--sscds-radii-circle);
  margin-inline-end: calc(var(--sscds-space-1x) * -1) !important;

  &:hover,
  &:focus-visible {
    color: var(--sscds-color-neutral-1);
    background-color: var(--sscds-color-icon-danger);
  }
`;

const PillRemoveButton = ({ pillLabel, ...props }: PillRemoveButtonProps) => (
  <PillRemoveButtonWrapper
    aria-label={`Remove ${pillLabel}`}
    type="button"
    {...props}
  >
    <Icon name={SSCIconNames.times} />
  </PillRemoveButtonWrapper>
);

PillRemoveButton.propTypes = {
  pillLabel: PropTypes.string.isRequired,
};

export default PillRemoveButton;
