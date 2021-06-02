import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useModal } from './useModal';
import { defaultDSContext } from '../../../theme/DSProvider/DSProvider';

const Modal: React.FC = () => <div>Modal Content</div>;

describe('useModal', () => {
  it('should append inline styles to portals container when mounted', () => {
    renderHook(() => useModal(<Modal />));

    expect(
      document.getElementById(defaultDSContext.portalsContainerId),
    ).toHaveStyle({
      position: 'absolute',
      zIndex: '1250',
      top: '0px',
      left: '0px',
    });
  });

  it('should append inline styles to document body when mounted', () => {
    renderHook(() => useModal(<Modal />));

    expect(document.body).toHaveStyle({
      overflow: 'hidden',
    });
  });

  it('should remove inline styles to portals container when unmounted', () => {
    const { unmount } = renderHook(() => useModal(<Modal />));

    unmount();
    /* eslint-disable */
    expect(
      document.getElementById(defaultDSContext.portalsContainerId),
    ).toHaveAttribute('style', '');
    /* eslint-enable */
  });

  it('should remove inline styles to document body when unmounted', () => {
    const { unmount } = renderHook(() => useModal(<Modal />));

    unmount();
    /* eslint-disable */
    expect(document.body).toHaveAttribute('style', '');
    /* eslint-enable */
  });
});
