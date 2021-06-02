import React, { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { isNull } from 'ramda-adjunct';

import { DSContext } from '../../../theme/DSProvider/DSProvider';

const createEl = (id: string): HTMLElement => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  document.body.appendChild(el);

  return el;
};

const getContainer = (id: string): HTMLElement =>
  document.getElementById(id) || createEl(id);

export const useModal = (el: React.ReactElement): (() => React.ReactPortal) => {
  const { portalsContainerId } = useContext(DSContext);
  const containerRef = useRef(getContainer(portalsContainerId));

  useEffect(() => {
    if (isNull(containerRef.current)) return null;
    const { current } = containerRef;

    document.body.style.overflow = 'hidden';
    current.style.position = 'absolute';
    current.style.zIndex = '1250';
    current.style.top = '0';
    current.style.left = '0';

    return () => {
      document.body.style.removeProperty('overflow');
      current.style.removeProperty('position');
      current.style.removeProperty('z-index');
      current.style.removeProperty('top');
      current.style.removeProperty('left');
    };
  }, [portalsContainerId]);

  return () => {
    if (isNull(containerRef.current)) return null;
    return createPortal(el, containerRef.current);
  };
};
