import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { BannersProvider, errorMessage, useBanners } from './BannersProvider';

describe('BannersManager/useBanners', () => {
  it('should throw when used outside of BannersProvider', () => {
    const { result } = renderHook(() => useBanners());

    expect(result.error).toStrictEqual(Error(errorMessage));
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
