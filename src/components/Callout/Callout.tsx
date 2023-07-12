import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { CalloutContainerProps, CalloutProps } from './Callout.types';
import { ColorTypes, SpaceSizes } from '../../theme';
import { getColor, getFontSize, getRadii, pxToRem } from '../../utils';
import { Inline, Padbox } from '../layout';
import { Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { SSCIcons } from '../Icon/Icon.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { CalloutColors } from './Callout.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const CalloutIconNeutral = css`
  background-color: ${getColor(ColorTypes.neutral300)};
`;
const CalloutIconInfo = css`
  background-color: ${getColor(ColorTypes.info100)};
`;
const calloutIconColors = {
  [CalloutColors.neutral]: CalloutIconNeutral,
  [CalloutColors.info]: CalloutIconInfo,
};

const IconContainer = styled.div<CalloutContainerProps>`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  flex-shrink: 0;
  border-radius: ${getRadii('circle')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getFontSize('lg')};
  ${({ $color }) => calloutIconColors[$color]};
`;

const CalloutNeutral = css`
  background-color: ${getColor(ColorTypes.neutral100)};
`;
const CalloutInfo = css`
  background-color: ${getColor(ColorTypes.info50)};
`;

const calloutColors = {
  [CalloutColors.neutral]: CalloutNeutral,
  [CalloutColors.info]: CalloutInfo,
};

const Container = styled(Padbox)<CalloutContainerProps>`
  border-radius: ${getRadii('default')};
  ${({ $color }) => calloutColors[$color]};
`;

const Callout: React.FC<CalloutProps> = ({
  children,
  icon = SSCIconNames.lightbulb,
  color = CalloutColors.info,
}) => (
  <Container
    $color={color}
    className={CLX_COMPONENT}
    paddingSize={SpaceSizes.md}
  >
    <Inline gap={SpaceSizes.md}>
      <IconContainer $color={color}>
        {typeof icon === 'string' ? (
          <Icon
            color={
              color === 'info' ? ColorTypes.info700 : ColorTypes.neutral700
            }
            name={icon}
          />
        ) : (
          icon
        )}
      </IconContainer>
      <Text style={{ alignSelf: 'center' }}>{children}</Text>
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
