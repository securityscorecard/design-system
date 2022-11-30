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
  [BaseToastBannerVariants.info]: ColorTypes.info50,
  [BaseToastBannerVariants.warn]: ColorTypes.warning50,
  [BaseToastBannerVariants.error]: ColorTypes.error50,
  [BaseToastBannerVariants.success]: ColorTypes.success50,
};

const iconVariants = {
  [BaseToastBannerVariants.info]: SSCIconNames.infoCircle,
  [BaseToastBannerVariants.warn]: SSCIconNames.errorCircle,
  [BaseToastBannerVariants.error]: SSCIconNames.exclTriangleSolid,
  [BaseToastBannerVariants.success]: SSCIconNames.check,
};

const iconColorVariants = {
  [BaseToastBannerVariants.info]: ColorTypes.info500,
  [BaseToastBannerVariants.warn]: ColorTypes.warning500,
  [BaseToastBannerVariants.error]: ColorTypes.error500,
  [BaseToastBannerVariants.success]: ColorTypes.success500,
};

const IconPadbox = styled(Padbox)<{
  $variant?: BaseToastBannerProps['variant'];
  $iconAlign: string;
}>`
  background-color: ${({ $variant }) =>
    getColor(baseToastBannerColorVariants[$variant])};
  display: flex;
  align-items: ${({ $iconAlign }) => $iconAlign || 'center'};
`;

const IconWrapper = styled.div<{
  $iconSize: number;
}>`
  display: flex;
  align-items: center;
  width: ${({ $iconSize }) => pxToRem($iconSize)};
  height: ${({ $iconSize }) => pxToRem($iconSize)};
`;

const StyledIcon = styled(Icon)<{
  $variant?: BaseToastBannerWrapperProps['variant'];
  $iconPxSizesVariants: BaseToastBannerWrapperProps['iconPxSizesVariants'];
}>`
  color: ${({ $variant }) => getColor(iconColorVariants[$variant])};
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
  iconAlign = 'center',
}) => (
  <Inline stretch={stretch}>
    {isNotNilOrEmpty(variant) && (
      <IconPadbox
        $iconAlign={iconAlign}
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
