// eslint-disable-next-line filenames/match-exported
import type { CSSProperties, ElementType } from 'react';
import { useMemo } from 'react';

import type { ButtonV2Props } from './types';
import { pxToRem } from '../../utils';
import { Spinner } from '../Spinner';
import { getButtonSize, getCommonButtonStyles } from './utils';
import { ButtonIcon, ButtonRoot, Label } from './components';

const ButtonV2 = <E extends ElementType = 'button'>({
  children,
  as,
  elRef,
  variant = 'base',
  size = 'md',
  iconStart,
  iconEnd,
  minWidth,
  loadingText = 'Loading',
  isDisabled = false,
  isLoading = false,
  isExpanded = false,
  ...props
}: ButtonV2Props<E>) => {
  const Tag = as || 'button';
  const isButtonDisabled = isDisabled || isLoading;
  const buttonStyles = useMemo<CSSProperties>(
    () => ({
      ...getCommonButtonStyles({ variant, size, disabled: isButtonDisabled }),
      '--sscds-button-padding':
        size === 'lg'
          ? 'var(--sscds-space-3x) var(--sscds-space-4x)'
          : size === 'sm'
          ? 'var(--sscds-space-1x) var(--sscds-space-2x)'
          : 'var(--sscds-space-2x) var(--sscds-space-3x)',
      '--sscds-button-width': isExpanded ? '100%' : 'auto',
      '--sscds-button-width-min':
        typeof minWidth !== 'undefined' ? pxToRem(minWidth) : 'auto',
      '--sscds-button-height': getButtonSize(size),
    }),
    [variant, size, isExpanded, isButtonDisabled, minWidth],
  );

  return (
    <ButtonRoot
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={elRef as any}
      as={Tag}
      type={Tag === 'button' ? 'button' : undefined}
      {...props}
      disabled={isButtonDisabled}
      style={{
        ...buttonStyles,
        ...props.style,
      }}
    >
      {isLoading && (
        <Spinner
          borderWidth={3}
          height={16}
          horizontalMargin={0}
          verticalMargin={0}
          width={16}
          dark
        />
      )}
      {typeof iconStart !== 'undefined' && !isLoading && (
        <ButtonIcon size={size} {...iconStart} />
      )}
      <Label>{isLoading ? loadingText : children}</Label>
      {typeof iconEnd !== 'undefined' && !isLoading && (
        <ButtonIcon size={size} {...iconEnd} />
      )}
    </ButtonRoot>
  );
};

ButtonV2.displayName = 'ButtonV2';

export default ButtonV2;
