import MockDate from 'mockdate';

import { timeFromNowFormater } from './TimeFromNow';
import {
  inLast1YearDate,
  inLast5YearsDate,
  inLast6MonthsDate,
  inLast7DaysDate,
  todayDate,
} from './TimeFromNow.mock';

describe('timeFromNowFormater', () => {
  beforeAll(() => {
    MockDate.set(todayDate);
  });
  afterAll(() => {
    MockDate.reset();
  });

  it('should return "Today" when provided date is today', () => {
    expect(timeFromNowFormater(todayDate)).toBe('Today');
  });
  it('should return day of the week when provided date is in last 7 days', () => {
    expect(timeFromNowFormater(inLast7DaysDate)).toBe('Saturday');
  });
  it('should return date when provided date is in the past', () => {
    expect(timeFromNowFormater(inLast6MonthsDate)).toBe('6 months');
    expect(timeFromNowFormater(inLast1YearDate)).toBe('a year');
    expect(timeFromNowFormater(inLast5YearsDate)).toBe('5 years');
  });
});
