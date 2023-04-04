import type {
  EventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import type { PillProps } from './Pill.types';

import { gt } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { PillSizes, PillVariants } from './Pill.enums';
import PillWrapper from './PillWrapper';
import PillLabel from './PillLabel';
import PillRemoveButton from './PillRemoveButton';
import { CLX_COMPONENT } from '../../theme/constants';

const Pill: FC<PillProps> = ({
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
}) => {
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
};

Pill.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Element rendered before the label.
   */
  adornment: PropTypes.node,
  as: PropTypes.elementType,
  className: PropTypes.string,
  /**
   * Flag that enabled hover functionality on the pill. This should be used only when
   * passing custom element (e.g. `a` tag) throught the `as` property without passing
   * `onClick` property.
   */
  isClickable: PropTypes.bool,
  /**
   * Pill text
   */
  label: PropTypes.string.isRequired,
  /**
   * Maximal number of characters to display without truncation. If label is longer
   * that the limit it will be truncated with the ellipsis. Pass `0` to disable truncation.
   */
  maxLabelLength: PropTypes.number,
  /**
   * Callback called when the pill is clicked. Hover functionality is enabled when this
   * property is passed in, this can be overriden by `isClickable` property when using
   * custom element such as `a` tag without `onClick` property.
   */
  onClick: PropTypes.func,
  /**
   * Callback called when remove button is clicked. Remove button is rendered
   * only when this property is defined.
   */
  onRemove: PropTypes.func,
  /**
   * Size of the pill
   */
  size: PropTypes.oneOf(['md', 'sm']),
  /**
   * Styling variant of the pill
   */
  variant: PropTypes.oneOf(['outline', 'solid']),
} as any;

export default Pill;
