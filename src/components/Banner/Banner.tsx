import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNonEmptyArray, noop } from 'ramda-adjunct';
import cls from 'classnames';

import { BannerProps } from './Banner.types';
import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../types/action.types';
import * as CustomPropTypes from '../../types/customPropTypes';
import { BannerVariants } from './Banner.enums';
import { Button } from '../Button';
import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Text as BaseText } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getLineHeight } from '../../utils';
import { ColorTypes } from '../../theme/colors.enums';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';
import { baseToastBannerColorVariants } from '../_internal/BaseToastBanner/BaseToastBanner';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { CLX_COMPONENT } from '../../theme/constants';

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
  border-color: ${({ $variant }) =>
    getColor(baseToastBannerColorVariants[$variant])};
  background-color: ${({ $variant }) => getColor(bgVariants[$variant])};
`;

const StyledButton = styled(Button)`
  height: inherit;
  padding: 0;
  line-height: ${getLineHeight('md')};
`;

const Text = styled(BaseText)`
  max-width: 125ch;
`;

const Banner: React.FC<BannerProps> = ({
  children,
  variant = BannerVariants.info,
  actions,
  isDismissable = true,
  onClose = noop,
  __hasPagination = false,
  __onPrev,
  __onNext,
  __isFirst,
  __isLast,
  __current,
  __total,
  className,
  ...props
}) => {
  return (
    <StyledPadbox
      $variant={variant}
      {...props}
      className={cls(CLX_COMPONENT, className)}
    >
      <BaseToastBanner
        iconPxSizesVariants={iconPxSizesVariants}
        iconSize={24}
        paddingSize={SpaceSizes.mdPlus}
        paddingType={PaddingTypes.squish}
        stretch={StretchEnum.end}
        variant={variant}
      >
        <Padbox paddingSize={SpaceSizes.md}>
          <Inline
            align="flex-start"
            gap={SpaceSizes.mdPlus}
            stretch={StretchEnum.start}
          >
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
            {__hasPagination && (
              <Inline gap={SpaceSizes.sm}>
                <StyledButton
                  aria-label="Show previous banner"
                  isDisabled={__isFirst}
                  variant="text"
                  onClick={__onPrev}
                >
                  <Icon name={SSCIconNames.angleLeft} />
                </StyledButton>
                <Text as="div" size={TextSizes.md}>
                  {__current} of {__total}
                </Text>
                <StyledButton
                  aria-label="Show next banner"
                  isDisabled={__isLast}
                  variant="text"
                  onClick={__onNext}
                >
                  <Icon name={SSCIconNames.angleRight} />
                </StyledButton>
              </Inline>
            )}
            {isDismissable && (
              <CloseButton
                aria-label="Close banner"
                marginCompensation={SpaceSizes.md}
                onClose={onClose}
              />
            )}
          </Inline>
        </Padbox>
      </BaseToastBanner>
    </StyledPadbox>
  );
};

Banner.propTypes = {
  variant: PropTypes.oneOf(Object.values(BannerVariants)),
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType),
  isDismissable: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func,
};
Banner.displayName = 'Banner';

export default Banner;
