import type { ComponentProps } from 'react';
import type { SSCIconNames } from '../../../theme/icons/icons.enums';

import { forwardRef } from 'react';
import styled from 'styled-components';

import { getColor, getRadii } from '../../../utils';
import { Icon } from '../../Icon';
import { Padbox } from '../../layout';

interface IconButtonProps extends ComponentProps<'button'> {
  label: string;
  iconName: (typeof SSCIconNames)[keyof typeof SSCIconNames];
  iconProps?: Partial<ComponentProps<typeof Icon>>;
}

const IconButtonRoot = styled(Padbox)`
  width: 1rem;
  height: 1rem;
  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${getColor('neutral.500')};
  border-radius: ${getRadii('round')};
  transition: var(--sscds-transition);

  &:disabled {
    cursor: auto;
  }

  &:not(:disabled):hover {
    background: ${getColor('primary.50')};
    color: ${getColor('text.primary')};
  }

  &:active {
    background: ${getColor('primary.200')};
    color: ${getColor('text.primary')};
  }
`;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, label, iconProps, ...props }, ref) => {
    return (
      <IconButtonRoot
        ref={ref}
        aria-label={label}
        as="button"
        paddingSize="sm"
        paddingType="squish"
        type="button"
        {...props}
      >
        <Icon name={iconName} {...iconProps} />
      </IconButtonRoot>
    );
  },
);

export default IconButton;
