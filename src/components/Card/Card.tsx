import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pipe, prop } from 'ramda';

import { Padbox, Stack } from '../layout';
import { getColor, getRadii, getShadow, getSpace } from '../../utils';
import { SpaceSize } from '../../theme/space.types';
import { CardProps, CardWrapperProps } from './Card.types';

const CardWrapper = styled(Padbox)<CardWrapperProps>`
  flex-grow: 1;
  background-color: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.400')};
  border-radius: ${getRadii('default')};
  overflow: hidden;
  ${getShadow}
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
  ({ children, shouldAlignLastItemToBottom = false, ...props }, ref) => {
    return (
      <CardWrapper ref={ref} {...props}>
        <CardStack $shouldAlignLastItemToBottom={shouldAlignLastItemToBottom}>
          {children}
        </CardStack>
      </CardWrapper>
    );
  },
);

Card.propTypes = {
  shouldAlignLastItemToBottom: PropTypes.bool,
};

export default Card;
