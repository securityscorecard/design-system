import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor, getLineHeight, pxToRem } from '../../utils';
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
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  font-size: ${pxToRem(12)};
  line-height: ${getLineHeight('md')};
  color: ${getColor('graphite2B')};
  cursor: pointer;
  border-radius: 100%;

  &:hover,
  &:focus {
    color: ${getColor('graphite5H')};
    background-color: ${getColor('strawberry')};
  }
`;

const PillRemoveButton: React.FC<PillRemoveButtonProps> = ({
  pillLabel,
  ...props
}) => (
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
