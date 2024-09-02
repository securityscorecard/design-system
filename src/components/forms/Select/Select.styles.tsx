import React, { ComponentType, ReactNode, useState } from 'react';
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
import { getColor, getSpace, getToken, pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { Spinner } from '../../Spinner';
import PillWrapper from '../../Pill/PillWrapper';
import PillLabel from '../../Pill/PillLabel';
import PillRemoveButton from '../../Pill/PillRemoveButton';

export const reactSelectTheme: (DSTheme: DefaultTheme) => ThemeConfig =
  () => (selectTheme) => ({
    ...selectTheme,
    colors: {
      primary: 'var(--sscds-primary-400)',
      primary75: 'var(--sscds-primary-400)',
      primary50: 'var(--sscds-primary-200)',
      primary25: 'var(--sscds-primary-50)',
      danger: 'var(--sscds-error-500)',
      dangerLight: 'var(--sscds-error-50)',
      neutral0: 'var(--sscds-neutral-0)',
      neutral5: 'var(--sscds-neutral-100)',
      neutral10: 'var(--sscds-neutral-200)',
      neutral20: 'var(--sscds-neutral-300)',
      neutral30: 'var(--sscds-neutral-400)',
      neutral40: 'var(--sscds-neutral-500)',
      neutral50: 'var(--sscds-neutral-600)',
      neutral60: 'var(--sscds-neutral-700)',
      neutral70: 'var(--sscds-neutral-800)',
      neutral80: 'var(--sscds-neutral-900)',
      neutral90: 'var(--sscds-neutral-1000)',
    },
    spacing: { ...selectTheme.spacing },
  });

const stateStyles = (color, width) => ({
  boxShadow: `inset 0 0 0 ${width} ${color}`,
});

const invalidStyles = (DSTheme) => ({
  ...stateStyles(
    DSTheme.forms.invalidBorderColor,
    DSTheme.forms.statefulBorderWidth,
  ),
});

const focusStyles = (DSTheme) => ({
  ...stateStyles(
    DSTheme.forms.focusBorderColor,
    DSTheme.forms.statefulBorderWidth,
  ),
});

const disabledStyles = (DSTheme) => ({
  ...stateStyles(DSTheme.forms.disabledBorderColor, DSTheme.forms.borderWidth),
  background: DSTheme.forms.disabledBgColor,
});

const indicatorStyles = (DSTheme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: DSTheme.forms.indicatorColor,
  cursor: 'pointer',
  padding: `0rem ${pxToRem(18)}`,
  height: pxToRem(34),
  margin: pxToRem(1, 0),
  ':hover': {
    color: DSTheme.forms.hoverIndicatorColor,
  },
});

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
        background: DSTheme.forms.bgColor,
        boxShadow: `inset 0 0 0 ${DSTheme.forms.borderWidth} ${DSTheme.forms.borderColor}`,
        borderRadius: DSTheme.radii.default,
        color: DSTheme.forms.color,
        fontSize: DSTheme.typography.size.md,
        lineHeight: DSTheme.forms.fieldLineHeight,
        outline: 'none',

        ...(isInvalid && invalidStyles(DSTheme)),
        ...((isFocused || includes('focus', className)) &&
          focusStyles(DSTheme)),
        ...(isDisabled && disabledStyles(DSTheme)),
      };
    },
    valueContainer: (styles, { selectProps: { isMulti, value } }) => {
      return {
        ...styles,
        display: 'flex',
        alignItems: 'center',
        fontSize: DSTheme.typography.size.md,
        lineHeight: DSTheme.typography.lineHeight.md,
        padding: pxToRem(DSTheme.space.xs),
        paddingLeft:
          isMulti && isNotNilOrEmpty(value)
            ? undefined
            : pxToRem(DSTheme.space.md),
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
        fontFamily: DSTheme.typography.family.base,
        lineHeight: DSTheme.forms.fieldLineHeight,
      },
    }),
    placeholder: (_, { children }) => ({
      color: DSTheme.forms.placeholderColor,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      display: isEmptyString(children) ? 'none' : 'block',
      position: 'absolute',
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      alignItems: 'flex-start',
    }),
    indicatorSeparator: (
      styles,
      { hasValue, selectProps: { isClearable, isProcessing } },
    ) => ({
      ...styles,
      display: (isClearable && hasValue) || isProcessing ? 'block' : 'none',
      backgroundColor: DSTheme.colors.neutral[500],
      margin: pxToRem(DSTheme.space.xs, 0),
    }),
    dropdownIndicator: () => ({
      ...indicatorStyles(DSTheme),
    }),
    clearIndicator: (_, { selectProps: { isProcessing } }) => ({
      ...indicatorStyles(DSTheme),
      display: isProcessing ? 'none' : 'flex',
      ':hover': {
        color: DSTheme.colors.error[500],
        backgroundColor: 'transparent',
      },
      ':focus': {
        color: DSTheme.colors.error[500],
      },
    }),
    menu: (styles, { selectProps: { isMenuPositionRelative } }) => ({
      ...styles,
      ...(isMenuPositionRelative ? { position: 'relative' } : {}),
      border: `1px solid ${DSTheme.colors.neutral[300]}`,
      boxShadow: `0px 1px 4px var(--sscds-slateA-slateA6)`,
      marginBottom: pxToRem(DSTheme.space.xs),
      marginTop: pxToRem(DSTheme.space.xs),
      paddingTop: pxToRem(DSTheme.space.sm),
      paddingBottom: pxToRem(DSTheme.space.sm),
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0,
    }),
    option: (styles, { isDisabled, isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: isSelected
        ? DSTheme.colors.neutral[300]
        : isFocused
        ? DSTheme.colors.primary[50]
        : 'transparent',
      color: isDisabled ? DSTheme.colors.neutral[600] : DSTheme.forms.color,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      padding: menuItemPadding,
      ':active': {
        ...styles[':active'],
        backgroundColor: DSTheme.colors.primary[200],
      },
    }),
    group: (styles, { isMulti }) => ({
      ...styles,
      padding: 0,
      marginTop: pxToRem(DSTheme.space.sm),
      '[class$="-option"]': {
        paddingLeft: !isMulti && pxToRem(DSTheme.space.mdPlus),
      },
    }),
    groupHeading: (styles) => ({
      ...styles,
      fontWeight: DSTheme.typography.weight.bold,
      color: DSTheme.colors.neutral[900],
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      textTransform: 'none',
      margin: 0,
      padding: menuItemPadding,
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      padding: menuItemPadding,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      color: DSTheme.forms.disabledActiveColor,
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
  onClick: React.MouseEventHandler<HTMLElement>;
  onMouseMove: React.MouseEventHandler<HTMLElement>;
  onMouseOver: React.MouseEventHandler<HTMLElement>;
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
  margin-top: ${getSpace(SpaceSizes.sm)};
  border-top: 1px solid ${getColor('neutral.300')};
  padding-top: ${getSpace(SpaceSizes.sm)};
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
    const selectedValues = React.Children.toArray(values);

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

const CreateNewOption = styled.div.attrs<{ variant: 'text'; color: 'primary' }>(
  () => ({
    variant: 'text',
    color: 'primary',
  }),
)`
  cursor: pointer;
  color: ${getToken('color-action-primary')};

  &:hover {
    color: ${getToken('color-action-primary-hover')};
  }
  &:active {
    color: ${getToken('color-action-primary-active')};
  }
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
          verticalMargin={10}
          width={16}
          dark
        />
      )}
      {children}
    </components.IndicatorsContainer>
  );
};
/* eslint-enable react/prop-types */
