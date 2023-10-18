import { DataSource, generateData } from './data';

interface Result {
  entries: DataSource[];
  pageCount: number;
  rowsCount: number;
}

const data = generateData(100);
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
    rowsCount: data.length,
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
