import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getSpace, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
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

  &:hover ${Text} {
    color: ${getColor('radiantBlueberry')};
  }
`;

const Content = styled(Padbox)`
  border-top: 1px dashed ${getColor('graphiteHB')};
`;

const Container = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: ${getColor('graphite5H')};
      box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};

      &:not(:last-child) {
        margin-bottom: ${getSpace(SpaceSizes.md)};
      }
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
        paddingSize={SpaceSizes.md}
        role="button"
        tabIndex={0}
        onClick={() => handleHeaderClick(id)}
        onKeyDown={(e) => handleKeyDown(e, id)}
      >
        <Inline align="center" gap={SpaceSizes.md}>
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
        <Content
          paddingSize={SpaceSizes.lgPlus}
          paddingType={PaddingTypes.squish}
        >
          <Text size={TextSizes.md}>{children}</Text>
        </Content>
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
