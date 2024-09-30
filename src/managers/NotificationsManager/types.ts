import type { ReactNode } from 'react';

import { Variants } from '../../components/_internal/BaseToastBanner/BaseToastBanner.types';

// eslint-disable-next-line
export enum ACTIONS {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

export type NotificationActions = (typeof ACTIONS)[keyof typeof ACTIONS];

export interface Notification {
  id: string;
  variant?: Variants;
  content: ReactNode;
  autoDismiss?: boolean;
}
