import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import { LabelProps, TabsProps } from './Tabs.types';

const LabelList = styled(FlexContainer)`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: ${pxToRem(30)};
`;
const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: ${pxToRem(30)};
  }
`;
const Label = styled.a<LabelProps>`
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(20)};
  padding-bottom: ${pxToRem(3)};
  cursor: pointer;
  border-bottom: 2px solid
    ${({ selected, color }) => (selected ? color : getColor('graphiteHB'))};
  &:hover {
    border-bottom: 2px solid ${({ color }) => color};
  }
`;

const getValidActiveTab = (tabs, activeTabTitle) => {
  const activeTab = tabs.find(({ title }) => title === activeTabTitle);
  return activeTab || tabs[0];
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabTitle,
  onSelectTab,
  componentProps,
}) => {
  const { Component, title: validTabTitle } = getValidActiveTab(
    tabs,
    activeTabTitle,
  );

  return (
    <>
      <LabelList as="ul">
        {tabs.map(({ title, color }) => (
          <ListItem key={title}>
            <Label
              color={color}
              selected={validTabTitle === title}
              onClick={() => onSelectTab(title)}
            >
              {title}
            </Label>
          </ListItem>
        ))}
      </LabelList>
      <section>
        <Component {...componentProps} />
      </section>
    </>
  );
};

Tabs.propTypes = {
  activeTabTitle: PropTypes.string.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      Component: PropTypes.elementType.isRequired,
    }),
  ),
  componentProps: PropTypes.shape({}),
};

export default Tabs;
