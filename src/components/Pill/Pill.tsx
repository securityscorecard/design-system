import React from 'react';
import { gt } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { PillSizes, PillVariants } from './Pill.enums';
import { PillProps } from './Pill.types';
import PillWrapper from './PillWrapper';
import PillLabel from './PillLabel';
import PillRemoveButton from './PillRemoveButton';
import { CLX_COMPONENT } from '../../theme/constants';

const Pill: React.FC<PillProps> = ({
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

  const handleOnClick: React.EventHandler<
    React.MouseEvent | React.KeyboardEvent
  > = (e) => {
    if (isNotUndefined(onClick)) {
      onClick(e);
    }
  };
  const handleOnKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        handleOnClick(e);
        break;
      default:
    }
  };

  const handleOnRemove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onRemove(e);
  };
  const handleRemoveOnKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (
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

Pill.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(PillVariants)),
  size: PropTypes.oneOf(Object.values(PillSizes)),
  adornment: PropTypes.node,
  maxLabelLength: PropTypes.number,
  isClickable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Pill;
