import type { FC } from 'react';
import type { BreadcrumbItemProps } from './Breadcrumbs.types';

import styled from 'styled-components';
import { isNilOrEmpty, isNotUndefined } from 'ramda-adjunct';

import { getFontWeight } from '../../utils/helpers';
import { Text, TextEnums } from '../typographyLegacy/Text';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { Button } from '../Button';

export const BreadcrumbLink = styled(Button)`
  font-weight: ${getFontWeight('regular')};
  padding-inline: 0;
  width: auto;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  children,
  to = undefined,
  href = undefined,
  iconName,
  ...props
}) => {
  const hasIcon = isNotUndefined(iconName);
  const label = hasIcon ? { 'aria-label': children } : { children };
  const isSelected = isNilOrEmpty(to) && isNilOrEmpty(href);
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
          iconName={iconName}
          to={to}
          variant="text"
          {...props}
          {...label}
        />
      )}
    </ListItem>
  );
};

export default BreadcrumbItem;
