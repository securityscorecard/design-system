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
import { Inline, Padbox, Stack } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { FlexContainer } from '../FlexContainer';
import { Text as BaseText } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getFontSize, pxToRem } from '../../utils';
import { ColorTypes } from '../../theme/colors.enums';

const colorVariants = {
  [BannerVariants.info]: ColorTypes.info500,
  [BannerVariants.warn]: ColorTypes.warning500,
  [BannerVariants.error]: ColorTypes.error500,
  [BannerVariants.success]: ColorTypes.success500,
};

const iconVariants = {
  [BannerVariants.info]: SSCIconNames.infoCircle,
  [BannerVariants.warn]: SSCIconNames.exclTriangleSolid,
  [BannerVariants.error]: SSCIconNames.errorSolid,
  [BannerVariants.success]: SSCIconNames.checkCircleSolid,
};

const iconPxSizesVariants = {
  [BannerVariants.info]: 24,
  [BannerVariants.warn]: 21,
  [BannerVariants.error]: 24,
  [BannerVariants.success]: 24,
};

const bgVariants = {
  [BannerVariants.info]: ColorTypes.info50,
  [BannerVariants.warn]: ColorTypes.warning50,
  [BannerVariants.error]: ColorTypes.error50,
  [BannerVariants.success]: ColorTypes.success50,
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
  color: ${getColor('neutral.0')};
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
  color: ${getColor('neutral.800')};
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
`;

const TimesIcon = styled(Icon)`
  font-size: ${getFontSize('lg')};
`;

const StyledButton = styled(Button)`
  height: inherit;
  padding: 0;
`;

const Text = styled(BaseText)`
  max-width: 64ch;
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
          align="start"
          gap={SpaceSizes.mdPlus}
          stretch={StretchEnum.start}
        >
          <Stack gap={SpaceSizes.sm}>
            <Text as="div" size={TextSizes.md}>
              {children}
            </Text>
            {isNonEmptyArray(actions) && (
              <Inline gap={SpaceSizes.mdPlus}>
                {actions.map((action) => (
                  <StyledButton
                    key={action.name}
                    color={ButtonColors.primary}
                    href={
                      (action as AbsoluteLinkActionKind<[React.MouseEvent]>)
                        .href
                    }
                    name={action.name}
                    to={
                      (action as RelativeLinkActionKind<[React.MouseEvent]>).to
                    }
                    variant={ButtonVariants.text}
                    onClick={action.onClick}
                  >
                    {action.label}
                  </StyledButton>
                ))}
              </Inline>
            )}
          </Stack>
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
