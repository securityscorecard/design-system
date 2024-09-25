import styled from 'styled-components';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { TextSizes } from '../Text/Text.enums';
import { AccordionCollapsibleProps } from './Accordion.types';
import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import { Text } from '../Text';

const Header = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  padding-block: var(--sscds-space-3x);
  line-height: var(--sscds-font-lineheight-body-lg);
  border-bottom: 1px solid var(--sscds-color-border-default);
  cursor: pointer;

  &:hover {
    background-color: var(--sscds-color-background-surface-dynamic);
  }
`;

const Content = styled.div`
  padding-block: var(--sscds-space-4x);
`;

const AccordionCollapsible = ({
  children,
  className,
  handleHeaderClick,
  isOpen = false,
  id,
  title,
}: AccordionCollapsibleProps) => {
  const headerId = `accordion-header-${id}`;
  const sectionId = `accordion-section-${id}`;

  return (
    <Stack className={className}>
      <Header
        aria-controls={sectionId}
        aria-expanded={isOpen}
        id={headerId}
        type="button"
        onClick={() => handleHeaderClick(id)}
      >
        <Inline align="center" gap={SpaceSizes.md}>
          <Icon
            color="var(--sscds-color-icon-default)"
            name={SSCIconNames.angleRight}
            rotation={isOpen ? 90 : undefined}
            size="md"
            type={IconTypes.ssc}
            hasFixedSize
          />
          <Text as="div" size={TextSizes.lg}>
            {title}
          </Text>
        </Inline>
      </Header>
      {isOpen && (
        <Content aria-labelledby={headerId} id={sectionId} role="region">
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
        </Content>
      )}
    </Stack>
  );
};

export default AccordionCollapsible;
