import { DatatableColumnDef } from '../Datatable.types';

type Data = {
  name: string;
  surname: string;
  color: string;
};

export const data: Data[] = [
  { name: 'Stephen', surname: 'Strange', color: 'blue' },
  { name: 'Steve', surname: 'Rogers', color: 'blue' },
  { name: 'Bruce', surname: 'Banner', color: 'green' },
];

export const columns: DatatableColumnDef<Data>[] = [
  { accessorKey: 'name', header: 'name' },
  { accessorKey: 'surname', header: 'surname' },
  { accessorKey: 'color', header: 'color' },
];
