import type { ReactNode } from 'react';
import type { Notification } from './types';

import { useReducer } from 'react';

import { Stack, Toast } from '../../components';
import { ToastArea } from '../../components/Toast/Toast';
import { useManagerEvents } from '../common/useManagerEvents';
import { ACTIONS } from './types';
import { NotificationsProviderReducer } from './reducer';

export const NotificationsProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [state, dispatch] = useReducer(NotificationsProviderReducer, []);

  const addNotification = (notification: Notification) => {
    dispatch({
      type: ACTIONS.ADD_NOTIFICATION,
      notification,
    });
  };

  const updateNotification = (notification: Notification) => {
    dispatch({
      type: ACTIONS.UPDATE_NOTIFICATION,
      notification,
    });
  };

  const removeNotification = (id: string) => {
    dispatch({
      type: ACTIONS.REMOVE_NOTIFICATION,
      id,
    });
  };

  const listeners = {
    [ACTIONS.ADD_NOTIFICATION]: (
      e: CustomEvent<{ notification: Notification }>,
    ) => addNotification(e.detail.notification),
    [ACTIONS.UPDATE_NOTIFICATION]: (
      e: CustomEvent<{ notification: Notification }>,
    ) => updateNotification(e.detail.notification),
    [ACTIONS.REMOVE_NOTIFICATION]: (e: CustomEvent<{ id: string }>) =>
      removeNotification(e.detail.id),
  };

  useManagerEvents<typeof ACTIONS>(listeners);

  return (
    <>
      {children}
      {state.length > 0 && (
        <ToastArea>
          <Stack gap="md">
            {state.map((notification) => (
              <Toast
                key={notification.id}
                isStandalone={false}
                variant={notification.variant}
                onClose={() => removeNotification(notification.id)}
              >
                {notification.content}
              </Toast>
            ))}
          </Stack>
        </ToastArea>
      )}
    </>
  );
};

NotificationsProvider.displayName = 'NotificationsProvider';
