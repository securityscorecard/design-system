import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { __, pipe, subtract } from 'ramda';
import cls from 'classnames';

import { getFormStyle, getRadii, getToken, pxToRem } from '../../../utils';
import { Sizes, SwitchProps, SwitchThumbProps } from './Switch.types';
import { SwitchSizes } from './Switch.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

// Minimum width for
const SwitchMdWithThumb = 96;
const SwitchMdWithoutThumb = 56;
const SwitchSmWithThumb = 64;
const SwitchSmWithoutThumb = 40;

const SwitchThumbWrapperMedium = css<{ label: string; maxWidth: number }>`
  ${({ label }) =>
    css`
      min-width: ${pxToRem(label ? SwitchMdWithThumb : SwitchMdWithoutThumb)};
    `}
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      width: ${pxToRem(maxWidth)};
    `};
`;

const SwitchThumbWrapperSmall = css<{ label: string; maxWidth: number }>`
  ${({ label }) =>
    css`
      min-width: ${pxToRem(label ? SwitchSmWithThumb : SwitchSmWithoutThumb)};
    `}
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      width: ${pxToRem(maxWidth)};
    `};
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Paddings
const SwitchPaddingNotCheckedMedium = css`
  padding-left: ${pxToRem(37)};
  padding-right: ${pxToRem(10)};
`;

const SwitchPaddingNotCheckedSmall = css`
  padding-left: ${pxToRem(26)};
  padding-right: ${pxToRem(5)};
`;

const SwitchPaddingCheckedMedium = css`
  padding-right: ${pxToRem(37)};
  padding-left: ${pxToRem(10)};
`;

const SwitchPaddingCheckedSmall = css`
  padding-right: ${pxToRem(26)};
  padding-left: ${pxToRem(5)};
`;

const switchThumbWrapperSizes = {
  [SwitchSizes.md]: SwitchThumbWrapperMedium,
  [SwitchSizes.sm]: SwitchThumbWrapperSmall,
};

const switchNotCheckedThumbPaddings = {
  [SwitchSizes.md]: SwitchPaddingNotCheckedMedium,
  [SwitchSizes.sm]: SwitchPaddingNotCheckedSmall,
};

const switchCheckedThumbPaddings = {
  [SwitchSizes.md]: SwitchPaddingCheckedMedium,
  [SwitchSizes.sm]: SwitchPaddingCheckedSmall,
};

const switchSizes = {
  [SwitchSizes.md]: 'size-action-size',
  [SwitchSizes.sm]: 'size-action-size-sm',
};

const getSwitchThumbAfterElementSize = ({ $size, theme }) =>
  pipe(
    getToken(switchSizes[$size]),
    subtract(__, 1.5 * theme.space.xs),
    pxToRem,
  )({ theme });

const getSwitchHeight = ({ $size, theme }) =>
  pipe(getToken(switchSizes[$size]), pxToRem)({ theme });

const BaseThumb = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0;
  border-radius: ${getRadii('round')};
  cursor: pointer;
`;

const Thumb = styled(BaseThumb)<SwitchThumbProps>`
  height: ${getSwitchHeight};
  color: ${getFormStyle('switchKnobBgColor')};
  background: ${getFormStyle('switchBgColor')};
  cursor: pointer;

  ${({ $size }) => switchThumbWrapperSizes[$size]};
  ${({ isDisabled }) =>
    css`
      border: 1px solid
        ${getFormStyle(isDisabled ? 'disabledBorderColor' : 'borderColor')};
    `};
`;

const ThumbContent = styled.div<Omit<SwitchThumbProps, 'maxWidth'>>`
  ${({ $size }) => switchNotCheckedThumbPaddings[$size]};
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: ${pxToRem(2)};
    left: ${pxToRem(2)};
    width: ${getSwitchThumbAfterElementSize};
    height: ${getSwitchThumbAfterElementSize};
    background: currentcolor;
    border-radius: ${getRadii('circle')};
    transition: 0.15s;
  }
`;

const Input = styled.input<{
  $size?: Sizes;
}>`
  height: ${getSwitchHeight};
  width: ${getSwitchHeight};
  opacity: 0;
  position: absolute;
  margin: 0;
  cursor: pointer;

  &:hover + ${Thumb} {
    background-color: ${getFormStyle('activeBgColor')};
  }
  &:active + ${Thumb} {
    background-color: ${getFormStyle('activeBgColor')};
    color: ${getFormStyle('hoverIndicatorColor')};
  }

  &:focus-visible + ${Thumb} {
    outline: 2px solid ${getFormStyle('activeBorderColor')};
    outline-offset: 2px;
  }

  &:checked {
    & + ${Thumb} {
      color: ${getFormStyle('activeColor')};
      background: ${getFormStyle('activeBorderColor')};
      border-color: ${getFormStyle('activeBorderColor')};

      ${ThumbContent} {
        ${({ $size }) => switchCheckedThumbPaddings[$size]};

        &::after {
          left: calc(100% - ${pxToRem(2)});
          transform: translateX(-100%);
        }
      }

      &:hover + ${Thumb} {
        background-color: ${getFormStyle('hoverBgColor')};
      }
      &:active + ${Thumb} {
        color: ${getFormStyle('activeColor')};
        background-color: ${getFormStyle('pressedBgColor')};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    & + ${Thumb} {
      color: ${getFormStyle('disabledColor')};
      background: ${getFormStyle('switchBgColor')};
      border-color: ${getFormStyle('disabledBorderColor')};
      cursor: not-allowed;
    }
    &:checked + ${Thumb} {
      color: ${getFormStyle('switchBgColor')};
      background: ${getFormStyle('disabledColor')};
      border-color: ${getFormStyle('disabledColor')};
    }
  }
`;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      switchId,
      isDisabled = false,
      size = SwitchSizes.md,
      className,
      ...props
    },
    ref,
  ) => (
    <SwitchWrapper className={cls(CLX_COMPONENT, className)}>
      <Input
        ref={ref}
        $size={size}
        disabled={isDisabled}
        id={switchId}
        type="checkbox"
        {...props}
      />
      <Thumb $size={size} htmlFor={switchId} isDisabled={isDisabled}>
        <ThumbContent $size={size} isDisabled={isDisabled} />
      </Thumb>
    </SwitchWrapper>
  ),
);

export default Switch;
