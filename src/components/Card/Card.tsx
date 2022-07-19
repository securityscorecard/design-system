import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SpaceSizes } from '../../theme';
import { Inline, Padbox, Stack } from '../layout';
import { getColor, getRadii } from '../../utils';
import { CardMediaWrapper } from './CardMedia';
import { getCommonMargin, getMarginFrom } from './utils';
import { CardProps, CardWrapperProps } from './Card.types';

const CardWrapper = styled(Padbox)<CardWrapperProps>`
  flex-grow: 1;
  background-color: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.400')};
  border-radius: ${getRadii('default')};
  overflow: hidden;

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

const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
>(({ children, direction = 'vertical', ...props }, ref) => {
  const DirectionContainer = (
    direction === 'vertical' ? Stack : Inline
  ) as React.ElementType;
  return (
    <CardWrapper
      ref={ref}
      $direction={direction}
      paddingSize={SpaceSizes.mdPlus}
      {...props}
    >
      <DirectionContainer gap={SpaceSizes.md}>{children}</DirectionContainer>
    </CardWrapper>
  );
});

Card.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default Card;
