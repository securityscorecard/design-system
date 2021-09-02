import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import { transparentize } from 'polished';

import { BannerProps } from './Banner.types';
import { BannerVariants } from './Banner.enums';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Inline, Padbox } from '../layout';
import colors from '../../theme/colors';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, pxToRem } from '../../utils';

const colorVariants = {
  [BannerVariants.info]: 'radiantBlueberry',
  [BannerVariants.warn]: 'pumpkin',
  [BannerVariants.error]: 'strawberry',
};

const iconVariants = {
  [BannerVariants.info]: SSCIconNames.infoCircle,
  [BannerVariants.warn]: SSCIconNames.exclamationTriangle,
  [BannerVariants.error]: SSCIconNames.ban,
};

const bgVariants = {
  [BannerVariants.info]: { color: colors.blueberry0, alpha: 0.5 },
  [BannerVariants.warn]: { color: colors.pumpkin, alpha: 0.9 },
  [BannerVariants.error]: { color: colors.strawberry, alpha: 0.9 },
};

const StyledPadbox = styled(Padbox)<Pick<BannerProps, 'variant'>>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ variant }) => getColor(colorVariants[variant])};
  background: ${({ variant }) =>
    transparentize(bgVariants[variant].alpha, bgVariants[variant].color)};
`;

const IconContainer = styled.div<Pick<BannerProps, 'variant'>>`
  background-color: ${({ variant }) => getColor(colorVariants[variant])};
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${colors.graphite5H};
  font-size: ${pxToRem(24)};
`;

// TODO Extract close button and unify it across DS
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  color: ${getColor('graphite3B')};
`;

const TimesIcon = styled(Icon)`
  font-size: ${pxToRem(16)};
`;

const Banner: React.FC<BannerProps> = ({
  children,
  variant = BannerVariants.info,
  actionA,
  actionB,
  onClose,
}) => (
  <StyledPadbox variant={variant}>
    <Inline justify="space-between">
      <Inline align="center">
        <IconContainer variant={variant}>
          <Padbox paddingSize="mdPlus" paddingType="squish">
            <StyledIcon
              name={iconVariants[variant]}
              type={IconTypes.ssc}
              hasFixedWidth
            />
          </Padbox>
        </IconContainer>
        <Padbox paddingSize="md">{children}</Padbox>
      </Inline>
      <Inline align="center">
        <Inline align="center" gap="mdPlus">
          {isNotUndefined(actionA) && (
            <Button
              color="primary"
              href={actionA.href}
              to={actionA.to}
              variant="text"
              onClick={actionA.onClick}
            >
              {actionA.text}
            </Button>
          )}
          {isNotUndefined(actionB) && (
            <Button
              color="primary"
              href={actionB.href}
              to={actionB.to}
              variant="text"
              onClick={actionB.onClick}
            >
              {actionB.text}
            </Button>
          )}
        </Inline>
        <Padbox paddingSize="md">
          <CloseButton aria-label="Close" onClick={onClose}>
            <TimesIcon name={SSCIconNames.times} type={IconTypes.ssc} />
          </CloseButton>
        </Padbox>
      </Inline>
    </Inline>
  </StyledPadbox>
);

export default Banner;

const ActionPropTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  onClick: PropTypes.func,
};

Banner.propTypes = {
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(BannerVariants)),
  actionA: PropTypes.shape(ActionPropTypes),
  actionB: PropTypes.shape(ActionPropTypes),
};
