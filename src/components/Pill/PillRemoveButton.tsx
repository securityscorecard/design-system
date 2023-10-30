import type { PillRemoveButtonProps } from './Pill.types';

import styled from 'styled-components';

import { getColor, getLineHeight, getRadii, pxToRem } from '../../utils';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';

const PillRemoveButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 0 none;
  background: transparent;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  font-size: ${pxToRem(12)};
  line-height: ${getLineHeight('md')};
  color: ${getColor('neutral.700')};
  cursor: pointer;
  border-radius: ${getRadii('circle')};

  &:hover,
  &:focus-visible {
    color: ${getColor('neutral.0')};
    background-color: ${getColor('error.500')};
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

export default PillRemoveButton;
