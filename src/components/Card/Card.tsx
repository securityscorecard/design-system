import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { H3, Paragraph } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { FlexContainer } from '../FlexContainer';
import { Spinner } from '../Spinner';
import { getBorderRadius, getColor, pxToRem } from '../../utils/helpers';
import { CardProps } from './Card.types';

const CardWrapper = styled(FlexContainer)`
  width: ${pxToRem(370)};
  height: ${pxToRem(400)};
  padding: ${pxToRem(40, 14, 0, 14)};
  border-radius: ${getBorderRadius};
  border: 1px solid ${getColor('graphiteHB')};
`;

const CardTitle = styled(H3).attrs(() => ({
  margin: { top: 0, bottom: 0.4 },
}))`
  font-weight: bold;
`;

const CardContent = styled(FlexContainer)`
  flex-grow: 1;
`;

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
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
    <CardTitle>{title}</CardTitle>
    {isNotUndefined(subtitle) && (
      <Paragraph margin="none" size={TextSizes.md}>
        {subtitle}
      </Paragraph>
    )}
    <CardContent
      alignItems="center"
      flexDirection="column"
      padding={{ vertical: 1.25 }}
    >
      {isLoading ? <Spinner dark /> : children}
    </CardContent>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  isLoading: PropTypes.bool,
  margin: SpacingSizeValuePropType,
};

export default Card;
