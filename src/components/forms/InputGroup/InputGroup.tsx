import { Children } from 'react';
import styled from 'styled-components';
import { prop } from 'ramda';
import cls from 'classnames';

import { getFormStyle } from '../../../utils';
import { Input } from '../Input';
import { Password } from '../Password';
import { Select } from '../Select';
import { Icon } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { InputGroupProps } from './InputGroup.types';
import { InlineProps } from '../../layout/Inline/Inline';
import { SearchBar } from '../SearchBar';
import { CLX_COMPONENT } from '../../../theme/constants';
import { useLogger } from '../../../hooks/useLogger';
import ButtonV2 from '../../ButtonV2/Button';
import IconButton from '../../ButtonV2/IconButton';

const InputGroupContainer = styled(Inline)<InputGroupProps>`
  background-color: ${getFormStyle('bgColor')};
  box-shadow: inset 0 0 0 1px ${getFormStyle('borderColor')};
  border-radius: var(--sscds-radii-input);

  &:hover {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }

  .ssc__control {
    border: 0px;
    box-shadow: none;
  }
  & > & {
    border: none;
    border-radius: 0px;
  }
  & .ssc__control,
  & > *:not(.sscds-buttonv2),
  input:not([id^='react-select']) {
    border: none;
    box-shadow: none;
    border-radius: 0px;
    background-color: transparent;

    &:hover {
      box-shadow: none;
      background: transparent;
    }
  }
  & > *:not(.sscds-buttonv2) {
    ${(props) =>
      props.hasDivider &&
      `border-right: 1px solid var(--sscds-color-border-input-default);`}
  }
  & > *:first-child {
    border-radius: var(--sscds-radii-input) 0 0 var(--sscds-radii-input) !important;
  }
  & > *:last-child,
  & > *:last-child input[type='password'],
  & > *:last-child input[type='search'] {
    border-right: 0px !important;
    border-radius: 0 var(--sscds-radii-input) var(--sscds-radii-input) 0 !important;
  }
`;

const IconContainer = styled(Padbox)`
  display: flex;
  align-items: center;
`;

const InputGroup = ({
  children,
  hasDivider,
  className,
  ...inlineProps
}: InputGroupProps & InlineProps) => {
  const { error } = useLogger('InputGroup');
  const ALLOWED_CHILDREN = [
    Select,
    Input,
    Icon,
    ButtonV2,
    IconButton,
    Password,
    InputGroup,
    SearchBar,
  ];
  Children.forEach(children, (child) => {
    if (!ALLOWED_CHILDREN.includes(prop('type', child))) {
      error(
        'Only Select, Input, InputGroup, Icon, ButtonV2, IconButton, SearchBar and Password are valid childs of InputGroup',
      );
    }
  });
  return (
    <InputGroupContainer
      className={cls(CLX_COMPONENT, className)}
      hasDivider={hasDivider}
      {...inlineProps}
      stretch={inlineProps.stretch || 'start'}
    >
      {Children.map(children, (child) => {
        if (prop('type', child) === Icon) {
          return <IconContainer paddingSize="sm">{child}</IconContainer>;
        }
        return child;
      })}
    </InputGroupContainer>
  );
};

export default InputGroup;
