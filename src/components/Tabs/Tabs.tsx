import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { equals } from 'ramda';

import { Inline, Padbox } from '../layout';
import { TabsProps, Variants } from './Tabs.types';
import { TabSizes, TabVariants } from './Tabs.enums';
import {
  SpacingSizeValue,
  SpacingSizeValuePropType,
} from '../../types/spacing.types';
import { SpaceSizes } from '../../theme/space.enums';
import { createMarginSpacing, getBorderRadius, getColor } from '../../utils';

// FIXME: remove when `create*Spacing` methods are deprecated
const Wrapper = styled.div<{ $margin: SpacingSizeValue }>`
  ${({ $margin }) => createMarginSpacing($margin)};
`;
const LabelList = styled(Padbox)<{
  $variant: Variants;
}>`
  display: inline-block;

  ${({ $variant }) =>
    $variant === TabVariants.segmented &&
    css`
      background: ${getColor('graphite5H')};
      box-shadow: inset 0 0 0 1px ${getColor('graphiteB')};
      border-radius: ${getBorderRadius};
    `};
`;

const Tabs: React.FC<TabsProps> = ({
  selectedValue,
  selectedPatternMatcher = equals,
  children,
  onSelectTab,
  size = TabSizes.sm,
  variant = TabVariants.underline,
  margin = { bottom: 1.5 },
}) => {
  return (
    <Wrapper $margin={margin}>
      <LabelList
        $variant={variant}
        paddingSize={
          variant === TabVariants.segmented ? SpaceSizes.xs : SpaceSizes.none
        }
      >
        <Inline
          gap={
            variant === TabVariants.segmented ? SpaceSizes.sm : SpaceSizes.lg
          }
          role="tablist"
        >
          {React.Children.map(children, (tab) => {
            if (!React.isValidElement(tab)) {
              return null;
            }

            return React.cloneElement(tab, {
              size,
              variant,
              key: tab.props.value,
              isSelected: selectedPatternMatcher(
                tab.props.value,
                selectedValue,
              ),
              onClick: onSelectTab,
            });
          })}
        </Inline>
      </LabelList>
    </Wrapper>
  );
};

Tabs.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  margin: SpacingSizeValuePropType,
  selectedPatternMatcher: PropTypes.func,
  onSelectTab: PropTypes.func,
};

export default Tabs;
