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

import { PillColorsEnums } from './Pill.enums';
import PillWrapper from './PillWrapper';
import PillLabel from './PillLabel';
import PillRemoveButton from './PillRemoveButton';
import { CLX_COMPONENT } from '../../theme/constants';

const Pill: FC<PillProps> = ({
  label,
  maxLabelLength = 16,
  isClickable = false,
  adornment,
  onClick,
  onRemove,
  className,
  color = PillColorsEnums.gray,
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
      color={color}
      isClickable={isPillClickable}
      {...clickableProps}
      {...props}
    >
      {adornment}
      <PillLabel
        $maxLength={maxLabelLength}
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
  color: PropTypes.oneOf(Object.values(PillColorsEnums)),
  adornment: PropTypes.node,
  maxLabelLength: PropTypes.number,
  isClickable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Pill;
