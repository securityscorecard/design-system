import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { H3 } from '../typography';
import { FlexContainer } from '../FlexContainer';
import { Spinner } from '../Spinner';
import { getBorderRadius, getColor, pxToRem } from '../../utils/helpers';
import { CardProps } from './Card.types';

const CardWrapper = styled(FlexContainer)`
  width: ${pxToRem(370)};
  height: ${pxToRem(400)};
  padding: ${pxToRem(0, 45, 30)};
  border-radius: ${getBorderRadius};
  border: 1px solid ${getColor('graphiteHB')};
`;

const CardHeader = styled(FlexContainer).attrs(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  as: 'header',
}))`
  height: ${pxToRem(89)};
`;
const CardContent = styled(FlexContainer)`
  flex-grow: 1;
`;

const Card: React.FC<CardProps> = ({
  children,
  title,
  margin = { bottom: 1.5 },
  isLoading = false,
  ...props
}) => (
  <CardWrapper
    alignItems="center"
    flexDirection="column"
    margin={margin}
    {...props}
  >
    <CardHeader>
      <H3 margin="none">{title}</H3>
    </CardHeader>

    <CardContent
      alignItems="center"
      flexDirection="column"
      justifyContent={isLoading ? 'center' : 'initial'}
    >
      {isLoading ? <Spinner dark /> : children}
    </CardContent>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  margin: SpacingSizeValuePropType,
};

export default Card;
