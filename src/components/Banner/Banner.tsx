import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { BannerProps } from './Banner.types';
import { BannerVariants } from './Banner.enums';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Inline, Padbox } from '../layout';
import colors from '../../theme/colors';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, pxToRem } from '../../utils';

const colorVariants = {
  [BannerVariants.info]: colors.radiantBlueberry,
  [BannerVariants.warn]: colors.pumpkin,
  [BannerVariants.error]: colors.strawberry,
};

const iconVariants = {
  [BannerVariants.info]: SSCIconNames.infoCircle,
  [BannerVariants.warn]: SSCIconNames.exclamationTriangle,
  [BannerVariants.error]: SSCIconNames.ban,
};

const bgVariants = {
  [BannerVariants.info]: { r: 235, g: 244, b: 252, a: 0.5 },
  [BannerVariants.warn]: { r: 240, g: 143, b: 0, a: 0.05 },
  [BannerVariants.error]: { r: 241, g: 67, b: 28, a: 0.05 },
};

const StyledInline = styled(Inline)<Pick<BannerProps, 'variant'>>`
  border: ${({ variant }) => `1px solid ${colorVariants[variant]}`};
  background: ${({ variant }) =>
    `rgba(${bgVariants[variant].r}, ${bgVariants[variant].g}, ${bgVariants[variant].b}, ${bgVariants[variant].a})`};
`;

const IconContainer = styled.div<Pick<BannerProps, 'variant'>>`
  background-color: ${({ variant }) => colorVariants[variant]};
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${colors.graphite5H};
`;

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
  cta1,
  cta2,
  onClose,
}) => (
  <StyledInline justify="space-between" variant={variant}>
    <Inline align="center">
      <IconContainer variant={variant}>
        <Padbox paddingSize="lg" paddingType="squish">
          <StyledIcon
            name={iconVariants[variant]}
            type={IconTypes.ssc}
            hasFixedWidth
          />
        </Padbox>
      </IconContainer>
      <Padbox paddingSize="md" paddingType="stretch">
        {children}
      </Padbox>
    </Inline>
    <Inline align="center">
      <Inline align="center" gap="lg">
        {isNotUndefined(cta1) && (
          <Button
            color="primary"
            href={cta1.href}
            to={cta1.to}
            variant="text"
            onClick={cta1.onClick}
          >
            {cta1.text}
          </Button>
        )}
        {isNotUndefined(cta2) && (
          <Button
            color="primary"
            href={cta2.href}
            to={cta2.to}
            variant="text"
            onClick={cta2.onClick}
          >
            {cta2.text}
          </Button>
        )}
      </Inline>
      <Padbox paddingSize="md">
        <CloseButton aria-label="Close" onClick={onClose}>
          <TimesIcon name={SSCIconNames.times} type={IconTypes.ssc} />
        </CloseButton>
      </Padbox>
    </Inline>
  </StyledInline>
);

export default Banner;

const CtaPropTypes = {
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
  cta1: PropTypes.shape(CtaPropTypes),
  cta2: PropTypes.shape(CtaPropTypes),
};
