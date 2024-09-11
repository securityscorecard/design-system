import React, { useMemo } from 'react';
import styled from 'styled-components';
import { isNonEmptyArray, noop } from 'ramda-adjunct';
import cls from 'classnames';

import { BannerContentProps, BannerProps } from './Banner.types';
import {
  AbsoluteLinkActionKind,
  RelativeLinkActionKind,
} from '../../types/action.types';
import { BannerVariants } from './Banner.enums';
import { Button } from '../Button';
import { Inline, Padbox, Stack } from '../layout';
import { Text } from '../Text';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';
import { baseToastBannerColorVariants } from '../_internal/BaseToastBanner/BaseToastBanner';
import { CLX_COMPONENT } from '../../theme/constants';
import { useContainerQuery } from '../../hooks/useContainerQuery';

const bannerBorderColor = {
  [BannerVariants.info]: 'var(--sscds-color-border-info)',
  [BannerVariants.warn]: 'var(--sscds-color-border-warning)',
  [BannerVariants.error]: 'var(--sscds-color-border-danger)',
  [BannerVariants.success]: 'var(--sscds-color-border-success)',
};

const StyledPadbox = styled(Padbox)<{ $variant?: BannerProps['variant'] }>`
  background-color: ${({ $variant }) => baseToastBannerColorVariants[$variant]};
  border-radius: var(--sscds-radii-surface-md);
  border: 1px solid ${({ $variant }) => bannerBorderColor[$variant]};
`;

const ContentWrapper = styled(Padbox)`
  padding-left: 0rem;
`;

const CHANGE_LAYOUT_BREAKPOINT = 'change-banner-layout';

const BannerContent = ({ children, actions, isInline }: BannerContentProps) => (
  <>
    <Text as="div" style={{ maxWidth: '115ch' }}>
      {children}
    </Text>
    {isNonEmptyArray(actions) && (
      <Inline
        gap="md"
        style={{ marginBlock: isInline ? '-0.375rem' : undefined }}
      >
        {actions.map((action) => (
          <Button
            key={action.name}
            href={(action as AbsoluteLinkActionKind<[React.MouseEvent]>).href}
            name={action.name}
            style={{ height: '2rem' }}
            to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
            variant="outline"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </Inline>
    )}
  </>
);

const Banner = ({
  children,
  variant = BannerVariants.info,
  actions,
  isDismissable = true,
  onClose = noop,
  className,
  changeLayoutBreakpoint = 960,
  ...props
}: BannerProps) => {
  const changeLayoutQuery = useMemo(
    () => ({
      [CHANGE_LAYOUT_BREAKPOINT]: { minWidth: changeLayoutBreakpoint },
    }),
    [changeLayoutBreakpoint],
  );
  const [query, containerRef] = useContainerQuery(changeLayoutQuery);
  const isInline = query[CHANGE_LAYOUT_BREAKPOINT];
  return (
    <StyledPadbox
      ref={containerRef}
      $variant={variant}
      className={cls(CLX_COMPONENT, className)}
      {...props}
    >
      <BaseToastBanner hasBackground={false} variant={variant}>
        <ContentWrapper paddingSize="md">
          <Inline align="flex-start" gap="xl" stretch={1}>
            {isInline ? (
              <Inline align="flex-start" gap="md" justify="space-between">
                <BannerContent actions={actions} isInline>
                  {children}
                </BannerContent>
              </Inline>
            ) : (
              <Stack align="center" gap="md">
                <BannerContent actions={actions}>{children}</BannerContent>
              </Stack>
            )}
            {isDismissable && (
              <CloseButton
                aria-label="Close banner"
                marginCompensation="md"
                style={{ marginBlock: '0.125rem' }}
                onClose={onClose}
              />
            )}
          </Inline>
        </ContentWrapper>
      </BaseToastBanner>
    </StyledPadbox>
  );
};

Banner.displayName = 'Banner';

export default Banner;
