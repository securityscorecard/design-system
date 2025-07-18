import { useLogger } from '../../hooks/useLogger';
import { useDatatable } from './hooks/useDatatable';
import { usePersistentState } from './hooks/usePersistentState';
import { DatatableOptions } from './Datatable.types';
import TableSurface from './table/TableSurface';

const Datatable = <D,>(props: DatatableOptions<D>) => {
  const logger = useLogger('DatatableV2');
  const {
    id,
    enablePersistentState,
    columns,
    initialState,
    state,
    manualSorting,
  } = props;
  const [persistentState, persistentStateSetters] = usePersistentState(
    `sscds_dt_${id}`,
    {
      enabled: enablePersistentState,
      disableSorting: manualSorting,
      columns,
      initialState: initialState ?? {},
      props,
    },
  );
  const table = useDatatable({
    ...props,
    ...(enablePersistentState
      ? {
          state: {
            ...state,
            ...persistentState,
          },
          ...persistentStateSetters,
        }
      : {}),
  });

  logger.log('Datatable Instance', table);
  logger.log('Datatable State', table.getState());

  return <TableSurface table={table} />;
};

export default Datatable;
