import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { includes } from 'ramda';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getRadii, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Strong, Text } from '../typography';
import { TextSizes, TextVariants } from '../typography/Text/Text.enums';
import { CollapsibleProps } from './Collapsible.types';
import { Padbox } from '../layout/Padbox';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';

const Header = styled(Padbox)`
  width: 100%;
  cursor: pointer;
`;

const Content = styled(Padbox)`
  border-top: 1px solid ${getColor('neutral.500')};
`;

const Container = styled.div<{ withBackground: boolean }>`
  border: 1px solid ${getColor('neutral.500')};
  border-radius: ${getRadii('default')};
  ${({ withBackground }) =>
    withBackground &&
    css`
      background: ${getColor('neutral.100')};
    `}
`;

const Subject = styled(Strong)`
  display: block;
  margin-top: ${pxToRem(4)};
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
    <Container className={className} withBackground={isOpen}>
      <Header
        paddingSize={SpaceSizes.lg}
        paddingType={PaddingTypes.squish}
        onClick={handleHeaderClick}
      >
        <Inline align="center" gap={SpaceSizes.lg}>
          <StyledIcon
            isRotated={isOpen}
            name={SSCIconNames.chevronRight}
            type={IconTypes.ssc}
          />
          <div>
            <Text size={TextSizes.md} variant={TextVariants.secondary}>
              {title}
            </Text>
            <Subject size={TextSizes.lg}>{subject}</Subject>
          </div>
        </Inline>
      </Header>
      {isOpen && (
        <Content paddingSize={SpaceSizes.lg}>
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
        </Content>
      )}
    </Container>
  );
};

Collapsible.propTypes = {
  subject: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultIsOpened: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default Collapsible;
