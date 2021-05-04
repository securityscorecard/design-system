import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import {
  getBorderRadius,
  getColor,
  pxToRem,
} from '../../../../../utils/helpers';
import { FlexContainer } from '../../../../FlexContainer';
import { Text } from '../../../../typography';
import { TextSizes } from '../../../../typography/Text/Text.enums';
import { ColumnsItemProps } from './components.types';

const StyledColumnsItem = styled(FlexContainer)`
  width: 100%;
  background: ${getColor('graphite5H')};
  border: 1px solid ${getColor('graphiteHB')};
  border-radius: ${getBorderRadius};
  cursor: grab;
`;

const HandlerIcon = styled.svg`
  color: ${getColor('graphiteHB')};
  width: ${pxToRem(6)};
  height: ${pxToRem(10)};
`;

const ColumnsItem: React.FC<ColumnsItemProps> = ({ label, columnId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: columnId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <StyledColumnsItem
      ref={setNodeRef}
      alignItems="center"
      as="li"
      justifyContent="space-between"
      padding={0.4}
      style={style}
      {...attributes}
      {...listeners}
    >
      <FlexContainer>
        <FlexContainer alignItems="center" padding={{ left: 0.5, right: 0.9 }}>
          <HandlerIcon
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H5C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H1C0.447715 2 0 1.55228 0 1ZM0 5C0 4.44772 0.447715 4 1 4H5C5.55228 4 6 4.44772 6 5C6 5.55228 5.55228 6 5 6H1C0.447715 6 0 5.55228 0 5ZM1 8C0.447715 8 0 8.44771 0 9C0 9.55229 0.447715 10 1 10H5C5.55228 10 6 9.55229 6 9C6 8.44771 5.55228 8 5 8H1Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </HandlerIcon>
        </FlexContainer>
        <Text size={TextSizes.md}>{label}</Text>
      </FlexContainer>
    </StyledColumnsItem>
  );
};

ColumnsItem.propTypes = {
  label: PropTypes.string,
  columnId: PropTypes.string,
};

export default ColumnsItem;
