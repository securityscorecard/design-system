import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { useBannersState } from './useBannersState';
import { Banner } from '../../components';

const testBanner = {
  id: 'test',
  component: <Banner>test</Banner>,
};

describe('BannersManager/useBannersState', () => {
  it('should add banner to the instances array', () => {
    const { result } = renderHook(() => useBannersState());

    expect(result.current.state).toHaveLength(0);

    act(() => {
      result.current.addBanner(testBanner);
    });
    expect(result.current.state).toStrictEqual([testBanner]);
  });

  it('should assign random id upon creation when id is not provided', () => {
    const { result } = renderHook(() => useBannersState());

    act(() => {
      result.current.addBanner({
        ...testBanner,
        id: undefined,
      });
    });
    expect(result.current.state[0].id).not.toBeNull();
  });

  it('should not add multiple banners with the same id', () => {
    const { result } = renderHook(() => useBannersState());

    act(() => {
      result.current.addBanner(testBanner);
      result.current.addBanner(testBanner);
      result.current.addBanner(testBanner);
    });
    expect(result.current.state).toHaveLength(1);
  });

  it('should remove banner from instances array', () => {
    const { result } = renderHook(() => useBannersState());

    act(() => {
      result.current.addBanner(testBanner);
      result.current.addBanner({ ...testBanner, id: 'remove' });
    });
    expect(result.current.state).toHaveLength(2);

    act(() => {
      result.current.removeBanner(testBanner.id);
      result.current.removeBanner('remove');
    });
    expect(result.current.state).toHaveLength(0);
  });
});
