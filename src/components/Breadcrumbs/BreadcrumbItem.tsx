import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { BreadcrumbItemProps } from './Breadcrumbs.types';
import { Text } from '../Text';
import { Link } from '../Link';
import { Icon } from '../Icon';

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const IconLink = styled(Link)`
  &:hover {
    color: var(--sscds-color-icon-subtle);
  }
`;

const BreadcrumbItem = ({
  children,
  isSelected = false,
  to = undefined,
  href = undefined,
  iconName,
  iconType = 'ssc',
  ...props
}: BreadcrumbItemProps) => {
  const hasIcon = isNotUndefined(iconName);

  return (
    <ListItem>
      {isSelected ? (
        <Text aria-current="page" variant="subtle">
          {children}
        </Text>
      ) : hasIcon ? (
        <IconLink
          color="secondary"
          href={href}
          to={to}
          {...props}
          aria-label={children}
        >
          <Icon name={iconName} size="sm" type={iconType} />
        </IconLink>
      ) : (
        <Link color="secondary" href={href} to={to} {...props}>
          {children}
        </Link>
      )}
    </ListItem>
  );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
