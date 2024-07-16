import React from 'react';
import FocusTrap from 'focus-trap-react';

import { BaseFocusTrapProps } from './BaseFocusTrap.types';

export const BaseFocusTrap = ({
  children,
  onDeactivate,
}: BaseFocusTrapProps) => (
  <FocusTrap
    focusTrapOptions={{
      initialFocus: false,
      fallbackFocus: document.createElement('div'),
      onDeactivate,
    }}
  >
    {children}
  </FocusTrap>
);
