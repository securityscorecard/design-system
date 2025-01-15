import { forwardRef, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { identity, memoizeWith, pipe } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import * as checked from '../../../theme/icons/check';
import * as indeterminate from '../../../theme/icons/minus';
import { getFormStyle, getRadii, pxToRem } from '../../../utils';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { CheckboxProps } from './Checkbox.types';
import { CLX_COMPONENT } from '../../../theme/constants';
import { mergeRefs } from '../../../utils/mergeRefs';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const getRemToggleSize = memoizeWith(
  identity,
  pipe(getFormStyle('toggleSize'), pxToRem),
);

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 ${getRemToggleSize};
  height: ${getRemToggleSize};
  width: ${getRemToggleSize};
  border: 1px solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  background: ${getFormStyle('bgColor')};
  padding: ${pxToRem(3)};
`;

const Mark = styled.svg`
  display: none;
  font-size: ${pxToRem(12)};
  width: 1.25em;
  color: ${getFormStyle('activeColor')};
`;

const CheckboxInput = styled.input<TogglingInputProps>`
  height: ${getRemToggleSize};
  width: ${getRemToggleSize};
  opacity: 0;
  position: absolute;

  &:checked + ${Box} {
    background: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};

    ${Mark} {
      display: block;
    }
  }

  &:disabled + ${Box} {
    border-color: ${getFormStyle('disabledBorderColor')};
    background: ${getFormStyle('disabledBgColor')};
    cursor: not-allowed;
  }

  &:disabled:checked + ${Box} {
    ${Mark} {
      color: ${getFormStyle('disabledActiveColor')};
    }
  }

  &:hover:not(:disabled, :checked) + ${Box} {
    border-color: var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }

  &:focus + ${Box} {
    border: 2px solid ${getFormStyle('activeBorderColor')};
  }

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      & + ${Box}, &:hover + ${Box} {
        background: ${getFormStyle('activeBorderColor')} !important;
        border-color: ${getFormStyle('activeBorderColor')};
        ${Mark} {
          display: block;
        }
      }
      &:disabled + ${Box} {
        ${Mark} {
          color: ${getFormStyle('disabledActiveColor')};
        }
      }
    `};

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & + ${Box}, &:checked + ${Box}, &:hover + ${Box} {
        border: 2px solid ${getFormStyle('invalidBorderColor')} !important;
      }
    `}
`;

const getLabelStyles = css`
  margin-bottom: 0;
  min-height: ${getRemToggleSize};
  line-height: ${getRemToggleSize};
  margin-left: ${({ theme }) => `-${getRemToggleSize({ theme })}`};
  font-weight: var(--sscds-font-weight-body-default);
`;

const CheckboxLabel = styled(Label)<{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${({ theme }) =>
    `calc(${pxToRem(
      getFormStyle('toggleSize', { theme }),
    )} + var(--sscds-space-2x))`};
  ${getLabelStyles};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${getFormStyle('disabledColor')};
    `}
`;

const EmptyLabel = styled.label`
  padding-left: ${getRemToggleSize};
  ${getLabelStyles};
`;

const generateIconProps = ({ width, height, svgPathData }) => ({
  viewBox: `0 0 ${width} ${height}`,
  children: <path d={svgPathData} fill="currentColor" />,
});

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      checkboxId,
      label,
      isDisabled = false,
      isInvalid = false,
      isIndeterminate = false,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const hasLabel = isNotUndefined(label);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    return (
      <CheckboxWrapper className={cls(CLX_COMPONENT, className)}>
        <CheckboxInput
          ref={mergeRefs(ref, inputRef)}
          disabled={isDisabled}
          id={checkboxId}
          isIndeterminate={isIndeterminate}
          isInvalid={isInvalid}
          name={name}
          type="checkbox"
          {...props}
        />
        <Box>
          <Mark
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            {...generateIconProps(isIndeterminate ? indeterminate : checked)}
          />
        </Box>
        {hasLabel ? (
          <CheckboxLabel htmlFor={checkboxId} isDisabled={isDisabled}>
            {label}
          </CheckboxLabel>
        ) : (
          <EmptyLabel htmlFor={checkboxId} />
        )}
      </CheckboxWrapper>
    );
  },
);

export default Checkbox;
