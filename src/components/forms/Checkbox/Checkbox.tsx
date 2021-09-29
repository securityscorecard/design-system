import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { add, allPass, identity, memoizeWith, pipe } from 'ramda';
import { isNonEmptyString, isNotUndefined } from 'ramda-adjunct';

import * as checked from '../../../theme/icons/check';
import * as indeterminate from '../../../theme/icons/minus';
import {
  createMarginSpacing,
  getBorderRadius,
  getColor,
  getFormStyle,
  pxToRem,
} from '../../../utils';
import { FlexContainer } from '../../FlexContainer';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { CheckboxProps } from './Checkbox.types';

const CheckboxWrapper = styled(FlexContainer)`
  & + & {
    ${createMarginSpacing({ top: 0.25 })};
  }
`;

const getRemToggleSize = memoizeWith(
  identity,
  pipe(getFormStyle('toggleSize'), pxToRem),
);

const Box = styled(FlexContainer)`
  flex: 0 0 ${getRemToggleSize};
  height: ${getRemToggleSize};
  width: ${getRemToggleSize};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
  background: ${getColor('graphite5H')};
  padding: ${pxToRem(3)};
`;

const Mark = styled.svg`
  display: none;
  font-size: ${pxToRem(12)};
  width: 1.25em;
  color: ${getFormStyle('activeColor')};
`;

const CheckboxInput = styled.input<TogglingInputProps>`
  display: none;

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
  }

  &:disabled:checked + ${Box} {
    ${Mark} {
      color: ${getFormStyle('disabledActiveColor')};
    }
  }

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      & + ${Box} {
        background: ${getFormStyle('activeBorderColor')};
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
      & + ${Box}, &:checked + ${Box} {
        border: ${getFormStyle('statefulBorderWidth')} solid
          ${getFormStyle('invalidBorderColor')};
      }
    `}
`;

const getLabelStyles = css`
  margin-bottom: 0;
  min-height: ${getRemToggleSize};
  line-height: ${getRemToggleSize};
  margin-left: ${({ theme }) => `-${getRemToggleSize({ theme })}`};
`;

const CheckboxLabel = styled(Label)<React.HTMLProps<HTMLLabelElement>>`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${pipe(getFormStyle('toggleSize'), add(10), pxToRem)};
  ${getLabelStyles};
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
    const hasLabel = allPass([isNotUndefined, isNonEmptyString])(label);

    return (
      <CheckboxWrapper alignItems="center" className={className}>
        <CheckboxInput
          ref={ref}
          disabled={isDisabled}
          id={checkboxId}
          isIndeterminate={isIndeterminate}
          isInvalid={isInvalid}
          name={name}
          type="checkbox"
          {...props}
        />
        <Box alignItems="center" justifyContent="center">
          <Mark
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            {...generateIconProps(isIndeterminate ? indeterminate : checked)}
          />
        </Box>
        {hasLabel ? (
          <CheckboxLabel htmlFor={checkboxId}>{label}</CheckboxLabel>
        ) : (
          <EmptyLabel htmlFor={checkboxId} />
        )}
      </CheckboxWrapper>
    );
  },
);

Checkbox.propTypes = {
  checkboxId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
};

export default Checkbox;
