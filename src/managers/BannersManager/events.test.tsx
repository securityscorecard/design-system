import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { BannersProvider, useBanners } from './BannersProvider';
import { addBanner, removeBanner } from './events';
import { Banner } from '../../components';

const testBanner = {
  id: 'test',
  component: <Banner>test</Banner>,
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BannersProvider>{children}</BannersProvider>
);
describe('BannersManager/events', () => {
  it('should add banner to instances array', () => {
    const { result } = renderHook(() => useBanners(), { wrapper });

    act(() => {
      addBanner(testBanner);
    });

    expect(result.current.instances).toStrictEqual([testBanner]);
  });

  it('should remove banner from instances array', () => {
    const { result } = renderHook(() => useBanners(), { wrapper });

    act(() => {
      addBanner(testBanner);
    });

    expect(result.current.instances).toHaveLength(1);

    act(() => {
      removeBanner(testBanner.id);
    });

    expect(result.current.instances).toHaveLength(0);
  });
});
