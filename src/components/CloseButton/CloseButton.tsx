import type {
  AlignmentWrapperProps,
  CloseButtonProps,
  CloseButtonWrapperProps,
} from './CloseButton.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import cls from 'classnames';
import { forwardRef } from 'react';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { SpaceSizes } from '../../theme';
import { getColor, getNegativeSpace, getRadii, getSpace } from '../../utils';
import { CLX_COMPONENT } from '../../theme/constants';

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

const CloseButtonWrapper = styled.button<CloseButtonWrapperProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-sizing: content-box;
  font-size: 1rem;
  padding: ${getSpace(SpaceSizes.sm)};
  color: ${({ $isInverted, theme }) =>
    getColor($isInverted ? 'neutral.0' : 'neutral.1000', { theme })};

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

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      onClose,
      ariaLabel = 'Close',
      marginCompensation = SpaceSizes.sm,
      isInverted = false,
      className,
      ...props
    },
    ref,
  ) => (
    <AlignmentWrapper
      $marginCompensation={marginCompensation}
      className={cls(CLX_COMPONENT, className)}
    >
      <CloseButtonWrapper
        ref={ref}
        $isInverted={isInverted}
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

CloseButton.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Accessible label for the close button
   */
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  /**
   * option for semantic color backgrounds
   */
  isInverted: PropTypes.bool,
  marginCompensation: PropTypes.oneOf([
    'lg',
    'lgPlus',
    'md',
    'mdPlus',
    'none',
    'sm',
    'xl',
    'xlPlus',
    'xs',
    'xxl',
    'xxs',
  ]),
  /**
   * Callback called when the close button is clicked
   */
  onClose: PropTypes.func.isRequired,
} as any;

export default CloseButton;
