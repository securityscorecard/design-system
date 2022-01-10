import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { __, pipe, subtract } from 'ramda';

import {
  getButtonHeight,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getLineHeight,
  pxToRem,
} from '../../../utils';
import { Sizes, SwitchProps } from './Switch.types';
import { SwitchSizes } from './Switch.enums';

// Minimum width for
const SwitchMdWithLabel = 96;
const SwitchMdWithoutLabel = 56;
const SwitchSmWithLabel = 64;
const SwitchSmWithoutLabel = 40;

const SwitchLabelWrapperMedium = css<SwitchProps>`
  ${({ label }) =>
    css`
      min-width: ${pxToRem(label ? SwitchMdWithLabel : SwitchMdWithoutLabel)};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      width: ${pxToRem(maxWidth)};
    `};
`;

const SwitchLabelWrapperSmall = css<SwitchProps>`
  ${({ label }) =>
    css`
      min-width: ${pxToRem(label ? SwitchSmWithLabel : SwitchSmWithoutLabel)};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      width: ${pxToRem(maxWidth)};
    `};
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

const switchLabelWrapperSizes = {
  [SwitchSizes.md]: SwitchLabelWrapperMedium,
  [SwitchSizes.sm]: SwitchLabelWrapperSmall,
};

const switchNotCheckedLabelPaddings = {
  [SwitchSizes.md]: SwitchPaddingNotCheckedMedium,
  [SwitchSizes.sm]: SwitchPaddingNotCheckedSmall,
};

const switchCheckedLabelPaddings = {
  [SwitchSizes.md]: SwitchPaddingCheckedMedium,
  [SwitchSizes.sm]: SwitchPaddingCheckedSmall,
};

const getSwitchLabelAfterElementSize = ({ size, theme }) =>
  pipe(
    getButtonHeight(size),
    subtract(__, 1.5 * theme.space.xs),
    pxToRem,
  )({ theme });

const getSwitchHeight = ({ size, theme }) =>
  pipe(getButtonHeight(size), pxToRem)({ theme });

const Label = styled.label<{
  isDisabled?: boolean;
  size?: Sizes;
  maxWidth?: number;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: ${getSwitchHeight};
  line-height: ${getLineHeight('md')};
  background: ${getFormStyle('switchBgColor')};
  margin: 0;
  border-radius: 16px;
  cursor: pointer;
  ${({ size }) => switchLabelWrapperSizes[size]};
  ${({ isDisabled }) =>
    css`
      color: ${getFormStyle(isDisabled ? 'disabledColor' : 'switchColor')};
      border: ${getFormStyle('borderWidth')} solid
        ${getFormStyle(isDisabled ? 'disabledBorderColor' : 'borderColor')};
    `};
`;

const LabelContent = styled.div<{
  isDisabled?: boolean;
  size?: Sizes;
}>`
  font-size: ${getFontSize('md')};
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ size }) => switchNotCheckedLabelPaddings[size]};

  &::after {
    content: '';
    position: absolute;
    top: ${pxToRem(2)};
    left: ${pxToRem(2)};
    width: ${getSwitchLabelAfterElementSize};
    height: ${getSwitchLabelAfterElementSize};
    ${({ isDisabled }) =>
      css`
        background: ${getFormStyle(
          isDisabled ? 'disabledColor' : 'switchKnobBgColor',
        )};
      `};
    border-radius: 20px;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

const Input = styled.input<{
  $size?: Sizes;
}>`
  height: 0;
  width: 0;
  display: none;
  &:checked:disabled + ${/* sc-selector */ Label} {
    color: ${getFormStyle('activeColor')};
    background: ${getFormStyle('disabledColor')};
    border-color: ${getFormStyle('disabledColor')};
  }

  &:checked + ${Label} {
    ${LabelContent} {
      ${({ $size }) => switchCheckedLabelPaddings[$size]};
    }
  }

  &:checked + ${Label} {
    color: ${getFormStyle('activeColor')};
    background: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};
  }
  &:checked + ${Label} {
    ${/* sc-selector */ LabelContent}::after {
      background: ${getFormStyle('activeColor')};
      left: calc(100% - ${pxToRem(2)});
      transform: translateX(-100%);
    }
  }
`;

const Switch: React.FC<
  SwitchProps & React.PropsWithRef<Omit<JSX.IntrinsicElements['input'], 'size'>>
> = ({
  switchId,
  label,
  isDisabled = false,
  size = SwitchSizes.md,
  maxWidth,
  ...props
}) => (
  <>
    <Input
      $size={size}
      disabled={isDisabled}
      id={switchId}
      {...props}
      type="checkbox"
    />
    <Label
      htmlFor={switchId}
      isDisabled={isDisabled}
      maxWidth={maxWidth}
      size={size}
    >
      <LabelContent isDisabled={isDisabled} size={size}>
        {label}
      </LabelContent>
    </Label>
  </>
);

Switch.propTypes = {
  switchId: PropTypes.string.isRequired,
  label: PropTypes.node,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SwitchSizes)),
  maxWidth: PropTypes.number,
};

export default Switch;
