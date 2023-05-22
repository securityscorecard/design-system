import { createCustomEvent } from '../common/events';
import { ACTIONS, Notification } from './types';

export const removeNotification = (id: string) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, { id: string }>(
      ACTIONS.REMOVE_NOTIFICATION,
      {
        id,
      },
    ),
  );
};

const setupAutodismiss = (notification: Notification) => {
  if (notification.autoDismiss || notification.autoDismiss === undefined) {
    setTimeout(() => removeNotification(notification.id), 6000);
  }
};

export const addNotification = (notification: Notification) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, { notification: Notification }>(
      ACTIONS.ADD_NOTIFICATION,
      {
        notification,
      },
    ),
  );
  setupAutodismiss(notification);
};

export const updateNotification = (notification: Notification) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, { notification: Notification }>(
      ACTIONS.UPDATE_NOTIFICATION,
      {
        notification,
      },
    ),
  );
  setupAutodismiss(notification);
};
