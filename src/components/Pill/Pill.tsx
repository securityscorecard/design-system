import React, { useMemo } from 'react';
import { gt } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styled from 'styled-components';

import { PillColorsEnums } from './Pill.enums';
import { PillProps } from './Pill.types';
import PillWrapper from './PillWrapper';
import PillLabel from './PillLabel';
import PillRemoveButton from './PillRemoveButton';
import { CLX_COMPONENT } from '../../theme/constants';

const AdornmentWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-inline-start: calc(
    var(--sscds-pill-padding-inline, var(--sscds-space-2x)) / -2
  ) !important;
  padding-block: var(--sscds-pill-padding-adornment-block);
  min-width: 1rem;
  min-height: 1rem;
`;

const Pill = ({
  title,
  label,
  size = 'md',
  maxLabelLength = 16,
  isClickable = false,
  adornment,
  onClick,
  onRemove,
  className,
  color = 'gray',
  ...props
}: PillProps) => {
  const isPillClickable = isNotUndefined(onClick) || isClickable;
  const isPillRemovable = isNotUndefined(onRemove);

  const pillStyles = useMemo(
    () => ({
      '--sscds-pill-size':
        size === 'sm'
          ? 'var(--sscds-font-lineheight-20)'
          : 'var(--sscds-font-lineheight-30)',
      '--sscds-pill-color-background': `var(--sscds-color-background-pill-${color}-default)`,
      '--sscds-pill-color-background-hover': `var(--sscds-color-background-pill-${color}-hover)`,
      '--sscds-pill-color-border': `var(--sscds-color-border-pill-${color}-default)`,
      '--sscds-pill-color-border-hover': `var(--sscds-color-border-pill-${color}-hover)`,
      '--sscds-pill-color-text': `var(--sscds-color-text-pill-${color})`,
      '--sscds-pill-padding-inline': 'var(--sscds-space-2x)',
      '--sscds-pill-padding-adornment-block':
        size === 'sm' ? 'var(--sscds-space-half-x)' : 'var(--sscds-space-1x)',
      '--sscds-pill-font-size':
        size === 'sm'
          ? 'var(--sscds-font-size-body-sm)'
          : 'var(--sscds-font-size-elementlabel-sm)',
      '--sscds-pill-font-weight':
        size === 'sm'
          ? 'var(--sscds-font-weight-body-default)'
          : 'var(--sscds-font-weight-elementlabel-default)',
    }),
    [size, color],
  );

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
      {...clickableProps}
      {...props}
      style={{
        ...pillStyles,
        ...props.style,
      }}
    >
      {typeof adornment !== 'undefined' && adornment !== null && (
        <AdornmentWrapper>{adornment}</AdornmentWrapper>
      )}
      <PillLabel
        $maxLength={maxLabelLength}
        title={gt(maxLabelLength, 0) ? title || label : undefined}
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
