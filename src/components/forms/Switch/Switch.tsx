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
  background: ${getFormStyle('switchBgColor')};
  ${({ $size }) => switchThumbWrapperSizes[$size]};
  ${({ isDisabled }) =>
    css`
      border: 1px solid
        ${getFormStyle(isDisabled ? 'disabledBorderColor' : 'borderColor')};
    `};
`;

const ThumbContent = styled.div<Omit<SwitchThumbProps, 'maxWidth'>>`
  cursor: pointer;
  ${({ $size }) => switchNotCheckedThumbPaddings[$size]};
  &::after {
    content: '';
    position: absolute;
    top: ${pxToRem(2)};
    left: ${pxToRem(2)};
    width: ${getSwitchThumbAfterElementSize};
    height: ${getSwitchThumbAfterElementSize};
    ${({ isDisabled }) =>
      css`
        background: ${getFormStyle(
          isDisabled ? 'disabledColor' : 'switchKnobBgColor',
        )};
      `};
    border-radius: ${getRadii('circle')};
    transition: 0.3s;
  }
  &:active::after {
    background-color: ${getFormStyle('hoverIndicatorColor')};
  }
  transition: 0.3s;
`;

const Input = styled.input<{
  $size?: Sizes;
}>`
  height: 0;
  width: 0;
  display: none;
  &:checked:disabled + ${/* sc-selector */ Thumb} {
    color: ${getFormStyle('activeColor')};
    background: ${getFormStyle('disabledColor')};
    border-color: ${getFormStyle('disabledColor')};
  }

  &:hover + ${Thumb} {
    background-color: ${getFormStyle('activeBgColor')};
  }
  &:active + ${Thumb} {
    background-color: ${getFormStyle('activeBgColor')};
  }

  &:checked + ${Thumb} {
    ${ThumbContent} {
      ${({ $size }) => switchCheckedThumbPaddings[$size]};
    }
  }

  &:checked + ${Thumb} {
    color: ${getFormStyle('activeColor')};
    background: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};
  }
  &:checked + ${Thumb} {
    ${/* sc-selector */ ThumbContent}::after {
      background: ${getFormStyle('activeColor')};
      left: calc(100% - ${pxToRem(2)});
      transform: translateX(-100%);
    }
  }
  &:checked:disabled + ${Thumb} {
    ${/* sc-selector */ ThumbContent}::after {
      background: ${getFormStyle('switchBgColor')};
    }
  }
  &:checked:hover + ${Thumb} {
    background-color: ${getFormStyle('hoverBgColor')};
  }
  &:checked:active + ${Thumb} {
    background-color: ${getFormStyle('pressedBgColor')};
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
