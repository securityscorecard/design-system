import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';
import { Location } from 'history';

import { Padbox, Stack } from '../layout';
import { SpaceSize } from '../../theme/space.types';
import { CardProps, CardWrapperProps } from './Card.types';
import { CLX_COMPONENT } from '../../theme/constants';

const InteractiveCard = css`
  transition: box-shadow 300ms var(--sscds-transition-fn);
  cursor: pointer;

  &:hover {
    box-shadow: var(--sscds-shadow-card-hover);
  }
  &:active {
    box-shadow: var(--sscds-shadow-card-active);
  }
`;

const CardWrapper = styled(Padbox)<
  CardWrapperProps & { href?: string; to?: Location }
>`
  flex-grow: 1;
  background-color: var(--sscds-color-background-surface-default);
  border: 1px solid var(--sscds-color-border-surface-default);
  border-radius: var(--sscds-radii-surface-md);
  overflow: hidden;
  box-shadow: var(--sscds-shadow-card-default);
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
  $horizontalPadding: SpaceSize;
  $verticalPadding: SpaceSize;
}>`
  padding: ${({ $verticalPadding, $horizontalPadding }) =>
    `var(--sscds-space-${$verticalPadding}) var(--sscds-space-${$horizontalPadding})`};
`;

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { children, shouldAlignLastItemToBottom = false, as, ...props }: CardProps,
    ref,
  ) => {
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

export default Card;
