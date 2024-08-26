import type { CSSProperties, ElementType } from 'react';
import { useMemo } from 'react';

import type { IconButtonProps } from './types';
import { forwardRefGenericComp } from '../../utils/forwardRefGenericComp';
import { Spinner } from '../Spinner';
import { getButtonSize, getCommonButtonStyles } from './utils';
import { ButtonIcon, ButtonRoot } from './components';

export function IconButtonPlain<E extends ElementType = 'button'>(
  {
    label,
    as,
    variant = 'base',
    size = 'md',
    iconName,
    iconType = 'ssc',
    iconRotation,
    isDisabled = false,
    isLoading = false,
    ...props
  }: IconButtonProps<E>,
  ref,
) {
  const Tag = as || 'button';
  const isButtonDisabled = isDisabled || isLoading;
  const buttonStyles = useMemo<CSSProperties>(
    () => ({
      ...getCommonButtonStyles({ variant, size, disabled: isButtonDisabled }),
      '--sscds-button-size': getButtonSize(size),
    }),
    [variant, size, isButtonDisabled],
  );

  return (
    <ButtonRoot
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      as={Tag}
      type={Tag === 'button' ? 'button' : undefined}
      {...props}
      aria-label={label}
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
      {!isLoading && (
        <ButtonIcon
          name={iconName}
          rotation={iconRotation}
          size={size}
          type={iconType}
        />
      )}
    </ButtonRoot>
  );
}

IconButtonPlain.displayName = 'IconButton';

export default forwardRefGenericComp(IconButtonPlain);
