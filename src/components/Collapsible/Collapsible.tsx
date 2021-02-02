import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { includes } from 'ramda';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getBorderRadius, getColor, pxToRem } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import { Icon } from '../Icon';
import { Strong, Text } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { CollapsibleProps } from './Collapsible.types';

const Header = styled(FlexContainer)`
  width: 100%;
  height: ${pxToRem(60)};
  padding: ${pxToRem(0, 26)};
  cursor: pointer;
`;

const Content = styled(Text)`
  padding: ${pxToRem(26)};
  border-top: 1px solid ${getColor('graphiteHB')};
`;

const Container = styled.div<{ withBackground: boolean }>`
  border: 1px solid ${getColor('graphiteHB')};
  border-radius: ${getBorderRadius};
  ${({ withBackground }) =>
    withBackground &&
    css`
      background: ${getColor('graphite4H')};
    `}
`;

const Subject = styled(Strong)`
  display: block;
  margin-top: ${pxToRem(4)};
`;

const StyledIcon = styled(Icon).withConfig<{ isRotated: boolean }>({
  shouldForwardProp: (property) => !includes(property, ['isRotated']),
})`
  margin-right: ${pxToRem(26)};
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
      <Header alignItems="center" onClick={handleHeaderClick}>
        <StyledIcon
          isRotated={isOpen}
          name={SSCIconNames.chevronRight}
          type={IconTypes.ssc}
        />
        <div>
          <Text size={TextSizes.md}>{title}</Text>
          <Subject>{subject}</Subject>
        </div>
      </Header>
      {isOpen && (
        <Content as="div" size={TextSizes.md}>
          {children}
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
