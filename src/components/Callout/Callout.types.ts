import React, { PropsWithChildren } from 'react';

import { SSCIcons } from '../Icon/Icon.types';

export type CalloutProps = PropsWithChildren<{
  icon: React.ReactNode | SSCIcons;
}>;
