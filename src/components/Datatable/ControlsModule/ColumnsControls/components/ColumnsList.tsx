import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { pxToRem } from '../../../../../utils/helpers';
import { FlexContainer } from '../../../../FlexContainer';
import ColumnsItem from './ColumnsItem';
import { DatatableStore } from '../../../Datatable.store';
import { ColumnsListProps } from './components.types';

const StyledColumnsList = styled(FlexContainer)`
  margin: 0;
  padding: 0;

  > li + li {
    margin-top: ${pxToRem(4)};
  }
`;

const ColumnsList: React.FC<ColumnsListProps> = ({ columns, setColumns }) => {
  const allColumns = DatatableStore.useState((s) => s.columns);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setColumns((columnsArr) => {
        const oldIndex = columnsArr.indexOf(active.id);
        const newIndex = columnsArr.indexOf(over.id);
        return arrayMove(columnsArr, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={columns} strategy={verticalListSortingStrategy}>
        <StyledColumnsList as="ul" flexDirection="column">
          {columns.map((column) => (
            <ColumnsItem
              key={column}
              columnId={column}
              label={allColumns[column].label}
            />
          ))}
        </StyledColumnsList>
      </SortableContext>
    </DndContext>
  );
};

ColumnsList.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  setColumns: PropTypes.func,
};

export default ColumnsList;
