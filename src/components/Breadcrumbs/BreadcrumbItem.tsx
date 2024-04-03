import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { BreadcrumbItemProps } from './Breadcrumbs.types';
import { getFontWeight } from '../../utils/helpers';
import { Text, TextEnums } from '../typographyLegacy/Text';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { Button } from '../Button';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import type { SSCIcons } from '../Icon/Icon.types';

export const BreadcrumbLink = styled(Button)`
  font-weight: ${getFontWeight('regular')};
  padding-inline: 0;
  width: auto;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const BreadcrumbItem = ({
  children,
  isSelected = false,
  to = undefined,
  href = undefined,
  iconName,
  ...props
}: BreadcrumbItemProps) => {
  const hasIcon = isNotUndefined(iconName) || isNotUndefined(props.iconStart);
  const label = hasIcon ? { 'aria-label': children } : { children };
  return (
    <ListItem>
      {isSelected ? (
        <Text
          aria-current="page"
          size={TextSizes.md}
          variant={TextEnums.TextVariants.secondary}
        >
          {children}
        </Text>
      ) : (
        <BreadcrumbLink
          color="secondary"
          href={href}
          iconStart={{ iconName }}
          to={to}
          variant="text"
          {...props}
          {...label}
        />
      )}
    </ListItem>
  );
};

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  href: PropTypes.string,
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
};

export default BreadcrumbItem;
