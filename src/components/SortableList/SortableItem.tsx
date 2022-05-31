import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { getColor, getRadii, pxToRem } from '../../utils';
import { Text } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SortableItemProps } from './SortableList.types';
import { SpaceSizes } from '../../theme';
import { Inline, Padbox } from '../layout';

const StyledSortableItem = styled(Padbox)`
  background: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.500')};
  border-radius: ${getRadii('default')};
  cursor: grab;
  list-style-type: none;
`;

const IconWrapper = styled(Padbox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(24)};
  color: ${getColor('neutral.500')};
`;

const SortableItem: React.FC<SortableItemProps> = ({ label, id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <StyledSortableItem
      ref={setNodeRef}
      as="li"
      paddingSize={SpaceSizes.sm}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Inline align="center" gap={SpaceSizes.sm} stretch={2}>
        <IconWrapper>
          <svg
            fill="none"
            viewBox="0 0 24 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M 9 7 C 9 6.448 9.448 6 10 6 L 14 6 C 14.552 6 15 6.448 15 7 C 15 7.552 14.552 8 14 8 L 10 8 C 9.448 8 9 7.552 9 7 Z M 9 11 C 9 10.448 9.448 10 10 10 L 14 10 C 14.552 10 15 10.448 15 11 C 15 11.552 14.552 12 14 12 L 10 12 C 9.448 12 9 11.552 9 11 Z M 10 14 C 9.448 14 9 14.448 9 15 C 9 15.552 9.448 16 10 16 L 14 16 C 14.552 16 15 15.552 15 15 C 15 14.448 14.552 14 14 14 L 10 14 Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </IconWrapper>
        <Text size={TextSizes.md}>{label}</Text>
      </Inline>
    </StyledSortableItem>
  );
};

SortableItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default SortableItem;
