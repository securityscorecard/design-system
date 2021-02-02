import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontSize,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { LabelProps, Sizes, TabProps, TabSizes } from './Tabs.types';
import { ColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';

const headingTab = css<LabelProps>`
  padding-bottom: ${pxToRem(2)};
  font-weight: 500;
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

const textTab = css`
  &:hover,
  &:focus {
    color: ${getColor('graphite4B')};
    text-decoration: none;
  }
  &:visited {
    color: ${getColor('graphite4B')};
  }
  &:not(:last-of-type) {
    margin-right: ${pxToRem(30)};
  }
`;

const largeSize = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};

  ${textTab}
`;

const mediumSize = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};

  ${textTab}
`;

const h2Size = css`
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('xxl')};

  ${headingTab}
`;

const h3Size = css`
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('xl')};

  ${headingTab}
`;

const h4Size = css`
  font-size: ${getFontSize('h4')};
  line-height: ${getLineHeight('lg')};

  ${headingTab}
`;

const sizes = {
  lg: largeSize,
  md: mediumSize,
  h2: h2Size,
  h3: h3Size,
  h4: h4Size,
};

const Label = styled.a<LabelProps & { size: Sizes }>`
  color: ${getColor('graphite4B')};
  text-decoration: none;
  cursor: pointer;
  ${({ size }) => sizes[size]};
`;

const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  onClick,
  color = ColorTypes.blueberryClassic,
  size = TabSizes.h3,
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
      size={size}
      {...handler}
    >
      {children}
    </Label>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  isSelected: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  onClick: PropTypes.func,
};

export default Tab;
