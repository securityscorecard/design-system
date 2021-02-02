import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, pxToRem } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import { Icon } from '../Icon';
import { Text } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { AccordionCollapsibleProps, AccordionItemId } from './Accordion.types';

const Header = styled(FlexContainer)`
  width: 100%;
  height: ${pxToRem(60)};
  padding: ${pxToRem(0, 13)};
  cursor: pointer;
`;

const Content = styled(Text)`
  padding: ${pxToRem(24, 40)};
  border-top: 1px dashed ${getColor('graphiteHB')};
`;

const Container = styled.div<{ isOpen: boolean }>`
  width: 100%;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: ${getColor('graphite5H')};
      box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};
    `}
`;

const StyledIcon = styled(Icon)<{ $isRotated: boolean }>`
  margin-right: ${pxToRem(13)};
  transition: transform 200ms;
  ${({ $isRotated }) => $isRotated && 'transform: rotate(90deg);'}
  height: ${pxToRem(11)};
  width: ${pxToRem(11)};
`;

const AccordionCollapsible: React.FC<AccordionCollapsibleProps> = ({
  children,
  className,
  handleHeaderClick,
  isOpen = false,
  id,
  title,
}) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    itemId?: AccordionItemId,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleHeaderClick(itemId);
    }
  };
  return (
    <Container className={className} isOpen={isOpen}>
      <Header
        alignItems="center"
        role="button"
        tabIndex={0}
        onClick={() => handleHeaderClick(id)}
        onKeyDown={(e) => handleKeyDown(e, id)}
      >
        <StyledIcon
          $isRotated={isOpen}
          name={SSCIconNames.chevronRight}
          type={IconTypes.ssc}
        />
        <Text size={TextSizes.lg}>{title}</Text>
      </Header>
      {isOpen && (
        <Content as="div" size={TextSizes.md}>
          {children}
        </Content>
      )}
    </Container>
  );
};

AccordionCollapsible.propTypes = {
  title: PropTypes.string.isRequired,
  handleHeaderClick: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default AccordionCollapsible;
