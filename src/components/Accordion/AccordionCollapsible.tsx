import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getSpace, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import {
  AccordionCollapsibleProps,
  AccordionItemId,
  AccordionItemIdPropType,
} from './Accordion.types';
import { Inline, Padbox } from '../layout';
import { SpaceSizes } from '../../theme';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';

const Header = styled(Padbox)`
  cursor: pointer;

  &:hover {
    background-color: ${getColor('neutral.200')};
  }
`;

const Container = styled.div<{ isOpen: boolean; isCard: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      &:not(:last-child) {
        margin-bottom: ${getSpace(SpaceSizes.md)};
      }
    `}
  ${({ isOpen, isCard }) =>
    isCard &&
    isOpen &&
    css`
      background: ${getColor('neutral.0')};
      box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};
    `}
`;

const IconWrapper = styled(Padbox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;
const StyledIcon = styled(Icon)`
  transition: transform 200ms;
  height: auto;
`;

const AccordionCollapsible: React.FC<AccordionCollapsibleProps> = ({
  children,
  className,
  handleHeaderClick,
  isOpen = false,
  isCard = true,
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
    <Container className={className} isCard={isCard} isOpen={isOpen}>
      <Header
        paddingSize={SpaceSizes.sm}
        role="button"
        tabIndex={0}
        onClick={() => handleHeaderClick(id)}
        onKeyDown={(e) => handleKeyDown(e, id)}
      >
        <Inline align="center" gap={SpaceSizes.sm}>
          <IconWrapper paddingSize={SpaceSizes.xxs}>
            <StyledIcon
              name={SSCIconNames.chevronRight}
              rotation={isOpen ? 90 : undefined}
              type={IconTypes.ssc}
            />
          </IconWrapper>
          <Text size={TextSizes.lg}>{title}</Text>
        </Inline>
      </Header>
      {isOpen && (
        <Padbox paddingSize={SpaceSizes.lg} paddingType={PaddingTypes.squish}>
          <Text size={TextSizes.md}>{children}</Text>
        </Padbox>
      )}
    </Container>
  );
};

AccordionCollapsible.propTypes = {
  title: PropTypes.string.isRequired,
  handleHeaderClick: PropTypes.func.isRequired,
  id: AccordionItemIdPropType.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default AccordionCollapsible;
