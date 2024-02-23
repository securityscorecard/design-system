import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { includes } from 'ramda';
import cls from 'classnames';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typographyLegacy';
import { TextSizes, TextVariants } from '../typographyLegacy/Text/Text.enums';
import { CollapsibleProps } from './Collapsible.types';
import { Padbox } from '../layout/Padbox';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { Surface } from '../layout';

const Header = styled(Padbox)`
  width: 100%;
  cursor: pointer;
  border-radius: var(--sscds-borderRadius);

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

const Content = styled(Padbox)`
  border-top: 1px solid var(--sscds-border-color);
`;

const StyledIcon = styled(Icon).withConfig<{ isRotated: boolean }>({
  shouldForwardProp: (property) => !includes(property, ['isRotated']),
})`
  transition: transform 200ms;
  ${({ isRotated }) => isRotated && 'transform: rotate(90deg);'}
`;

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  className,
  defaultIsOpened = false,
  subject,
  title,
  onOpen,
}) => {
  const [isOpen, setOpen] = useState(defaultIsOpened);

  const handleHeaderClick = () => {
    const willOpen = !isOpen;
    setOpen(willOpen);
    if (typeof onOpen === 'function' && willOpen) {
      onOpen();
    }
  };

  return (
    <Surface className={cls(CLX_COMPONENT, className)} radius="sm" hasBorder>
      <Header
        $isOpen={isOpen}
        paddingSize={SpaceSizes.mdPlus}
        paddingType={PaddingTypes.squish}
        tabIndex={0}
        onClick={handleHeaderClick}
        onKeyDown={(e) => ['Enter', ' '].includes(e.key) && handleHeaderClick()}
      >
        <Inline align="center" gap={SpaceSizes.md}>
          <StyledIcon
            isRotated={isOpen}
            name={SSCIconNames.angleRight}
            type={IconTypes.ssc}
          />
          <HeaderContent>
            <Text as="div" size={TextSizes.md} variant={TextVariants.secondary}>
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
      {isOpen && (
        <Content paddingSize={SpaceSizes.lg} paddingType={PaddingTypes.squish}>
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
        </Content>
      )}
    </Surface>
  );
};

Collapsible.propTypes = {
  title: PropTypes.node.isRequired,
  subject: PropTypes.string,
  className: PropTypes.string,
  defaultIsOpened: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default Collapsible;
