import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { BreadcrumbItemProps } from './Breadcrumbs.types';
import { Text } from '../Text';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import type { SSCIcons } from '../Icon/Icon.types';
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
