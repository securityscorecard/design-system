import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { SpaceSizes } from '../../theme';
import { getColor, getNegativeSpace, getRadii, getSpace } from '../../utils';
import { AlignmentWrapperProps, CloseButtonProps } from './CloseButton.types';

const AlignmentWrapper = styled.div<AlignmentWrapperProps>`
  && {
    margin: ${({ $marginCompensation, theme }) =>
      getNegativeSpace($marginCompensation, { theme })};
    margin-left: 0;
  }
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${getRadii('default')};
`;

const CloseButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-sizing: content-box;
  font-size: 1rem;
  padding: ${getSpace(SpaceSizes.sm)};
  color: ${getColor('neutral.700')};

  &:hover
    ${/* sc-selector */ IconWrapper},
    &:focus
    ${/* sc-selector */ IconWrapper} {
    outline: none;
    background-color: ${(props) =>
      transparentize(0.96, getColor('neutral.1000', props))};
  }

  &:active ${/* sc-selector */ IconWrapper} {
    outline: none;
    background-color: ${(props) =>
      transparentize(0.94, getColor('neutral.1000', props))};
  }
`;

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      onClose,
      ariaLabel = 'Close',
      marginCompensation = SpaceSizes.sm,
      ...props
    },
    ref,
  ) => (
    <AlignmentWrapper $marginCompensation={marginCompensation}>
      <CloseButtonWrapper
        ref={ref}
        aria-label={ariaLabel}
        onClick={onClose}
        {...props}
      >
        <IconWrapper>
          <Icon name={SSCIconNames.times} />
        </IconWrapper>
      </CloseButtonWrapper>
    </AlignmentWrapper>
  ),
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  marginCompensation: PropTypes.oneOf(Object.values(SpaceSizes)),
  ariaLabel: PropTypes.string,
};

export default CloseButton;
