import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../utils/helpers';
import { LabelProps, TabProps } from './Tabs.types';
import { ColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';

const Label = styled.a<LabelProps>`
  font-weight: 500;
  font-size: ${pxToRem(18)};
  color: ${getColor('graphite4B')};
  text-decoration: none;
  line-height: ${pxToRem(20)};
  padding-bottom: ${pxToRem(3)};
  cursor: pointer;
  border-bottom: 2px solid
    ${({ $isSelected, color }) =>
      $isSelected ? getColor(color) : getColor('graphiteHB')};

  &:hover,
  &:focus {
    color: ${getColor('graphite4B')};
    text-decoration: none;
    border-bottom: 2px solid ${({ color }) => getColor(color)};
  }
  &:visited {
    color: ${getColor('graphite4B')};
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
  let RouterLink = null;

  if (isLink) {
    RouterLink = requireRouterLink();
  }

  return (
    <Label
      $isSelected={isSelected}
      as={isLink ? RouterLink : 'a'}
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
