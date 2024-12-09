import { screen } from '@testing-library/react';
import { startsWith } from 'ramda';

import { setup } from '../../utils/tests/setup';
import Tab from './Tab';
import Tabs from './Tabs';

describe('Tabs', () => {
  it('should determine selected tab by strict equality by default', () => {
    setup(
      <Tabs selectedValue="overview">
        <Tab value="overview/section">Overview section</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>,
    );

    expect(
      screen.getByRole('tab', { name: /Overview/, selected: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', {
        name: /Overview section/,
        selected: false,
      }),
    ).toBeInTheDocument();
  });

  it('should determine selected tab by custom pattern matcher if provided', () => {
    setup(
      <Tabs
        selectedValue="overview/section"
        selectedPatternMatcher={startsWith}
      >
        <Tab value="section">Section</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>,
    );

    expect(
      screen.getByRole('tab', { name: /Overview/, selected: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', {
        name: /Section/,
        selected: false,
      }),
    ).toBeInTheDocument();
  });
});
