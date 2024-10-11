import {
  Children,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  useState,
} from 'react';
import { ThemeConfig } from 'react-select/src/theme';
import {
  IndicatorComponentType,
  IndicatorContainerProps,
  MenuProps,
  OptionProps,
  StylesConfig,
  components,
} from 'react-select';
import { append, apply, assoc, both, includes, pick, pipe, take } from 'ramda';
import {
  isEmptyString,
  isNonEmptyArray,
  isNotNilOrEmpty,
  isNotUndefined,
} from 'ramda-adjunct';
import styled, { DefaultTheme } from 'styled-components';

import { Checkbox } from '../Checkbox';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import Button from '../../ButtonV2/Button';
import { Cluster, Inline } from '../../layout';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Icon } from '../../Icon';
import { MenuActionArgs, Option as OptionType } from './Select.types';
import { getPaddingSpace } from '../../../utils/space';
import { pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { Spinner } from '../../Spinner';
import PillWrapper from '../../Pill/PillWrapper';
import PillLabel from '../../Pill/PillLabel';
import PillRemoveButton from '../../Pill/PillRemoveButton';

export const reactSelectTheme: () => ThemeConfig = () => (selectTheme) => ({
  ...selectTheme,
  colors: {
    primary: 'var(--sscds-color-primary-8)',
    primary75: 'var(--sscds-color-primary-8)',
    primary50: 'var(--sscds-color-primary-6)',
    primary25: 'var(--sscds-color-primary-3)',
    danger: 'var(--sscds-color-danger-800)',
    dangerLight: 'var(--sscds-color-danger-050)',
    neutral0: 'var(--sscds-color-neutral-0)',
    neutral5: 'var(--sscds-color-neutral-2)',
    neutral10: 'var(--sscds-color-neutral-3)',
    neutral20: 'var(--sscds-color-neutral-4)',
    neutral30: 'var(--sscds-color-neutral-7)',
    neutral40: 'var(--sscds-color-neutral-8)',
    neutral50: 'var(--sscds-color-neutral-9)',
    neutral60: 'var(--sscds-color-neutral-10)',
    neutral70: 'var(--sscds-color-neutral-11)',
    neutral80: 'var(--sscds-color-neutral-12)',
    neutral90: 'var(--sscds-color-neutral-13)',
  },
  spacing: { ...selectTheme.spacing },
});

const stateStyles = (
  color: `var(--sscds-${string})`,
  width: `${string}px`,
) => ({
  boxShadow: `inset 0 0 0 ${width} ${color} !important`,
});

const invalidStyles = {
  ...stateStyles('var(--sscds-color-border-input-error)', '2px'),
};

const focusStyles = {
  ...stateStyles('var(--sscds-color-border-input-focused)', '2px'),
};

const disabledStyles = {
  ...stateStyles('var(--sscds-color-border-input-disabled)', '1px'),
  background: 'var(--sscds-color-background-input-disabled)',
};

const indicatorStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--sscds-color-icon-subtle)',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  ':hover': {
    color: 'var(--sscds-color-icon-default)',
  },
};

export const selectStyles: (
  DSTheme: DefaultTheme,
) => StylesConfig<OptionType, false> = (DSTheme) => {
  const menuItemPadding = pipe(
    getPaddingSpace,
    apply(pxToRem),
  )({
    paddingSize: SpaceSizes.md,
    paddingType: PaddingTypes.squish,
    theme: DSTheme,
  });

  return {
    control: (_, { selectProps, isDisabled, isFocused }) => {
      const { isInvalid, className = '' } = selectProps;
      return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        minHeight: DSTheme.forms.fieldHeight,
        background: 'var(--sscds-color-background-input-default)',
        boxShadow: `inset 0 0 0 1px var(--sscds-color-border-input-default)`,
        borderRadius: 'var(--sscds-radii-input)',
        color: 'var(--sscds-color-text-default)',
        fontSize: 'var(--sscds-font-size-body-md)',
        lineHeight: 'var(--sscds-font-lineheight-body-md)',
        outline: 'none',
        ':hover': {
          boxShadow:
            'inset 0px 0px 0px 1px var(--sscds-color-border-input-hover)',
          background: 'var(--sscds-color-background-input-hover)',
        },
        ...(isInvalid && invalidStyles),
        ...((isFocused || includes('focus', className)) && focusStyles),
        ...(isDisabled && disabledStyles),
      };
    },
    valueContainer: (styles, { selectProps: { isMulti, value } }) => {
      return {
        ...styles,
        display: 'flex',
        alignItems: 'center',
        fontSize: 'var(--sscds-font-size-body-md)',
        lineHeight: 'var(--sscds-font-lineheight-body-md)',
        padding: 'var(--sscds-space-1x)',
        paddingLeft:
          isMulti && isNotNilOrEmpty(value)
            ? undefined
            : 'var(--sscds-space-4x)',
      };
    },
    singleValue: assoc('margin', 0),
    multiValue: () => ({}),
    multiValueContainer: () => ({}),
    multiValueLabel: () => ({}),
    multiValueRemove: () => ({}),
    // Disable TS because types are wrong for Input component
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    input: (_, { selectProps: { isMulti } }) => ({
      ...(!isMulti ? { margin: 0 } : {}),
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      '> div > input': {
        fontFamily: 'var(--sscds-font-family-body)',
        lineHeight: 'var(--sscds-font-lineheight-body-md)',
      },
    }),
    placeholder: (_, { children }) => ({
      color: 'var(--sscds-color-text-subtle)',
      fontSize: 'var(--sscds-font-size-body-md)',
      lineHeight: 'var(--sscds-font-lineheight-body-md)',
      display: isEmptyString(children) ? 'none' : 'block',
      position: 'absolute',
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      alignItems: 'flex-start',
      padding: 'var(--sscds-space-1x)',
      paddingLeft: 0,
    }),
    indicatorSeparator: (
      styles,
      { hasValue, selectProps: { isClearable, isProcessing } },
    ) => ({
      ...styles,
      display: (isClearable && hasValue) || isProcessing ? 'block' : 'none',
      backgroundColor: 'var(--sscds-color-border-default)',
      height: 'calc(100% - var(--sscds-space-2x))',
      margin: 'var(--sscds-space-1x) 0',
    }),
    dropdownIndicator: () => indicatorStyles,
    clearIndicator: (_, { selectProps: { isProcessing } }) => ({
      ...indicatorStyles,
      display: isProcessing ? 'none' : 'flex',
      ':hover': {
        color: 'var(--sscds-color-text-danger)',
        backgroundColor: 'transparent',
      },
      ':focus': {
        color: 'var(--sscds-color-text-danger)',
      },
    }),
    menu: (styles, { selectProps: { isMenuPositionRelative } }) => ({
      ...styles,
      ...(isMenuPositionRelative ? { position: 'relative' } : {}),
      backgroundColor: 'var(--sscds-color-background-surface-default)',
      border: `1px solid var(--sscds-color-border-surface-default)`,
      borderRadius: 'var(--sscds-radii-surface-md)',
      boxShadow: 'var(--sscds-shadow-1x)',
      marginBottom: 'var(--sscds-space-1x)',
      marginTop: 'var(--sscds-space-1x)',
      paddingTop: 'var(--sscds-space-2x)',
      paddingBottom: 'var(--sscds-space-2x)',
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0,
    }),
    option: (styles, { isDisabled, isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: isSelected
        ? 'var(--sscds-color-background-selectable-active)'
        : isFocused
        ? 'var(--sscds-color-background-selectable-hover)'
        : 'transparent',
      color: isDisabled
        ? 'var(--sscds-color-text-disabled)'
        : 'var(--sscds-color-text-default)',
      fontSize: 'var(--sscds-font-size-body-md)',
      lineHeight: 'var(--sscds-font-lineheight-body-md)',
      padding: menuItemPadding,
      ':active': {
        ...styles[':active'],
        backgroundColor: 'var(--sscds-color-background-selectable-active)',
      },
    }),
    group: (styles) => ({
      ...styles,
      padding: 0,
      marginTop: 'var(--sscds-space-2x)',
    }),
    groupHeading: (styles) => ({
      ...styles,
      fontWeight: 'var(--sscds-font-weight-body-strong)',
      color: 'var(--sscds-color-text-default)',
      fontSize: 'var(--sscds-font-size-body-md)',
      lineHeight: 'var(--sscds-font-lineheight-body-md)',
      textTransform: 'none',
      margin: 0,
      padding: menuItemPadding,
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      padding: menuItemPadding,
      fontSize: 'var(--sscds-font-size-body-md)',
      lineHeight: 'var(--sscds-font-lineheight-body-md)',
      color: 'var(--sscds-color-text-subtle)',
      textAlign: 'left',
    }),
  };
};

/* eslint-disable react/prop-types */
export const DropdownIndicator: IndicatorComponentType<OptionType, boolean> = (
  props,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name={SSCIconNames.angleDown} type={IconTypes.ssc} />
    </components.DropdownIndicator>
  );
};

export const ClearIndicator: IndicatorComponentType<OptionType, boolean> = (
  props,
) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon name={SSCIconNames.times} type={IconTypes.ssc} />
    </components.ClearIndicator>
  );
};

type InnerProps = {
  id: string;
  key: string;
  onClick: MouseEventHandler<HTMLElement>;
  onMouseMove: MouseEventHandler<HTMLElement>;
  onMouseOver: MouseEventHandler<HTMLElement>;
  tabIndex: number;
};
export const MultiValueContainer: ComponentType<{
  children: ReactNode;
  innerProps: InnerProps;
}> = ({ children, innerProps, ...props }) => (
  <PillWrapper isClickable={false} {...innerProps} {...props}>
    {children}
  </PillWrapper>
);

export const MultiValueLabel = ({
  children,
  innerProps,
  selectProps,
  ...props
}) => (
  <PillLabel
    $maxLength={selectProps.maxPillLabelLength}
    title={props.data.label}
    {...innerProps}
  >
    {children}
  </PillLabel>
);

export const MultiValueRemove: ComponentType<{
  data: OptionType;
  innerProps: InnerProps;
}> = ({ innerProps, ...props }) => (
  <PillRemoveButton pillLabel={props.data.label} {...innerProps} {...props} />
);

const ActionsMenu = styled.div`
  margin-top: var(--sscds-space-2x);
  border-top: 1px solid var(--sscds-color-border-surface-default);
  padding-top: var(--sscds-space-2x);
`;

const SelectActionButton = styled(Button)`
  justify-content: flex-start;
  border-radius: 0;
`;

const getActionProps: (
  props: MenuProps<OptionType, boolean>,
) => MenuActionArgs<boolean> = pick([
  'clearValue',
  'getStyles',
  'getValue',
  'hasValue',
  'isMulti',
  'options',
  'selectOption',
  'selectProps',
  'setValue',
]);

export const Menu: ComponentType<MenuProps<OptionType, boolean>> = (props) => {
  const {
    children,
    selectProps: { inputValue, menuActions },
  } = props;

  const actionProps = getActionProps(props);

  return (
    <components.Menu {...props}>
      <>
        {children}
        {isEmptyString(inputValue) &&
          both(isNotUndefined, isNonEmptyArray)(menuActions) && (
            <ActionsMenu>
              {menuActions.map((action) => (
                <SelectActionButton
                  key={action.name}
                  variant="highlight-ghost"
                  isExpanded
                  onClick={() => action.onClick(actionProps)}
                >
                  {action.label}
                </SelectActionButton>
              ))}
            </ActionsMenu>
          )}
      </>
    </components.Menu>
  );
};

export const ValueContainer = (props) => {
  const {
    children,
    selectProps: { isMulti, maxVisibleItem },
    getValue,
  } = props;
  const [showAllItems, setShowAllItems] = useState(false);

  if (isMulti) {
    const qty = getValue().length;
    const [values, input] = children;
    const selectedValues = Children.toArray(values);

    const pills =
      isNotUndefined(maxVisibleItem) && !showAllItems && qty > maxVisibleItem
        ? pipe(
            take(maxVisibleItem),
            append(
              <PillWrapper
                key="more-items"
                isClickable
                onClick={() => setShowAllItems(true)}
              >
                <PillLabel>+ {qty - maxVisibleItem} more</PillLabel>
              </PillWrapper>,
            ),
          )(selectedValues)
        : values;
    return (
      <components.ValueContainer {...props}>
        <Cluster align="center" gap={SpaceSizes.xs}>
          {pills}
          {input}
        </Cluster>
      </components.ValueContainer>
    );
  }

  return <components.ValueContainer {...props} />;
};

const CreateNewOption = styled.div`
  cursor: pointer;
  color: var(--sscds-color-text-action);
`;

const StyledCheckbox = styled(Checkbox)`
  & label {
    /* the htmlFor attributes makes the label clickable which disrupts the row selection */
    pointer-events: none;
  }
`;

export const Option: ComponentType<OptionProps<OptionType, boolean>> = (
  props,
) => {
  const {
    children,
    isMulti,
    isSelected,
    isDisabled,
    label,
    data: { __isNew__: isCreateNewOption },
  } = props;
  if (isCreateNewOption) {
    return (
      <components.Option {...props}>
        <CreateNewOption>
          <Inline align="center" gap={SpaceSizes.sm}>
            <Icon name="plus" />
            {label}
          </Inline>
        </CreateNewOption>
      </components.Option>
    );
  }
  if (!isMulti) {
    return <components.Option {...props} />;
  }

  return (
    <div>
      <components.Option {...props}>
        <Inline gap={SpaceSizes.sm}>
          <StyledCheckbox
            checkboxId={`select-${label}`}
            checked={isSelected}
            isDisabled={isDisabled}
            label={children}
            name={label}
            readOnly
          />
        </Inline>
      </components.Option>
    </div>
  );
};

export const IndicatorsContainer: ComponentType<
  IndicatorContainerProps<OptionType, boolean>
> = (props) => {
  const {
    children,
    selectProps: { isProcessing },
  } = props;

  return (
    <components.IndicatorsContainer {...props}>
      {isProcessing && (
        <Spinner
          borderWidth={2}
          height={16}
          horizontalMargin={16}
          verticalMargin={6}
          width={16}
          dark
        />
      )}
      {children}
    </components.IndicatorsContainer>
  );
};
/* eslint-enable react/prop-types */
