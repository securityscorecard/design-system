import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react';

import { BannersProvider, useBanners } from './BannersProvider';

describe('BannersManager/useBanners', () => {
  it('should throw when used outside of BannersProvider', () => {
    expect(() => renderHook(() => useBanners())).toThrow(
      Error(
        '[design-system/banner-manager] "useBanners" must be inside a "BannersProvider" with a value',
      ),
    );
  });

  it('should return context value', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <BannersProvider>{children}</BannersProvider>
    );
    const { result } = renderHook(() => useBanners(), { wrapper });

    expect(result.current.instances).toBeDefined();
    expect(result.current.addBanner).toBeDefined();
    expect(result.current.removeBanner).toBeDefined();
  });
});
