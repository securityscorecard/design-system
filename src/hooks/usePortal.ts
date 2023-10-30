import type { ReactNode } from 'react';
import type { OnHide, OnShow, RCPF } from 'react-cool-portal';

import { useContext } from 'react';
import { noop } from 'ramda-adjunct';
import useCoolPortal from 'react-cool-portal';

import { DSContext } from '../theme/DSProvider/DSProvider';

type UsePortal = (config?: {
  onShow?: OnShow;
  onHide?: OnHide;
  hasInternalShowHide?: boolean;
  defaultIsPortalVisible?: boolean;
}) => {
  togglePortal: RCPF;
  showPortal: RCPF;
  hidePortal: RCPF;
  isPortalVisible: boolean;
  Portal: ({ children }: { children: ReactNode }) => JSX.Element;
};

export const usePortal: UsePortal = ({
  onShow = noop,
  onHide = noop,
  hasInternalShowHide = false,
  defaultIsPortalVisible = false,
} = {}) => {
  const { portalsContainerId } = useContext(DSContext);
  const { Portal, isShow, show, hide, toggle } = useCoolPortal({
    containerId: portalsContainerId,
    autoRemoveContainer: false,
    defaultShow: defaultIsPortalVisible,
    internalShowHide: hasInternalShowHide,
    onShow,
    onHide,
  });

  return {
    togglePortal: toggle,
    showPortal: show,
    hidePortal: hide,
    isPortalVisible: isShow,
    Portal,
  };
};
