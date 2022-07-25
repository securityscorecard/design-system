import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pipe, prop } from 'ramda';

import { Inline, Padbox, Stack } from '../layout';
import { getColor, getRadii, getShadow, getSpace } from '../../utils';
import { CardMediaWrapper } from './CardMedia';
import { getCommonMargin, getMarginFrom } from './utils';
import { SpaceSize } from '../../theme/space.types';
import { CardProps, CardWrapperProps } from './Card.types';
import { SpaceSizes } from '../../theme';

const CardWrapper = styled(Padbox)<CardWrapperProps>`
  flex-grow: 1;
  background-color: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.400')};
  border-radius: ${getRadii('default')};
  overflow: hidden;
  ${getShadow}

  & ${/* sc-selector */ CardMediaWrapper} {
    ${getCommonMargin};

    &:first-child {
      ${getMarginFrom('start')};
    }

    &:last-child {
      ${getMarginFrom('end')};
    }
  }

  & > ${/* sc-selector */ Inline} > * {
    flex: 1;
  }
`;

export const CardContainer = styled.div<{
  horizontalPadding: SpaceSize;
  verticalPadding: SpaceSize;
}>`
  padding: ${pipe(prop('verticalPadding'), getSpace)}
    ${pipe(prop('horizontalPadding'), getSpace)};
`;

const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
>(({ children, direction = 'vertical', ...props }, ref) => {
  const DirectionContainer = (
    direction === 'vertical' ? Stack : Inline
  ) as React.ElementType;
  return (
    <CardWrapper ref={ref} $direction={direction} {...props}>
      <DirectionContainer gap={SpaceSizes.none}>{children}</DirectionContainer>
    </CardWrapper>
  );
});

Card.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default Card;
