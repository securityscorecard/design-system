import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pxToRem } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import { TabsProps } from './Tabs.types';

const LabelList = styled(FlexContainer)`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: ${pxToRem(30)};
`;

const Tabs: React.FC<TabsProps> = ({
  selectedValue,
  children,
  onSelectTab,
}) => {
  return (
    <LabelList>
      {React.Children.map(children, (tab) => {
        if (!React.isValidElement(tab)) {
          return null;
        }

        return React.cloneElement(tab, {
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
  onSelectTab: PropTypes.func,
};

export default Tabs;
