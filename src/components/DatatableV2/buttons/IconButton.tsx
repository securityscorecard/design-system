import React, { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

import { getColor, getRadii } from '../../../utils';
import { Icon, SSCIcons } from '../../Icon';
import { Padbox } from '../../layout';
import { Tooltip } from '../../Tooltip';

interface IconButtonProps extends ComponentProps<'button'> {
  label: string;
  /* eslint-disable @typescript-eslint/ban-types */
  iconName: SSCIcons | (string & {});
  /* eslint-enable @typescript-eslint/ban-types */
  iconProps?: Partial<ComponentProps<typeof Icon>>;
  isDisabled?: boolean;
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
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    background: ${getColor('primary.50')};
    color: ${getColor('text.primary')};
  }
  &:not(:disabled):active {
    background: ${getColor('primary.200')};
    color: ${getColor('text.primary')};
  }
`;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, label, iconProps, isDisabled, ...props }, ref) => {
    return (
      <Tooltip
        placement="top"
        popup={isDisabled ? undefined : label}
        width="auto"
      >
        <IconButtonRoot
          ref={ref}
          aria-label={label}
          as="button"
          disabled={isDisabled}
          paddingSize="sm"
          paddingType="squish"
          type="button"
          {...props}
        >
          <Icon name={iconName} {...iconProps} />
        </IconButtonRoot>
      </Tooltip>
    );
  },
);

export default IconButton;
