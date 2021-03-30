import { HeaderGroup } from 'react-table';

export interface HeadProps<D extends Record<string, unknown>> {
  headerGroups: HeaderGroup<D>[];
}
