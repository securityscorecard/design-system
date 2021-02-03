import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer';
import { TabSizes, TabsProps } from './Tabs.types';
import { SpacingSizeValuePropType } from '../../types/spacing.types';

const LabelList = styled(FlexContainer)`
  list-style-type: none;
`;

const Tabs: React.FC<TabsProps> = ({
  selectedValue,
  children,
  onSelectTab,
  size = TabSizes.h3,
  margin = { bottom: 1.5 },
  padding = 0,
}) => {
  return (
    <LabelList margin={margin} padding={padding}>
      {React.Children.map(children, (tab) => {
        if (!React.isValidElement(tab)) {
          return null;
        }

        return React.cloneElement(tab, {
          size,
          key: tab.props.value,
          isSelected: tab.props.value === selectedValue,
          onClick: onSelectTab,
        });
      })}
    </LabelList>
  );
};

Tabs.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  margin: SpacingSizeValuePropType,
  padding: SpacingSizeValuePropType,
  onSelectTab: PropTypes.func,
};

export default Tabs;
