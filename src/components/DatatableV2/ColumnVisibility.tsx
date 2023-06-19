export const ColumnVisibility = ({ table }) => {
  return (
    <div>
      <div>
        <label>
          <input
            {...{
              type: 'checkbox',
              checked: table.getIsAllColumnsVisible(),
              onChange: table.getToggleAllColumnsVisibilityHandler(),
            }}
          />{' '}
          Toggle All
        </label>
      </div>
      {table.getAllLeafColumns().map((column) => {
        if (column.columnDef.meta?.isStatic) {
          return null;
        }
        return (
          <div key={column.id}>
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{' '}
              {column.id}
            </label>
          </div>
        );
      })}
    </div>
  );
};
