import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getFormStyle, pxToRem } from '../../../utils/helpers';
import { SwitchProps } from './Switch.types';

const Label = styled.label`
  cursor: pointer;
  min-width: ${pxToRem(50)};
  height: ${pxToRem(30)};
  background: ${getFormStyle('switchBgColor')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  margin: 0;
  display: inline-block;
  border-radius: 30px;
  padding-right: ${pxToRem(15)};
  padding-left: ${pxToRem(37)};
  position: relative;
  line-height: ${pxToRem(30)};
  font-size: ${pxToRem(13)};
  color: ${getFormStyle('switchColor')};
  transition: 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: ${pxToRem(4)};
    left: ${pxToRem(5)};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    background: ${getFormStyle('switchColor')};
    border-radius: 20px;
    transition: 0.3s;
  }
`;

const Input = styled.input`
  height: 0;
  width: 0;
  display: none;
  &:checked + ${/* sc-selector */ Label} {
    padding-left: ${pxToRem(15)};
    padding-right: ${pxToRem(37)};
    color: ${getFormStyle('activeColor')};
    background: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};
  }
  &:checked + ${/* sc-selector */ Label}:after {
    background: ${getFormStyle('activeColor')};
    left: calc(100% - ${pxToRem(5)});
    transform: translateX(-100%);
  }
`;

const Switch: React.FC<
  SwitchProps & React.PropsWithRef<JSX.IntrinsicElements['input']>
> = ({ switchId, label, ...props }) => (
  <>
    <Input id={switchId} {...props} type="checkbox" />
    <Label htmlFor={switchId}>{label}</Label>
  </>
);

Switch.propTypes = {
  switchId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Switch;
