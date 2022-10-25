import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BreadcrumbItemProps } from './Breadcrumbs.types';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getToken,
} from '../../utils/helpers';
import { Link } from '../typographyLegacy/Link';
import { Text, TextEnums } from '../typographyLegacy/Text';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';

const BreadcrumbLink = styled(Link)`
  font-weight: ${getFontWeight('regular')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  color: ${getColor('neutral.900')};

  &:hover,
  &:focus-visible {
    color: ${getToken('color-action-primary-hover')};
    text-decoration: none;
  }

  &:active {
    color: ${getToken('color-action-primary-active')};
  }
`;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  isSelected = false,
  ...props
}) =>
  isSelected ? (
    <Text
      aria-current="page"
      size={TextSizes.md}
      variant={TextEnums.TextVariants.secondary}
    >
      {children}
    </Text>
  ) : (
    <BreadcrumbLink {...props}>{children}</BreadcrumbLink>
  );

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BreadcrumbItem;
