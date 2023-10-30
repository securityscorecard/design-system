import type { FC, KeyboardEvent } from 'react';
import type {
  AccordionCollapsibleProps,
  AccordionItemId,
} from './Accordion.types';

import styled from 'styled-components';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { Inline, Padbox } from '../layout';
import { SpaceSizes } from '../../theme';

const Header = styled(Padbox)`
  cursor: pointer;
  border-bottom: 1px solid ${getColor('neutral.400')};
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0.75rem 0;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;

  &:hover {
    background-color: rgb(0 0 0 / 4%);
  }
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const IconWrapper = styled(Padbox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
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
    <div className={className}>
      <Header
        paddingSize={SpaceSizes.sm}
        role="button"
        tabIndex={0}
        onClick={() => handleHeaderClick(id)}
        onKeyDown={(e) => handleKeyDown(e, id)}
      >
        <Inline align="center" gap={SpaceSizes.md}>
          <IconWrapper paddingSize={SpaceSizes.xxs}>
            <StyledIcon
              name={SSCIconNames.angleRight}
              rotation={isOpen ? 90 : undefined}
              type={IconTypes.ssc}
            />
          </IconWrapper>
          <Text as="div" size={TextSizes.lg}>
            {title}
          </Text>
        </Inline>
      </Header>
      {isOpen && (
        <Content>
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
        </Content>
      )}
    </div>
  );
};

export default AccordionCollapsible;
