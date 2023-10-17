import { faker } from '@faker-js/faker';

type DetectionMethod =
  | 'WHOIS'
  | 'DNS'
  | 'SSL'
  | '3rd party'
  | 'SSC Res.'
  | 'Pub. Data'
  | 'Cloud';
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
type Status = 'Claimed' | 'Attributed' | 'Disputed' | 'Removed' | 'Dynamic';
interface Organization {
  name: string;
  domain: string;
  score: number;
  grade: Grade;
}

export interface DataSource {
  id: string;
  ipAddress: string;
  status: Status;
  country: string;
  findingsCount: number;
  observationDate: Date;
  organization: Organization;
  detectionMethod: DetectionMethod[] | undefined;
}

faker.seed(42);
faker.setDefaultRefDate('2023-10-16T00:00:00.000Z');

const createItem = (): DataSource => ({
  id: faker.string.uuid(),
  country: faker.location.country(),
  detectionMethod: faker.helpers.arrayElements<DetectionMethod>([
    'WHOIS',
    'DNS',
    'SSL',
    '3rd party',
    'SSC Res.',
    'Pub. Data',
    'Cloud',
  ]),
  findingsCount: faker.number.int(2000),
  ipAddress: faker.internet.ipv4(),
  observationDate: faker.date.past({ years: 3 }),
  organization: {
    domain: faker.internet.domainName(),
    name: faker.company.name(),
    score: faker.number.int({ min: 40, max: 100 }),
    grade: faker.helpers.arrayElement<Grade>(['A', 'B', 'C', 'D', 'F']),
  },
  status: faker.helpers.arrayElement<Status>([
    'Claimed',
    'Attributed',
    'Disputed',
    'Removed',
    'Dynamic',
  ]),
});

export const generateData = (items: number): DataSource[] => {
  const data: DataSource[] = [];

  for (let i = 0; i < items; i += 1) {
    data.push(createItem());
  }

  return data;
};
