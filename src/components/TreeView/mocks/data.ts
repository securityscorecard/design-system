import { faker } from '@faker-js/faker';

import { Grades } from '../../HexGrade';
import { TreeViewRow } from '../TreeView.types';

type Industry = 'Technology' | 'Manufacturing' | 'Information' | 'Non Profit';
export type DataSource = {
  id: string;
  domain: string;
  name: string;
  grade: Grades;
  industry: Industry;
};

faker.seed(42);

const createItem = (): DataSource => ({
  id: faker.string.uuid(),
  domain: faker.internet.domainName(),
  name: faker.company.name(),
  grade: faker.helpers.arrayElement<Grades>(['A', 'B', 'C', 'D', 'F']),
  industry: faker.helpers.arrayElement<Industry>([
    'Technology',
    'Manufacturing',
    'Information',
    'Non Profit',
  ] as const),
});

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): DataSource[] => {
    const len = lens[depth];
    return range(len).map((): TreeViewRow<DataSource> => {
      return {
        ...createItem(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
