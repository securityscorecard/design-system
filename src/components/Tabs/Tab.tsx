import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getColor, pxToRem } from '../../utils/helpers';
import { LabelProps, TabProps } from './Tabs.types';
import { ColorTypes } from '../../theme/colors.enums';

const Label = styled.a<LabelProps>`
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(20)};
  padding-bottom: ${pxToRem(3)};
  cursor: pointer;
  border-bottom: 2px solid
    ${({ $isSelected, color }) =>
      $isSelected ? getColor(color) : getColor('graphiteHB')};

  &:hover {
    border-bottom: 2px solid ${({ color }) => getColor(color)};
  }
  &:not(:last-of-type) {
    margin-right: ${pxToRem(30)};
  }
`;

const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  onClick,
  color = ColorTypes.blueberryClassic,
  value,
}) => {
  const isLink = value?.toString()?.startsWith('/');
  const handler = isLink ? { to: value } : { onClick: () => onClick(value) };

  return (
    <Label
      $isSelected={isSelected}
      as={isLink ? Link : 'a'}
      color={color}
      {...handler}
    >
      {children}
    </Label>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  onClick: PropTypes.func,
};

export default Tab;
