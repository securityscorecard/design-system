import styled from 'styled-components';

import type { BaseIcon, Sizes } from './types';
import { Icon } from '../Icon';

export const ButtonRoot = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sscds-space-1x);
  border-radius: var(--sscds-radii-button);
  line-height: var(--sscds-font-lineheight-elementlabel);
  font-weight: var(--sscds-font-weight-elementlabel-default);
  white-space: nowrap;
  transition: var(--sscds-action-transition),
    transform 50ms var(--sscds-transition-fn);

  /* Size dependent */
  font-size: var(--sscds-button-font-size);
  padding: var(--sscds-button-padding);
  height: var(--sscds-button-size, var(--sscds-button-height));
  width: var(--sscds-button-size, var(--sscds-button-width));
  min-width: var(--sscds-button-width-min);

  /* Variant dependent */
  background: var(--sscds-button-color-background);
  color: var(--sscds-button-color-text);
  box-shadow: var(--sscds-button-color-border);

  &:hover {
    background: var(--sscds-button-color-background-hover);
  }
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    cursor: default;

    &:active {
      transform: none;
    }
  }
`;
export const Label = styled.span`
  padding: 0rem var(--sscds-space-1x);
`;

export function ButtonIcon({ name, type, size }: BaseIcon & { size: Sizes }) {
  return (
    <Icon
      name={name}
      size={size === 'sm' ? 'sm' : 'md'}
      type={type ?? 'ssc'}
      hasFixedSize
    />
  );
}
