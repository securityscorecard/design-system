import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  createPadding,
  getFontSize,
  getFormStyle,
  getRadii,
} from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { RadioListItemProps } from './RadioListItem.types';

const RadioLabel = styled.label`
  display: flex;
  border-radius: ${getRadii('round')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  cursor: pointer;
  height: ${getFormStyle('fieldHeight')};
  font-size: ${getFontSize('md')};
  line-height: ${getFormStyle('fieldLineHeight')};
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background: ${getFormStyle('activeBgColor')};
    color: ${getFormStyle('activeBorderColor')};
    border-color: ${getFormStyle('activeBorderColor')};
    box-shadow: inset 0px 0px 0px 1px ${getFormStyle('activeBorderColor')};
  }
`;

const RadioListItem: React.FC<
  RadioListItemProps & React.PropsWithRef<JSX.IntrinsicElements['input']>
> = ({ children, group, itemId, ...props }) => (
  <>
    <Input id={itemId} name={group} type="radio" {...props} />
    <RadioLabel htmlFor={itemId}>{children}</RadioLabel>
  </>
);

RadioListItem.propTypes = {
  group: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default RadioListItem;
