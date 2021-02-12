import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { allPass } from 'ramda';
import { isNonEmptyString, isNotUndefined } from 'ramda-adjunct';

import {
  createMarginSpacing,
  getBorderRadius,
  getColor,
  getFormStyle,
  pxToRem,
} from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { CheckboxProps } from './Checkbox.types';

const CheckboxWrapper = styled(FlexContainer)`
  & + & {
    ${createMarginSpacing({ top: 0.25 })};
  }
`;

const Box = styled(FlexContainer)`
  ${(props) => {
    const toggleSize = getFormStyle('toggleSize')(props);

    return css`
      flex: 0 0 ${pxToRem(toggleSize)};
      height: ${pxToRem(toggleSize)};
      width: ${pxToRem(toggleSize)};
    `;
  }}

  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
  background: ${getColor('graphite5H')};
  padding: ${pxToRem(3)};
`;

const Mark = styled(Icon)`
  display: none;

  font-size: ${pxToRem(12)};
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

const CheckboxLabel = styled(Label)<
  React.HTMLProps<HTMLLabelElement> & { hasLabel: boolean }
>`
  margin-bottom: 0;

  ${({ theme, hasLabel }) => {
    const toggleSize = getFormStyle('toggleSize')({ theme });
    const leftPadding = hasLabel ? toggleSize + 10 : toggleSize;

    return css`
      min-height: ${pxToRem(toggleSize)};
      line-height: ${pxToRem(toggleSize)};
      padding-left: ${pxToRem(leftPadding)};
      margin-left: ${pxToRem(toggleSize * -1)};
    `;
  }}
`;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      checkboxId,
      label,
      isDisabled = false,
      isInvalid = false,
      isIndeterminate = false,
      ...props
    },
    ref,
  ) => {
    const hasLabel = allPass([isNotUndefined, isNonEmptyString])(label);

    return (
      <CheckboxWrapper alignItems="center">
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
            name={isIndeterminate ? SSCIconNames.minus : SSCIconNames.check}
            hasFixedWidth
          />
        </Box>
        <CheckboxLabel hasLabel={hasLabel} htmlFor={checkboxId}>
          {label}
        </CheckboxLabel>
      </CheckboxWrapper>
    );
  },
);

Checkbox.propTypes = {
  checkboxId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
};

export default Checkbox;
