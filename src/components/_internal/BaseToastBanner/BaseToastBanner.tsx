import styled from 'styled-components';
import { isNotNilOrEmpty } from 'ramda-adjunct';

import { BaseToastBannerVariants } from './BaseToastBanner.enums';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Padbox } from '../../layout/Padbox';
import { Inline } from '../../layout/Inline';
import { Icon } from '../../Icon';
import {
  BaseToastBannerProps,
  BaseToastBannerWrapperProps,
} from './BaseToastBanner.types';
import { Spinner } from '../../Spinner';

export const baseToastBannerColorVariants = {
  [BaseToastBannerVariants.info]: 'var(--sscds-color-info-050)',
  [BaseToastBannerVariants.warn]: 'var(--sscds-color-warning-050)',
  [BaseToastBannerVariants.error]: 'var(--sscds-color-danger-050)',
  [BaseToastBannerVariants.success]: 'var(--sscds-color-success-050)',
  [BaseToastBannerVariants.loading]: 'var(--sscds-color-neutral-3)',
};

const iconVariants = {
  [BaseToastBannerVariants.info]: SSCIconNames.infoCircleOutline,
  [BaseToastBannerVariants.warn]: SSCIconNames.errorCircle,
  [BaseToastBannerVariants.error]: SSCIconNames.exclTriangle,
  [BaseToastBannerVariants.success]: SSCIconNames.check,
  [BaseToastBannerVariants.loading]: null,
};

const iconColorVariants = {
  [BaseToastBannerVariants.info]: 'var(--sscds-color-icon-info)',
  [BaseToastBannerVariants.warn]: 'var(--sscds-color-icon-warning)',
  [BaseToastBannerVariants.error]: 'var(--sscds-color-icon-danger)',
  [BaseToastBannerVariants.success]: 'var(--sscds-color-icon-success)',
} as const;

const IconPadbox = styled(Padbox)<{
  $variant?: BaseToastBannerProps['variant'];
}>`
  background-color: ${({ $hasBackground, $variant }) =>
    $hasBackground ? baseToastBannerColorVariants[$variant] : undefined};
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 1.25rem;
  height: 1.25rem;
`;

const BaseToastBanner = ({
  children,
  variant,
  paddingType,
  hasBackground = true,
}: BaseToastBannerWrapperProps) => (
  <Inline stretch="end">
    {isNotNilOrEmpty(variant) && (
      <IconPadbox
        $hasBackground={hasBackground}
        $variant={variant}
        paddingSize="md"
        paddingType={paddingType}
      >
        <IconWrapper>
          {variant === 'loading' ? (
            <Spinner
              borderWidth={2}
              height={16}
              verticalMargin={0}
              width={16}
              dark
            />
          ) : (
            <Icon
              color={iconColorVariants[variant]}
              name={iconVariants[variant]}
              size="sm"
              hasFixedSize
            />
          )}
        </IconWrapper>
      </IconPadbox>
    )}
    {children}
  </Inline>
);

export default BaseToastBanner;
