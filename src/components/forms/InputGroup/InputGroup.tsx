import type { InputGroupProps } from './InputGroup.types';
import type { InlineProps } from '../../layout/Inline/Inline';
import type { FC } from 'react';

import { Children, forwardRef } from 'react';
import styled from 'styled-components';
import { prop } from 'ramda';
import cls from 'classnames';

import { getFormStyle, getRadii } from '../../../utils';
import { Input } from '../Input';
import { Password } from '../Password';
import { Select } from '../Select';
import { Icon } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { Button } from '../../Button';
import { SearchBar } from '../SearchBar';
import { CLX_COMPONENT } from '../../../theme/constants';
import { useLogger } from '../../../hooks/useLogger';

const InputGroupContainer = styled(Inline)<InputGroupProps>`
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};

  .ssc__control {
    border: 0;
    box-shadow: none;
  }

  & > & {
    border: none;
    border-radius: 0;
  }

  & > *,
  input:not([id^='react-select']) {
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  & > * {
    ${(props) =>
      props.hasDivider &&
      `border-right: ${getFormStyle('borderWidth')(props)} solid ${getFormStyle(
        'borderColor',
      )(props)};`}
  }

  & > *:first-child {
    border-radius: ${getRadii('default')} 0 0 ${getRadii('default')} !important;
  }

  & > *:last-child,
  & > *:last-child input[type='password'],
  & > *:last-child input[type='search'] {
    border-right: 0 !important;
    border-radius: 0 ${getRadii('default')} ${getRadii('default')} 0 !important;
  }
`;

const IconContainer = styled(Padbox)`
  display: flex;
  align-items: center;
`;

const InputGroup: FC<InputGroupProps & InlineProps> = forwardRef<
  HTMLDivElement,
  InputGroupProps & InlineProps
>(({ children, hasDivider, className, ...inlineProps }, ref) => {
  const { error } = useLogger('InputGroup');
  const ALLOWED_CHILDREN = [
    Select,
    Input,
    Icon,
    Button,
    Password,
    InputGroup,
    SearchBar,
  ];
  Children.forEach(children, (child) => {
    if (!ALLOWED_CHILDREN.includes(prop('type', child))) {
      error(
        'Only Select, Input, InputGroup, Icon, Button, SearchBar and Password are valid childs of InputGroup',
      );
    }
  });
  return (
    <InputGroupContainer
      ref={ref}
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
});

export default InputGroup;
