import { useContext } from 'react';

import DatatableContext, { DatatableContextType } from '../DatatableContext';

export const useDatatable = (): DatatableContextType =>
  useContext(DatatableContext);
