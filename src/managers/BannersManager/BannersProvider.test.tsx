import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { BannersProvider, useBanners } from './BannersProvider';

describe('BannersManager/useBanners', () => {
  it('should throw when used outside of BannersProvider', () => {
    const { result } = renderHook(() => useBanners());

    expect(result.error).toStrictEqual(
      Error(
        '[design-system/banner-manager] "useBanners" must be inside a "BannersProvider" with a value',
      ),
    );
  });

  it('should return context value', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <BannersProvider>{children}</BannersProvider>
    );
    const { result } = renderHook(() => useBanners(), { wrapper });

    expect(result.current.instances).toBeDefined();
    expect(result.current.addBanner).toBeDefined();
    expect(result.current.removeBanner).toBeDefined();
  });
});
