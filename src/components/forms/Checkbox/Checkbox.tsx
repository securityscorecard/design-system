import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  createMarginSpacing,
  getBorderRadius,
  getFormStyle,
  pxToRem,
} from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { CheckboxProps } from './Checkbox.types';

const CheckboxWrapper = styled(FlexContainer)`
  & + & {
    ${createMarginSpacing({ top: 0.25 })};
  }
`;

const Box = styled.div`
  height: ${pxToRem(20)};
  width: ${pxToRem(20)};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
`;

const Check = styled(Icon)`
  display: none;
  margin: ${pxToRem(3)};

  font-size: ${pxToRem(12)};
  color: ${getFormStyle('activeColor')};
`;

const CheckboxInput = styled.input<TogglingInputProps>`
  display: none;

  &:checked + ${Box} {
    background: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};

    ${Check} {
      display: block;
    }
  }

  &:disabled + ${Box} {
    border-color: ${getFormStyle('disabledBorderColor')};
    background: ${getFormStyle('disabledBgColor')};
  }

  &:disabled:checked + ${Box} {
    ${Check} {
      color: ${getFormStyle('disabledActiveColor')};
    }
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & + ${Box} {
        border: ${getFormStyle('statefulBorderWidth')} solid
          ${getFormStyle('invalidBorderColor')};
      }
      &:checked + ${Box} {
        ${Check} {
          color: ${getFormStyle('invalidBorderColor')};
        }
      }
    `}
`;

const CheckboxLabel = styled(Label)<React.HTMLProps<HTMLLabelElement>>`
  line-height: ${pxToRem(20)};
  padding-left: ${pxToRem(10)};
  margin-bottom: 0;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checkboxId,
  label,
  isDisabled = false,
  isInvalid = false,
  ...props
}) => (
  <CheckboxWrapper alignItems="center">
    <CheckboxInput
      disabled={isDisabled}
      id={checkboxId}
      isInvalid={isInvalid}
      name={name}
      type="checkbox"
      {...props}
    />
    <Box>
      <Check name={SSCIconNames.check} type={IconTypes.ssc} />
    </Box>
    <CheckboxLabel htmlFor={checkboxId}>{label}</CheckboxLabel>
  </CheckboxWrapper>
);

Checkbox.propTypes = {
  checkboxId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

export default Checkbox;
