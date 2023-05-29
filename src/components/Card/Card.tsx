import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pipe, prop } from 'ramda';
import cls from 'classnames';

import { Padbox, Stack } from '../layout';
import { getColor, getRadii, getShadow, getSpace, getToken } from '../../utils';
import { SpaceSize } from '../../theme/space.types';
import { CardProps, CardWrapperProps } from './Card.types';
import { CLX_COMPONENT } from '../../theme/constants';

const InteractiveCard = css`
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.07);
  }
  &:focus-visible {
    outline: 0;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.07),
      inset 0 0 0 1px ${getToken('color-action-primary')};
    border-color: ${getToken('color-action-primary')};
  }
  &:active {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.07);
  }
`;

const CardWrapper = styled(Padbox)<CardWrapperProps>`
  flex-grow: 1;
  background-color: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.300')};
  border-radius: ${getRadii('double')};
  overflow: hidden;
  ${getShadow}
  ${({ onClick, href, to }) => (onClick || href || to ? InteractiveCard : null)}
`;

const CardStack = styled(Stack)<{ $shouldAlignLastItemToBottom: boolean }>`
  height: 100%;

  & > :last-child:not(:first-child) {
    ${({ $shouldAlignLastItemToBottom }) =>
      $shouldAlignLastItemToBottom && 'margin-top: auto;'}
  }
`;

export const CardContainer = styled.div<{
  horizontalPadding: SpaceSize;
  verticalPadding: SpaceSize;
}>`
  padding: ${pipe(prop('verticalPadding'), getSpace)}
    ${pipe(prop('horizontalPadding'), getSpace)};
`;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, shouldAlignLastItemToBottom = false, as, ...props }, ref) => {
    let domTag;
    if (props.onClick) {
      domTag = 'button';
    }
    if (props.href) {
      domTag = 'a';
    }
    if (as) {
      domTag = as;
    }
    const handleClick = (event) => {
      if (
        event.target?.dataset?.interactive ||
        event.target?.parentElement?.dataset?.interactive
      ) {
        return;
      }
      props.onClick(event);
    };
    return (
      <CardWrapper
        ref={ref}
        {...props}
        as={domTag}
        className={cls(CLX_COMPONENT, props?.className)}
        onClick={props.onClick ? handleClick : undefined}
      >
        <CardStack $shouldAlignLastItemToBottom={shouldAlignLastItemToBottom}>
          {children}
        </CardStack>
      </CardWrapper>
    );
  },
);

Card.propTypes = {
  shouldAlignLastItemToBottom: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
