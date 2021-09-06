import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNonEmptyArray } from 'ramda-adjunct';

import { BannerProps } from './Banner.types';
import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../types/action.types';
import * as CustomPropTypes from '../../types/customPropTypes';
import { BannerVariants } from './Banner.enums';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Inline, Padbox } from '../layout';
import { FlexContainer } from '../FlexContainer';
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

const iconPxSizesVariants = {
  [BannerVariants.info]: 24,
  [BannerVariants.warn]: 21,
  [BannerVariants.error]: 24,
};

const bgVariants = {
  [BannerVariants.info]: 'blueberry0',
  [BannerVariants.warn]: 'pumpkin0',
  [BannerVariants.error]: 'strawberry0',
};

const StyledPadbox = styled(Padbox)<Pick<BannerProps, 'variant'>>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ variant }) => getColor(colorVariants[variant])};
  background-color: ${({ variant }) => getColor(bgVariants[variant])};
`;

const IconPadbox = styled(Padbox)<Pick<BannerProps, 'variant'>>`
  background-color: ${({ variant }) => getColor(colorVariants[variant])};
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(FlexContainer)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

const StyledIcon = styled(Icon)<Pick<BannerProps, 'variant'>>`
  color: ${colors.graphite5H};
  font-size: ${({ variant }) => pxToRem(iconPxSizesVariants[variant])};
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
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;

const TimesIcon = styled(Icon)`
  font-size: ${pxToRem(16)};
`;

const StyledButton = styled(Button)`
  height: inherit;
  padding: 0;
`;

const Banner: React.FC<BannerProps> = ({
  children,
  variant = BannerVariants.info,
  actions,
  onClose,
}) => (
  <StyledPadbox variant={variant}>
    <Inline align="stretch" stretch="end">
      <IconPadbox paddingSize="mdPlus" paddingType="squish" variant={variant}>
        <IconWrapper alignItems="center">
          <StyledIcon
            name={iconVariants[variant]}
            type={IconTypes.ssc}
            variant={variant}
          />
        </IconWrapper>
      </IconPadbox>
      <Padbox paddingSize="md">
        <Inline align="center" gap="mdPlus" stretch="start">
          {children}
          {isNonEmptyArray(actions) &&
            actions.map((action) => (
              <StyledButton
                key={action.name}
                color="primary"
                href={
                  (action as AbsoluteLinkActionKind<[React.MouseEvent]>).href
                }
                name={action.name}
                to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
                variant="text"
                onClick={action.onClick}
              >
                {action.label}
              </StyledButton>
            ))}
          <CloseButton aria-label="Close" onClick={onClose}>
            <TimesIcon name={SSCIconNames.times} type={IconTypes.ssc} />
          </CloseButton>
        </Inline>
      </Padbox>
    </Inline>
  </StyledPadbox>
);

export default Banner;

Banner.propTypes = {
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(BannerVariants)),
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType),
};
