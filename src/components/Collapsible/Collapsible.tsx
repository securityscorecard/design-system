import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';
import * as RadixCollapsible from '@radix-ui/react-collapsible';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { createPadding, getColor } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { CollapsibleProps } from './Collapsible.types';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { Padbox, Surface } from '../layout';

const Header = styled(Padbox)`
  width: 100%;
  cursor: pointer;
  border-radius: var(--sscds-radius);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `}
  &:hover {
    background-color: ${getColor('primary.50')};
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Content = styled(RadixCollapsible.Content)`
  border-top: 1px solid var(--sscds-border-color);
  ${({ theme }) =>
    createPadding({ paddingType: 'squish', paddingSize: 'lg', theme })}
`;

const StyledIcon = styled(Icon)`
  transition: transform 200ms;
`;

const Collapsible = ({
  children,
  className,
  defaultIsOpen = false,
  subject,
  title,
  onOpen,
  onOpenChange,
  isOpen: controlledIsOpen,
}: CollapsibleProps) => {
  const isControlled = typeof onOpenChange === 'function';
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const internalIsOpen = controlledIsOpen ?? isOpen;

  const handleHeaderClick = (open) => {
    if (isControlled) {
      onOpenChange(open);
    } else {
      setIsOpen(open);
    }
    if (!isControlled && open) {
      onOpen?.();
    }
  };

  return (
    <RadixCollapsible.Root
      open={internalIsOpen}
      onOpenChange={handleHeaderClick}
    >
      <Surface
        className={cls(CLX_COMPONENT, className)}
        radius="sm"
        style={{ display: 'flex', flexDirection: 'column' }}
        hasBorder
      >
        <RadixCollapsible.Trigger>
          <Header
            $isOpen={internalIsOpen}
            paddingSize="mdPlus"
            paddingType="squish"
          >
            <Inline align="center" gap={SpaceSizes.md}>
              <StyledIcon
                name={SSCIconNames.angleRight}
                rotation={internalIsOpen ? 90 : undefined}
                type={IconTypes.ssc}
              />
              <HeaderContent>
                <Text
                  as="div"
                  size={TextSizes.md}
                  variant={TextVariants.secondary}
                >
                  {title}
                </Text>
                {subject && (
                  <Text as="div" size={TextSizes.lg} isBold>
                    {subject}
                  </Text>
                )}
              </HeaderContent>
            </Inline>
          </Header>
        </RadixCollapsible.Trigger>
        {internalIsOpen && (
          <Content>
            <Text as="div" size={TextSizes.md}>
              {children}
            </Text>
          </Content>
        )}
      </Surface>
    </RadixCollapsible.Root>
  );
};

export default Collapsible;
