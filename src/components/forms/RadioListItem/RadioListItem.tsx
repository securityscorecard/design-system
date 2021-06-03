import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createPaddingSpacing, getFormStyle } from '../../../utils';
import { Label } from '../Label';
import { RadioListItemProps } from './RadioListItem.types';

const RadioLabel = styled(Label).attrs(() => ({ variant: 'primary' }))`
  border-radius: 15px;
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  cursor: pointer;
  ${createPaddingSpacing({ vertical: 0.2, horizontal: 0.75 })}
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background: ${getFormStyle('activeBgColor')};
    color: ${getFormStyle('activeBorderColor')};
    border: ${getFormStyle('statefulBorderWidth')} solid
      ${getFormStyle('activeBorderColor')};
    ${createPaddingSpacing({ vertical: 0.15, horizontal: 0.7 })}
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
