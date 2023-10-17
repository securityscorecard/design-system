import dataSource from './data.json';
import { DataSource } from './data.types';

interface Result {
  entries: DataSource[];
  pageCount: number;
}

const data = dataSource as DataSource[];
export const fetchData = (options: {
  pageIndex: number;
  pageSize: number;
}): Result => {
  return {
    entries: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize,
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  };
};

/** Just to mimic react-query interface */
export const useQuery = ({
  queryFn,
}: {
  queryFn: () => Result;
  [key: string]: unknown;
}) => {
  const result = queryFn();
  return {
    data: result,
  };
};
