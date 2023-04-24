import type { FC, KeyboardEvent } from 'react';
import type {
  AccordionCollapsibleProps,
  AccordionItemId,
} from './Accordion.types';

import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getSpace, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { Inline, Padbox } from '../layout';
import { SpaceSizes } from '../../theme';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';

const Header = styled(Padbox)`
  cursor: pointer;

  &:hover {
    background-color: ${getColor('neutral.200')};
  }
`;

const Content = styled(Padbox)`
  padding-top: 0;
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
      box-shadow: 0 2px 6px 0 ${transparentize(0.85, '#000')};
    `}
`;

const IconWrapper = styled(Padbox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(16)};
  height: ${pxToRem(24)};
`;
const StyledIcon = styled(Icon)`
  transition: transform 200ms;
  height: 1em;
`;

const AccordionCollapsible: FC<AccordionCollapsibleProps> = ({
  children,
  className,
  handleHeaderClick,
  isOpen = false,
  isCard = true,
  id,
  title,
}) => {
  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
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
        <Inline gap={SpaceSizes.sm}>
          <IconWrapper paddingSize={SpaceSizes.xxs}>
            <StyledIcon
              name={SSCIconNames.angleRight}
              rotation={isOpen ? 90 : undefined}
              type={IconTypes.ssc}
            />
          </IconWrapper>
          <Text size={TextSizes.lg}>{title}</Text>
        </Inline>
      </Header>
      {isOpen && (
        <Content paddingSize={SpaceSizes.lg} paddingType={PaddingTypes.squish}>
          <Text size={TextSizes.md}>{children}</Text>
        </Content>
      )}
    </Container>
  );
};

export default AccordionCollapsible;
