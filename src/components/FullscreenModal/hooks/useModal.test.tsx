import { renderHook } from '@testing-library/react';

import { useModal } from './useModal';
import { defaultDSContext } from '../../../theme/DSProvider/DSProvider';

const Modal = () => <div>Modal Content</div>;

describe('useModal', () => {
  it('should append inline styles to portals container when mounted', () => {
    renderHook(() => useModal(<Modal />));

    /* eslint-disable testing-library/no-node-access */
    expect(
      document.getElementById(defaultDSContext.portalsContainerId),
    ).toHaveStyle({
      position: 'absolute',
      zIndex: '1250',
      top: '0px',
      left: '0px',
    });
    /* eslint-enable testing-library/no-node-access */
  });

  it('should append inline styles to document body when mounted', () => {
    renderHook(() => useModal(<Modal />));

    /* eslint-disable testing-library/no-node-access */
    expect(document.body).toHaveStyle({
      overflow: 'hidden',
    });
    /* eslint-enable testing-library/no-node-access */
  });

  it('should remove inline styles to portals container when unmounted', () => {
    const { unmount } = renderHook(() => useModal(<Modal />));

    unmount();
    /* eslint-disable testing-library/no-node-access */
    expect(
      document.getElementById(defaultDSContext.portalsContainerId),
    ).not.toHaveStyle({
      position: 'absolute',
      zIndex: '1250',
      top: '0px',
      left: '0px',
    });
    /* eslint-enable testing-library/no-node-access */
  });

  it('should remove inline styles to document body when unmounted', () => {
    const { unmount } = renderHook(() => useModal(<Modal />));

    unmount();
    /* eslint-disable testing-library/no-node-access */
    expect(document.body).not.toHaveStyle({
      overflow: 'hidden',
    });
    /* eslint-enable testing-library/no-node-access */
  });
});
