import type { FC, MouseEvent } from 'react';
import type { BannerProps } from './Banner.types';
import type {
  AbsoluteLinkActionKind,
  RelativeLinkActionKind,
} from '../../types/action.types';

import { forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { useContainerQuery } from 'react-container-query';
import { isNonEmptyArray, noop } from 'ramda-adjunct';
import cls from 'classnames';

import { BannerVariants } from './Banner.enums';
import { Button } from '../Button';
import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { Inline, Padbox, Stack } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Text as BaseText } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getLineHeight } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';
import { baseToastBannerColorVariants } from '../_internal/BaseToastBanner/BaseToastBanner';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { CLX_COMPONENT } from '../../theme/constants';

const iconPxSizesVariants = {
  [BannerVariants.info]: 16,
  [BannerVariants.warn]: 16,
  [BannerVariants.error]: 16,
  [BannerVariants.success]: 16,
};

const StyledPadbox = styled(Padbox)<{ $variant?: BannerProps['variant'] }>`
  background-color: ${({ $variant }) =>
    getColor(baseToastBannerColorVariants[$variant])};
`;

const StyledButton = styled(Button)<{ $variant?: BannerProps['variant'] }>`
  height: inherit;
  padding: 0;
  line-height: ${getLineHeight('md')};
`;

const ContentWrapper = styled(Padbox)`
  padding-left: 0;
`;

const Text = styled(BaseText)<{ $variant?: BannerProps['variant'] }>`
  max-width: 115ch;
  color: ${getColor('neutral.1000')};
`;

const CHANGE_LAYOUT_BREAKPOINT = 'change-banner-layout';

const BannerContent: FC<BannerProps> = ({ variant, children, actions }) => (
  <>
    <Text $variant={variant} as="div" size={TextSizes.md}>
      {children}
    </Text>
    {isNonEmptyArray(actions) && (
      <Inline gap={SpaceSizes.mdPlus}>
        {actions.map((action) => (
          <StyledButton
            key={action.name}
            $variant={variant}
            color={ButtonColors.secondary}
            href={(action as AbsoluteLinkActionKind<[MouseEvent]>).href}
            name={action.name}
            to={(action as RelativeLinkActionKind<[MouseEvent]>).to}
            variant={ButtonVariants.text}
            onClick={action.onClick}
          >
            {action.label}
          </StyledButton>
        ))}
      </Inline>
    )}
  </>
);

const Banner: FC<BannerProps> = forwardRef(
  (
    {
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
      changeLayoutBreakpoint = 960,
      ...props
    },
    ref,
  ) => {
    const changeLayoutQuery = useMemo(
      () => ({
        [CHANGE_LAYOUT_BREAKPOINT]: { minWidth: changeLayoutBreakpoint },
      }),
      [changeLayoutBreakpoint],
    );
    const [query, containerRef] = useContainerQuery(
      changeLayoutQuery,
      undefined,
    );
    const isInline = query[CHANGE_LAYOUT_BREAKPOINT];
    const mergedRef = mergeRefs(containerRef, ref);
    return (
      <StyledPadbox
        ref={mergedRef}
        $variant={variant}
        className={cls(CLX_COMPONENT, className)}
        paddingSize={SpaceSizes.sm}
        {...props}
      >
        <BaseToastBanner
          iconAlign="flex-start"
          iconPxSizesVariants={iconPxSizesVariants}
          iconSize={16}
          paddingSize={SpaceSizes.md}
          paddingType={PaddingTypes.square}
          stretch={StretchEnum.end}
          variant={variant}
        >
          <ContentWrapper paddingSize={SpaceSizes.md}>
            <Inline align="flex-start" gap={SpaceSizes.xl} stretch={1}>
              {isInline ? (
                <Inline
                  align="flex-start"
                  gap={SpaceSizes.md}
                  justify="space-between"
                >
                  <BannerContent actions={actions} variant={variant}>
                    {children}
                  </BannerContent>
                </Inline>
              ) : (
                <Stack align="center" gap={SpaceSizes.md}>
                  <BannerContent actions={actions} variant={variant}>
                    {children}
                  </BannerContent>
                </Stack>
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
          </ContentWrapper>
        </BaseToastBanner>
      </StyledPadbox>
    );
  },
);

Banner.displayName = 'Banner';

export default Banner;
