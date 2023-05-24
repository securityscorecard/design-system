import React, { PropsWithChildren } from 'react';

import { SSCIcons } from '../Icon/Icon.types';

export type CalloutVariants = 'info' | 'neutral';

export type CalloutProps = PropsWithChildren<{
  icon: React.ReactNode | SSCIcons;
  variant: CalloutVariants;
}>;
