import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { partialRight, pipe, prop } from 'ramda';

import { CalloutProps } from './Callout.types';
import { ColorTypes, SpaceSizes } from '../../theme';
import { getColor, getFontSize, getRadii, pxToRem } from '../../utils';
import { Inline, Padbox } from '../layout';
import { Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SSCIcons } from '../Icon/Icon.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const IconColor = {
  info: ColorTypes.info700,
  neutral: ColorTypes.neutral700,
};

const IconContainerBackground = {
  info: ColorTypes.info100,
  neutral: ColorTypes.neutral300,
};

const IconContainer = styled.div`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  flex-shrink: 0;
  background-color: ${pipe(
    prop('variant'),
    partialRight(prop, [IconContainerBackground]),
    getColor,
  )};
  border-radius: ${getRadii('circle')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getFontSize('mdPlus')};
`;

const ContainerBackground = {
  info: ColorTypes.info50,
  neutral: ColorTypes.neutral100,
};

const Container = styled(Padbox)`
  background-color: ${pipe(
    prop('variant'),
    partialRight(prop, [ContainerBackground]),
    getColor,
  )};
  border-radius: ${getRadii('default')};
`;

const Callout: React.FC<CalloutProps> = ({
  children,
  icon = SSCIconNames.lightbulb,
  variant = 'info',
}) => (
  <Container
    className={CLX_COMPONENT}
    paddingSize={SpaceSizes.md}
    variant={variant}
  >
    <Inline gap={SpaceSizes.md}>
      <IconContainer variant={variant}>
        {typeof icon === 'string' ? (
          <Icon color={IconColor[variant]} name={icon} />
        ) : (
          icon
        )}
      </IconContainer>
      <Text size={TextSizes.lg} style={{ alignSelf: 'center' }}>
        {children}
      </Text>
    </Inline>
  </Container>
);

Callout.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
  ]),
};

export default Callout;
