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
import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { FlexContainer } from '../FlexContainer';
import { Text } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import colors from '../../theme/colors';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getFontSize, pxToRem } from '../../utils';

const colorVariants = {
  [BannerVariants.info]: 'radiantBlueberry',
  [BannerVariants.warn]: 'pumpkin',
  [BannerVariants.error]: 'strawberry',
};

const iconVariants = {
  [BannerVariants.info]: SSCIconNames.infoCircle,
  [BannerVariants.warn]: SSCIconNames.exclTriangleSolid,
  [BannerVariants.error]: SSCIconNames.banSolid,
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

const StyledPadbox = styled(Padbox)<{ $variant?: BannerProps['variant'] }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $variant }) => getColor(colorVariants[$variant])};
  background-color: ${({ $variant }) => getColor(bgVariants[$variant])};
`;

const IconPadbox = styled(Padbox)<{ $variant?: BannerProps['variant'] }>`
  background-color: ${({ $variant }) => getColor(colorVariants[$variant])};
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(FlexContainer)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

const StyledIcon = styled(Icon)<{ $variant?: BannerProps['variant'] }>`
  color: ${colors.graphite5H};
  font-size: ${({ $variant }) => pxToRem(iconPxSizesVariants[$variant])};
`;

// TODO Extract close button and unify it across DS
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${getColor('graphite3B')};
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;

const TimesIcon = styled(Icon)`
  font-size: ${getFontSize('lg')};
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
  <StyledPadbox $variant={variant}>
    <Inline align="stretch" stretch={StretchEnum.end}>
      <IconPadbox
        $variant={variant}
        paddingSize={SpaceSizes.mdPlus}
        paddingType={PaddingTypes.squish}
      >
        <IconWrapper alignItems="center">
          <StyledIcon
            $variant={variant}
            name={iconVariants[variant]}
            type={IconTypes.ssc}
          />
        </IconWrapper>
      </IconPadbox>
      <Padbox paddingSize={SpaceSizes.md}>
        <Inline
          align="center"
          gap={SpaceSizes.mdPlus}
          stretch={StretchEnum.start}
        >
          <Text size={TextSizes.md}>{children}</Text>
          {isNonEmptyArray(actions) &&
            actions.map((action) => (
              <StyledButton
                key={action.name}
                color={ButtonColors.primary}
                href={
                  (action as AbsoluteLinkActionKind<[React.MouseEvent]>).href
                }
                name={action.name}
                to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
                variant={ButtonVariants.text}
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
