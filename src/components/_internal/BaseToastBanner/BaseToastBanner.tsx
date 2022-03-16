import React from 'react';
import styled from 'styled-components';
import { isNotNilOrEmpty } from 'ramda-adjunct';

import { BaseToastBannerVariants } from './BaseToastBanner.enums';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { getColor, pxToRem } from '../../../utils';
import { ColorTypes } from '../../../theme/colors.enums';
import { Padbox } from '../../layout/Padbox';
import { Inline } from '../../layout/Inline';
import { Icon } from '../../Icon';
import {
  BaseToastBannerProps,
  BaseToastBannerWrapperProps,
} from './BaseToastBanner.types';

export const baseToastBannerColorVariants = {
  [BaseToastBannerVariants.info]: ColorTypes.info500,
  [BaseToastBannerVariants.warn]: ColorTypes.warning500,
  [BaseToastBannerVariants.error]: ColorTypes.error500,
  [BaseToastBannerVariants.success]: ColorTypes.success500,
};

const iconVariants = {
  [BaseToastBannerVariants.info]: SSCIconNames.infoCircle,
  [BaseToastBannerVariants.warn]: SSCIconNames.exclTriangleSolid,
  [BaseToastBannerVariants.error]: SSCIconNames.errorSolid,
  [BaseToastBannerVariants.success]: SSCIconNames.checkCircleSolid,
};

const IconPadbox = styled(Padbox)<{
  $variant?: BaseToastBannerProps['variant'];
}>`
  background-color: ${({ $variant }) =>
    getColor(baseToastBannerColorVariants[$variant])};
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div<{ $iconSize: number }>`
  display: flex;
  align-items: center;
  width: ${({ $iconSize }) => pxToRem($iconSize)};
  height: ${({ $iconSize }) => pxToRem($iconSize)};
`;

const StyledIcon = styled(Icon)<{
  $variant?: BaseToastBannerWrapperProps['variant'];
  $iconPxSizesVariants: BaseToastBannerWrapperProps['iconPxSizesVariants'];
}>`
  color: ${getColor('neutral.0')};
  font-size: ${({ $variant, $iconPxSizesVariants }) =>
    pxToRem($iconPxSizesVariants[$variant])};
`;

const BaseToastBanner: React.FC<BaseToastBannerWrapperProps> = ({
  children,
  variant,
  paddingSize,
  paddingType,
  stretch,
  iconSize,
  iconPxSizesVariants,
}) => (
  <Inline stretch={stretch}>
    {isNotNilOrEmpty(variant) && (
      <IconPadbox
        $variant={variant}
        paddingSize={paddingSize}
        paddingType={paddingType}
      >
        <IconWrapper $iconSize={iconSize}>
          <StyledIcon
            $iconPxSizesVariants={iconPxSizesVariants}
            $variant={variant}
            name={iconVariants[variant]}
            type={IconTypes.ssc}
          />
        </IconWrapper>
      </IconPadbox>
    )}
    {children}
  </Inline>
);

export default BaseToastBanner;
