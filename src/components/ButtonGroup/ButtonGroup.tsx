import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pipe } from 'ramda';

import { getRadii, getSpace, getToken, pxToRem } from '../../utils/helpers';
import { ButtonGroupProps, ButtonGroupWrapperProps } from './ButtonGroup.types';
import { ButtonColors, ButtonVariants } from '../Button/Button.enums';

const GROUP_CLASSNAME = 'ds-grouped';

const ButtonSolid = css`
  &:after {
    background-color: #fff;
  }
`;
const ButtonOutline = css<ButtonGroupWrapperProps>`
  &:after {
    background-color: ${(p) => getToken(`color-action-${p.$color}`, p)};
  }
`;
const ButtonText = css<ButtonGroupWrapperProps>`
  padding-left: ${getSpace('md')};
  padding-right: ${getSpace('md')};

  &:after {
    background-color: ${(p) => getToken(`color-action-${p.$color}`, p)};
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const buttonVariants = {
  [ButtonVariants.solid]: ButtonSolid,
  [ButtonVariants.outline]: ButtonOutline,
  [ButtonVariants.text]: ButtonText,
};

const ButtonGroupWrapper = styled.div<ButtonGroupWrapperProps>`
  display: inline-flex;

  > ${/* sc-selector */ `.${GROUP_CLASSNAME}`} {
    border-radius: 0;
    position: relative;
    border-left-width: 0.5px;
    border-right-width: 0.5px;

    &::after {
      content: '';
      width: 1px;
      height: ${pipe(getToken('size-action-size'), pxToRem)};
      position: absolute;
      right: -1px;
      z-index: 1;
      display: block;
    }

    &:first-child {
      border-radius: ${getRadii('default')} 0 0 ${getRadii('default')};
      border-left-width: 1px;
    }

    &:last-child {
      border-radius: 0 ${getRadii('default')} ${getRadii('default')} 0;
      border-right-width: 1px;

      &::after {
        display: none;
      }
    }

    ${({ $variant }) => buttonVariants[$variant]};
  }
`;

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ButtonGroupProps>
>(
  (
    { children, variant = ButtonVariants.solid, color = ButtonColors.primary },
    ref,
  ) => {
    const buttonsArr: React.ReactNode[] = React.Children.toArray(children);
    const buttons = buttonsArr.map((button) => {
      if (!React.isValidElement(button)) {
        return null;
      }

      return React.cloneElement(button, {
        ...button.props,
        className: `${button.props.className || ''} ${GROUP_CLASSNAME}`,
        variant,
        color,
      });
    });

    return (
      <ButtonGroupWrapper ref={ref} $color={color} $variant={variant}>
        {buttons}
      </ButtonGroupWrapper>
    );
  },
);

ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
  color: PropTypes.oneOf(Object.values(ButtonColors)),
};

export default ButtonGroup;
