import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { pxToRem } from '../../utils/helpers';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { Icon } from '../Icon';
import { IconTypes, SSCIconNames } from '../Icon/Icon.enums';
import { IconButtonProps } from './IconButton.types';

const StyledIconButton = styled(Button)`
  border-radius: 100%;
  min-width: 0;
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  padding: ${pxToRem(6)};
`;

const StyledIcon = styled(Icon)`
  font-size: 0.8rem;
`;

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconType = IconTypes.ssc,
  label,
  ...props
}) => {
  return (
    <StyledIconButton
      aria-label={label}
      variant={ButtonVariants.outline}
      {...props}
    >
      <StyledIcon name={iconName} type={iconType} hasFixedWidth />
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  margin: SpacingSizeValuePropType,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }).isRequired,
  ]),
  iconName: PropTypes.oneOf(Object.values(SSCIconNames)),
  iconType: PropTypes.oneOf(Object.values(IconTypes)),
  onClick: PropTypes.func,
};

export default IconButton;
