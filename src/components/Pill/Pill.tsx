import type {
  EventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import type { PillProps } from './Pill.types';

import { forwardRef } from 'react';
import { gt } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { PillSizes, PillVariants } from './Pill.enums';
import PillWrapper from './PillWrapper';
import PillLabel from './PillLabel';
import PillRemoveButton from './PillRemoveButton';
import { CLX_COMPONENT } from '../../theme/constants';

const Pill: FC<PillProps> = forwardRef<HTMLSpanElement, PillProps>(
  (
    {
      label,
      variant = PillVariants.solid,
      size = PillSizes.sm,
      maxLabelLength = 16,
      isClickable = false,
      adornment,
      onClick,
      onRemove,
      className,
      ...props
    },
    ref,
  ) => {
    const isPillClickable = isNotUndefined(onClick) || isClickable;
    const isPillRemovable = isNotUndefined(onRemove);

    const handleOnClick: EventHandler<MouseEvent | KeyboardEvent> = (e) => {
      if (isNotUndefined(onClick)) {
        onClick(e);
      }
    };
    const handleOnKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
          handleOnClick(e);
          break;
        default:
      }
    };

    const handleOnRemove: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      onRemove(e);
    };
    const handleRemoveOnKeyDown: KeyboardEventHandler<HTMLButtonElement> = (
      e,
    ) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          onRemove(e);
          break;
        default:
      }
    };

    const clickableProps = isPillClickable
      ? {
          onClick: handleOnClick,
          onKeyDown: handleOnKeyDown,
          tabIndex: 0,
        }
      : {};

    return (
      <PillWrapper
        ref={ref}
        className={cls(CLX_COMPONENT, className)}
        isClickable={isPillClickable}
        size={size}
        variant={variant}
        {...clickableProps}
        {...props}
      >
        {adornment}
        <PillLabel
          $maxLength={maxLabelLength}
          $size={size}
          title={gt(maxLabelLength, 0) ? label : undefined}
        >
          {label}
        </PillLabel>
        {isPillRemovable && (
          <PillRemoveButton
            pillLabel={label}
            onClick={handleOnRemove}
            onKeyDown={handleRemoveOnKeyDown}
          />
        )}
      </PillWrapper>
    );
  },
);

export default Pill;
