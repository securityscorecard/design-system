import React, { ComponentType } from 'react';
import { transparentize } from 'polished';
import { ThemeConfig } from 'react-select/src/theme';
import {
  IndicatorComponentType,
  IndicatorContainerProps,
  MenuProps,
  OptionProps,
  StylesConfig,
  ValueContainerProps,
  components,
} from 'react-select';
import { apply, assoc, both, includes, pick, pipe } from 'ramda';
import { isEmptyString, isNonEmptyArray, isNotUndefined } from 'ramda-adjunct';
import styled, { DefaultTheme } from 'styled-components';

import { Checkbox } from '../Checkbox';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Button } from '../../Button';
import { ButtonVariants } from '../../Button/Button.enums';
import { Cluster, Inline } from '../../layout';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Icon } from '../../Icon';
import { MenuActionArgs, Option as OptionType } from './Select.types';
import { getPaddingSpace } from '../../../utils/space';
import {
  createPadding,
  getButtonColor,
  getColor,
  getSpace,
  pxToRem,
} from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { Spinner } from '../../Spinner';

export const reactSelectTheme: (DSTheme: DefaultTheme) => ThemeConfig = (
  DSTheme,
) => (selectTheme) => ({
  ...selectTheme,
  colors: {
    primary: DSTheme.colors.radiantBlueberry,
    primary75: DSTheme.colors.radiantBlueberry,
    primary50: DSTheme.colors.dietBlueberry,
    primary25: transparentize(0.9, DSTheme.colors.radiantBlueberry),
    danger: DSTheme.colors.strawberry,
    dangerLight: transparentize(0.9, DSTheme.colors.strawberry),
    neutral0: DSTheme.colors.graphite5H,
    neutral5: DSTheme.colors.graphite4H,
    neutral10: DSTheme.colors.graphite3H,
    neutral20: DSTheme.colors.graphite2H,
    neutral30: DSTheme.colors.graphiteH,
    neutral40: DSTheme.colors.graphiteHB,
    neutral50: DSTheme.colors.graphiteB,
    neutral60: DSTheme.colors.graphite2B,
    neutral70: DSTheme.colors.graphite3B,
    neutral80: DSTheme.colors.graphite4B,
    neutral90: DSTheme.colors.graphite5B,
  },
  spacing: { ...selectTheme.spacing },
});

const stateStyles = (color) => ({
  boxShadow: `inset 0px 0px 0px 1px ${color}`,
});

const invalidStyles = (DSTheme) => ({
  ...stateStyles(DSTheme.forms.invalidBorderColor),
  borderColor: DSTheme.forms.invalidBorderColor,
});

const focusStyles = (DSTheme) => ({
  ...stateStyles(DSTheme.forms.focusBorderColor),
  borderColor: DSTheme.forms.focusBorderColor,
});

const disabledStyles = (DSTheme) => ({
  background: DSTheme.forms.disabledBgColor,
  borderColor: DSTheme.forms.disabledBorderColor,
});

const indicatorStyles = (DSTheme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: DSTheme.forms.selectIndicatorColor,
  cursor: 'pointer',
  padding: pipe(
    getPaddingSpace,
    apply(pxToRem),
  )({
    paddingSize: SpaceSizes.md,
    paddingType: PaddingTypes.squish,
    theme: DSTheme,
  }),
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
        border: `${DSTheme.forms.borderWidth} solid ${DSTheme.forms.borderColor}`,
        borderRadius: DSTheme.borderRadius,
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
    valueContainer: (styles, { selectProps: { isMulti } }) => {
      return {
        ...styles,
        display: 'flex',
        alignItems: 'center',
        fontSize: DSTheme.typography.size.md,
        lineHeight: DSTheme.typography.lineHeight.md,
        padding: pxToRem(DSTheme.space.xs),
        paddingLeft: !isMulti ? pxToRem(DSTheme.space.md) : undefined,
      };
    },
    singleValue: assoc('margin', 0),
    multiValue: (styles) => ({
      ...styles,
      display: 'flex',
      alignItems: 'center',
      padding: pipe(
        getPaddingSpace,
        apply(pxToRem),
      )({
        paddingSize: SpaceSizes.sm,
        paddingType: PaddingTypes.squish,
        theme: DSTheme,
      }),
      backgroundColor: DSTheme.colors.graphite2H,
    }),
    multiValueLabel: () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: DSTheme.typography.size.md,
      lineHeight: pxToRem(14),
      color: DSTheme.colors.graphite4B,
      padding: 0,
      marginRight: pxToRem(DSTheme.space.xs),
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
      color: DSTheme.colors.graphite2B,
      width: pxToRem(16),
      fontSize: pxToRem(12),
      cursor: 'pointer',
      ':hover': {
        color: DSTheme.colors.strawberry,
      },
    }),
    // Disable TS because types are wrong for Input component
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    input: (_, { selectProps: { isMulti } }) => ({
      ...(!isMulti ? { margin: 0 } : {}),
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      '> div > input': {
        lineHeight: DSTheme.typography.lineHeight.md,
      },
    }),
    placeholder: (_, { children }) => ({
      color: DSTheme.forms.placeholderColor,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      display: isEmptyString(children) ? 'none' : 'block',
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
    }),
    indicatorSeparator: (
      styles,
      { hasValue, selectProps: { isClearable, isProcessing } },
    ) => ({
      ...styles,
      display: (isClearable && hasValue) || isProcessing ? 'block' : 'none',
      backgroundColor: DSTheme.colors.graphiteHB,
      margin: pxToRem(DSTheme.space.xs, 0),
    }),
    dropdownIndicator: () => ({
      ...indicatorStyles(DSTheme),
    }),
    clearIndicator: (_, { selectProps: { isProcessing } }) => ({
      ...indicatorStyles(DSTheme),
      display: isProcessing ? 'none' : 'block',
    }),
    menu: (styles, { selectProps: { isMenuPositionRelative } }) => ({
      ...styles,
      ...(isMenuPositionRelative ? { position: 'relative' } : {}),
      border: `1px solid ${DSTheme.colors.graphiteHB}`,
      boxShadow: `0px 1px 4px ${transparentize(0.85, '#000')}`,
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
        ? DSTheme.colors.graphite2H
        : isFocused
        ? DSTheme.colors.blueberry0
        : 'transparent',
      color: isDisabled ? DSTheme.colors.graphiteB : DSTheme.forms.color,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      padding: menuItemPadding,
      ':active': {
        ...styles[':active'],
        backgroundColor: DSTheme.colors.dietBlueberry,
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
      color: DSTheme.colors.graphite4B,
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
      <Icon name={SSCIconNames.chevronDown} type={IconTypes.ssc} />
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

const TruncatedLabel = styled.div<{ $maxLength: number }>`
  /* desired length + 2 chars for ellipsis */
  max-width: ${({ $maxLength }) => `${$maxLength + 2}ch`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MultiValueLabel: (
  maxLength: number,
) => ComponentType<{ data: OptionType }> = (maxLength) => (props) => {
  const { data, children } = props;

  return (
    <components.MultiValueLabel {...props}>
      <TruncatedLabel $maxLength={maxLength} title={data.label}>
        {children}
      </TruncatedLabel>
    </components.MultiValueLabel>
  );
};

export const MultiValueRemove: ComponentType<Record<string, unknown>> = (
  props,
) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name={SSCIconNames.times} type={IconTypes.ssc} />
    </components.MultiValueRemove>
  );
};

const ActionsMenu = styled.div`
  margin-top: ${getSpace(SpaceSizes.sm)};
  border-top: 1px solid ${getColor('graphiteHB')};
  padding-top: ${getSpace(SpaceSizes.sm)};
`;

const SelectActionButton = styled(Button)`
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
  justify-content: flex-start;

  &:hover {
    background-color: ${getColor('blueberry0')};
  }
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
                  variant={ButtonVariants.text}
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

export const ValueContainer: ComponentType<
  ValueContainerProps<OptionType, boolean>
> = (props) => {
  const {
    children,
    selectProps: { isMulti },
  } = props;

  if (isMulti) {
    return (
      <components.ValueContainer {...props}>
        <Cluster gap={SpaceSizes.xs}>{children}</Cluster>
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
  color: ${getButtonColor('color')};

  &:hover {
    color: ${getButtonColor('hoverColor')};
  }
  &:active {
    color: ${getButtonColor('activeColor')};
  }
`;

export const Option: ComponentType<OptionProps<OptionType, boolean>> = (
  props,
) => {
  const {
    isMulti,
    isSelected,
    isDisabled,
    label,
    data: { __isNew__: isCreateNewOption },
  } = props;
  if (!isMulti) {
    return <components.Option {...props} />;
  }

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

  return (
    <div>
      <components.Option {...props}>
        <Inline gap={SpaceSizes.sm}>
          <Checkbox
            checked={isSelected}
            isDisabled={isDisabled}
            label={label}
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
        <>
          <Spinner
            borderWidth={2}
            height={16}
            horizontalMargin={16}
            verticalMargin={0}
            width={16}
            dark
          />
        </>
      )}
      {children}
    </components.IndicatorsContainer>
  );
};
/* eslint-enable react/prop-types */
