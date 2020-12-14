import React from 'react';
import { noop } from 'ramda-adjunct';

import { ContextProps } from './Context.types';

const Context = React.createContext<ContextProps>({
  size: 'lg',
  modalRef: null,
  handleClose: noop,
});

export default Context;
