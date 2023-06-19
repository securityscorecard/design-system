import { useEffect, useState } from 'react';

export const EditableCell = ({
  getValue,
  row: { index },
  column: { id },
  table,
}) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
    setIsEditing(false);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (isEditing) {
    return (
      <div>
        <input
          value={value as string}
          onBlur={onBlur}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            table.options.meta?.updateData(index, id, value);
            setIsEditing(false);
          }}
        >
          ✅
        </button>
      </div>
    );
  }
  return (
    <div>
      {value}{' '}
      <button
        type="button"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        🔧
      </button>
    </div>
  );
};
