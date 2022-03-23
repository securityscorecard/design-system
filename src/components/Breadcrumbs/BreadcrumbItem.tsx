import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BreadcrumbItemProps } from './Breadcrumbs.types';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
} from '../../utils/helpers';
import { Link } from '../typography/Link';
import { Text, TextEnums } from '../typography/Text';
import { TextSizes } from '../typography/Text/Text.enums';

const BreadcrumbLink = styled(Link)`
  font-weight: ${getFontWeight('regular')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};

  &,
  &:not([href]):not([tabindex]) {
    color: ${getColor('neutral.900')};
  }

  &:hover,
  &:not([href]):not([tabindex]):hover {
    color: ${getColor('primary.600')};
  }

  &:active,
  &:not([href]):not([tabindex]):active {
    color: ${getColor('primary.700')};
  }
`;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  isSelected = false,
  ...props
}) => (
  <li>
    {isSelected ? (
      <Text
        aria-current="page"
        size={TextSizes.md}
        variant={TextEnums.TextVariants.secondary}
      >
        {children}
      </Text>
    ) : (
      <BreadcrumbLink {...props}>{children}</BreadcrumbLink>
    )}
  </li>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BreadcrumbItem;
