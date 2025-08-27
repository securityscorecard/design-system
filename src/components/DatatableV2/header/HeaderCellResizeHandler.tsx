import { KeyboardEvent } from 'react';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';

const HeaderCellResizeHandler = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    setColumnSizingInfo,
    setColumnSizing,
    options: { defaultColumn },
  } = table;
  const { column, getResizeHandler, getSize } = header;
  const { id, columnDef } = column;
  const { header: cdHeader } = columnDef;
  const minSize = columnDef.minSize ?? defaultColumn.minSize;
  const maxSize = columnDef.maxSize ?? defaultColumn.maxSize;

  const handleColumnSizeReset = () => {
    setColumnSizingInfo((old) => ({
      ...old,
      isResizingColumn: false,
    }));
    column.resetSize();
  };

  const handleKeyboardColumnResize = (e: KeyboardEvent<HTMLHRElement>) => {
    const { key } = e;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;

    setColumnSizing((old) => {
      const oldValue = old?.[column.id] ?? getSize();
      const updatedValue =
        key === 'ArrowLeft'
          ? oldValue - 10
          : key === 'ArrowRight'
          ? oldValue + 10
          : oldValue;
      const newValue =
        updatedValue >= maxSize
          ? maxSize
          : updatedValue <= minSize
          ? minSize
          : updatedValue;

      return {
        ...old,
        [id]: newValue,
      };
    });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <hr
      aria-label={`Resize ${cdHeader} column`}
      aria-orientation="vertical"
      className="ds-table-header-cell-resize-handler"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onDoubleClick={handleColumnSizeReset}
      onKeyDown={handleKeyboardColumnResize}
      onMouseDown={getResizeHandler()}
      onTouchStart={getResizeHandler()}
    />
  );
};

export default HeaderCellResizeHandler;
