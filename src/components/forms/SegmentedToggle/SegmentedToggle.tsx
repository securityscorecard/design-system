import {
  type ChangeEventHandler,
  type ComponentPropsWithRef,
  type ReactNode,
  forwardRef,
  useMemo,
} from 'react';
import cls from 'classnames';
import styled, { css } from 'styled-components';

import { Inline, Padbox } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';
import { createCtx } from '../../../managers/common/createCtx';
import ElementLabel from '../../ElementLabel/ElementLabel';

export interface SegmentedToggleItemProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label: string;
  value: string | number;
  itemId: string;
}

export interface SegmentedToggleProps {
  children: ReactNode;
  /**
   * The group is used to identify the SegmentedToggle within the form
   */
  group: string;
  /**
   * Indicates if the SegmentedToggle is disabled or not.
   */
  isDisabled?: boolean;
  /**
   * Should the SegmentedToggle be expanded to full available width.
   */
  isExpanded?: boolean;
  /**
   * Callback when the SegmentedToggle has changed.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

type SegmentedToggleContext = {
  name: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
};

const { useContext, Provider } = createCtx<SegmentedToggleContext>(
  'SegmentedToggle',
  'The SegmentedToggleItem has to be a child of the SegmentedToggle component.',
);

const SegmentedToggleRoot = styled(Padbox)`
  display: inline-block;
  background-color: var(--sscds-color-neutral-alpha-3);
  box-shadow: inset 0 0 0 1px var(--sscds-color-neutral-alpha-3);
  border-radius: var(--sscds-radii-input);
  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      width: 100%;
      flex-grow: 1;
    `};
`;

export const SegmentedToggle = forwardRef<HTMLDivElement, SegmentedToggleProps>(
  (
    {
      group,
      isDisabled = false,
      children,
      onChange,
      className,
      isExpanded = false,
      ...props
    },
    ref,
  ) => {
    const value = useMemo(
      () => ({
        name: group,
        disabled: isDisabled,
        onChange,
      }),
      [group, isDisabled, onChange],
    );

    return (
      <Provider value={value}>
        <SegmentedToggleRoot
          ref={ref}
          className={cls(CLX_COMPONENT, className)}
          {...props}
          $isExpanded={isExpanded}
          paddingSize="1x"
        >
          <Inline
            gap="2x"
            role="radiogroup"
            stretch={isExpanded ? 'all' : undefined}
          >
            {children}
          </Inline>
        </SegmentedToggleRoot>
      </Provider>
    );
  },
);

const SegmentedToggleItemRoot = styled.div`
  display: flex;
`;

const SegmentedToggleLabel = styled.label`
  display: block;
  width: 100%;
  padding: var(--sscds-space-1x) var(--sscds-space-2x);
  text-align: center;
  transition: var(--sscds-action-transition);
`;

const Radio = styled.input`
  /* transform: translateX(-100%); */
  position: absolute;
  pointer-events: none;
  opacity: 0;
  margin: 0;

  + ${SegmentedToggleLabel} {
    color: var(--sscds-color-text-default);
    border-radius: var(--sscds-radii-default);
  }

  :hover + ${SegmentedToggleLabel} {
    background-color: var(--sscds-color-neutral-alpha-3);
  }
  :focus-visible + ${SegmentedToggleLabel} {
    outline: 2px solid var(--sscds-color-border-action-focused);
  }

  :checked + ${SegmentedToggleLabel} {
    background-color: var(--sscds-color-neutral-0);
    box-shadow: var(--sscds-shadow-1x);
  }

  :checked:disabled + ${SegmentedToggleLabel} {
    background-color: var(--sscds-color-background-action-base-disabled);
    color: var(--sscds-color-text-disabled);
    box-shadow: none;
  }

  :disabled + ${SegmentedToggleLabel} {
    color: var(--sscds-color-text-disabled);
    &:hover {
      color: var(--sscds-color-text-disabled);
      background-color: transparent;
    }
  }
`;

export const SegmentedToggleItem = forwardRef<
  HTMLInputElement,
  SegmentedToggleItemProps
>(({ label, value, itemId, ...props }, ref) => {
  const { name, disabled, onChange } = useContext();

  return (
    <SegmentedToggleItemRoot>
      <Radio
        ref={ref}
        id={itemId}
        type="radio"
        value={value}
        {...props}
        disabled={disabled}
        name={name}
        onChange={onChange}
      />
      <SegmentedToggleLabel htmlFor={itemId}>
        <ElementLabel color={disabled ? 'disabled' : 'default'}>
          {label}
        </ElementLabel>
      </SegmentedToggleLabel>
    </SegmentedToggleItemRoot>
  );
});
