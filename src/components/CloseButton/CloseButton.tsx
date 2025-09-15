import { forwardRef } from 'react';
import styled from 'styled-components';
import cls from 'classnames';

import { SpaceSizes } from '../../theme';
import { getNegativeSpace } from '../../utils';
import { AlignmentWrapperProps, CloseButtonProps } from './CloseButton.types';
import { CLX_COMPONENT } from '../../theme/constants';
import IconButton from '../ButtonV2/IconButton';

const AlignmentWrapper = styled.div<AlignmentWrapperProps>`
  && {
    margin: ${({ $marginCompensation, theme }) =>
      getNegativeSpace($marginCompensation, { theme })};
    margin-left: 0;
    padding: var(--sscds-space-2x);
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
      className={cls(CLX_COMPONENT, className, {
        dark: isInverted,
      })}
    >
      <IconButton
        ref={ref}
        iconName="times"
        label={ariaLabel}
        size="sm"
        tabIndex={0}
        variant="ghost"
        onClick={onClose}
        {...props}
      />
    </AlignmentWrapper>
  ),
);

export default CloseButton;
