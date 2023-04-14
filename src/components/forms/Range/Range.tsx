import type { ChangeEventHandler } from 'react';
import type { RangeInputProps, RangeProps } from './Range.types';

import { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { noop } from 'ramda-adjunct';
import cls from 'classnames';

import { getFormStyle, pxToRem } from '../../../utils';
import { Text } from '../../typographyLegacy';
import { Inline, Stack } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RangeInput = styled.input<RangeInputProps>`
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 100%;
  min-width: ${pxToRem(200)};
  border-radius: 0;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-moz-range-thumb {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 50%;
    border: ${getFormStyle('statefulBorderWidth')} solid
      ${getFormStyle('focusBorderColor')};
    background: ${getFormStyle('bgColor')};
    cursor: pointer;
    :hover {
      box-shadow: 0 0 0 8px ${getFormStyle('focusBorderColor')}22;
    }
  }

  &::-moz-range-track {
    height: ${getFormStyle('statefulBorderWidth')};
    background: ${getFormStyle('borderColor')};
    ${({ isProgressRight }) =>
      css`
        background: ${getFormStyle(
          isProgressRight ? 'focusBorderColor' : 'borderColor',
        )};
      `}
  }

  &::-moz-range-progress {
    ${({ isProgressRight }) =>
      css`
        background: ${getFormStyle(
          isProgressRight ? 'borderColor' : 'focusBorderColor',
        )};
      `}
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: ${pxToRem(-9)};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 50%;
    border: ${getFormStyle('statefulBorderWidth')} solid
      ${getFormStyle('focusBorderColor')};
    background: ${getFormStyle('bgColor')};
    cursor: pointer;
    :hover {
      box-shadow: 0 0 0 8px ${getFormStyle('focusBorderColor')}22;
    }
  }

  &::-webkit-slider-runnable-track {
    height: ${getFormStyle('statefulBorderWidth')};

    ${({ isProgressRight, $percent }) =>
      css`
        background: linear-gradient(
          to right,
          ${getFormStyle(isProgressRight ? 'borderColor' : 'focusBorderColor')}
            ${$percent}%,
          ${getFormStyle(isProgressRight ? 'focusBorderColor' : 'borderColor')}
            ${$percent}% 100%
        );
      `}
  }

  &:focus-visible {
    ::-webkit-slider-thumb {
      box-shadow: 0 0 0 8px ${getFormStyle('focusBorderColor')}22;
    }
    ::-moz-range-thumb {
      box-shadow: 0 0 0 8px ${getFormStyle('focusBorderColor')}22;
    }
  }

  &:disabled {
    ::-moz-range-thumb {
      border: ${getFormStyle('statefulBorderWidth')} solid
        ${getFormStyle('borderColor')};
      cursor: not-allowed;
    }
    ::-moz-range-track {
      background: ${getFormStyle('borderColor')};
    }
    ::-moz-range-progress {
      background: ${getFormStyle('borderColor')};
    }
    ::-webkit-slider-thumb {
      border: ${getFormStyle('statefulBorderWidth')} solid
        ${getFormStyle('borderColor')};
      pointer-events: none;
    }
    ::-webkit-slider-runnable-track {
      background: ${getFormStyle('borderColor')};
    }
  }
`;
const RangeLabel = styled(Text)`
  margin-top: ${pxToRem(-9)};
`;

const RangeValueContainer = styled.div`
  margin: ${pxToRem(0, 10)};
`;

const RangeValue = styled.div<{
  $left: number;
  isDisabled: boolean;
}>`
  position: relative;
  text-align: center;
  margin-top: ${pxToRem(4)};
  ${({ $left }) => css`
    left: ${$left - 50}%;
  `};
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${getFormStyle('disabledActiveColor')};
    `}
`;

const calcPercentage = (value: number, min: number, max: number): number =>
  (100 * (value - min)) / (max - min);

const Range = forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      rangeId,
      isDisabled = false,
      isInvalid = false,
      hasLabels = true,
      isProgressRight = false,
      min = 0,
      max = 100,
      step,
      defaultValue,
      onChange = noop,
      className,
      ...props
    },
    ref,
  ) => {
    const [rangeValue, setRangeValue] = useState(
      defaultValue ?? (min + max) / 2,
    );

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setRangeValue(parseInt(e.target.value, 10));
      onChange(e);
    };

    return (
      <RangeWrapper className={cls(CLX_COMPONENT, className)}>
        <Inline align="flex-start" gap="sm">
          {hasLabels && (
            <RangeLabel variant={isDisabled ? 'secondary' : 'primary'}>
              {min}
            </RangeLabel>
          )}
          <Stack gap="sm">
            <RangeInput
              ref={ref}
              $percent={calcPercentage(rangeValue, min, max)}
              disabled={isDisabled}
              id={rangeId}
              isInvalid={isInvalid}
              isProgressRight={isProgressRight}
              max={max}
              min={min}
              step={step}
              type="range"
              value={rangeValue}
              onChange={handleOnChange}
              {...props}
            />
            <RangeValueContainer>
              <RangeValue
                $left={calcPercentage(rangeValue, min, max)}
                isDisabled={isDisabled}
              >
                {rangeValue}
              </RangeValue>
            </RangeValueContainer>
          </Stack>
          {hasLabels && (
            <RangeLabel variant={isDisabled ? 'secondary' : 'primary'}>
              {max}
            </RangeLabel>
          )}
        </Inline>
      </RangeWrapper>
    );
  },
);

export default Range;
