import type { PropsWithChildren, ReactNode } from 'react';
import type { SSCIcons } from '../Icon/Icon.types';

export type CalloutProps = PropsWithChildren<{
  icon: ReactNode | SSCIcons;
}>;
