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
import PillWrapper from '../../Pill/PillWrapper';
import PillLabel from '../../Pill/PillLabel';
import PillRemoveButton from '../../Pill/PillRemoveButton';
import { PillSizes, PillVariants } from '../../Pill/Pill.enums';

export const reactSelectTheme: (DSTheme: DefaultTheme) => ThemeConfig = (
  DSTheme,
) => (selectTheme) => ({
  ...selectTheme,
  colors: {
    primary: DSTheme.colors.primary[400],
    primary75: DSTheme.colors.primary[400],
    primary50: DSTheme.colors.primary[200],
    primary25: transparentize(0.9, DSTheme.colors.primary[400]),
    danger: DSTheme.colors.error[500],
    dangerLight: transparentize(0.9, DSTheme.colors.error[500]),
    neutral0: DSTheme.colors.neutral[0],
    neutral5: DSTheme.colors.neutral[100],
    neutral10: DSTheme.colors.neutral[200],
    neutral20: DSTheme.colors.neutral[300],
    neutral30: DSTheme.colors.neutral[400],
    neutral40: DSTheme.colors.neutral[500],
    neutral50: DSTheme.colors.neutral[600],
    neutral60: DSTheme.colors.neutral[700],
    neutral70: DSTheme.colors.neutral[800],
    neutral80: DSTheme.colors.neutral[900],
    neutral90: DSTheme.colors.neutral[1000],
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
  padding: pipe(
    getPaddingSpace,
    apply(pxToRem),
  )({
    paddingSize: SpaceSizes.md,
    paddingType: PaddingTypes.squish,
    theme: DSTheme,
  }),
  height: pxToRem(30),
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
      display: isProcessing ? 'none' : 'block',
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
      border: `1px solid ${DSTheme.colors.neutral[500]}`,
      boxShadow: `0px 1px 4px ${transparentize(0.85, '#000')}`,
      marginBottom: 0,
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

type InnerProps = {
  id: string;
  key: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  onMouseMove: React.MouseEventHandler<HTMLElement>;
  onMouseOver: React.MouseEventHandler<HTMLElement>;
  tabIndex: number;
};
export const MultiValueContainer: ComponentType<Record<string, unknown>> = ({
  children,
  innerProps,
  ...props
}) => (
  <PillWrapper
    isClickable={false}
    size={PillSizes.sm}
    variant={PillVariants.solid}
    {...innerProps}
    {...props}
  >
    {children}
  </PillWrapper>
);

export const MultiValueLabel: (
  maxLength: number,
) => ComponentType<{
  data: OptionType;
  innerProps: InnerProps;
}> = (maxLength) => ({ children, innerProps, ...props }) => (
  <PillLabel
    $maxLength={maxLength}
    $size={PillSizes.sm}
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
  border-top: 1px solid ${getColor('neutral.500')};
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
    background-color: ${getColor('primary.50')};
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
