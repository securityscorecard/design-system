import { NotificationsProviderReducer } from './reducer';
import { ACTIONS, Notification } from './types';

describe('NotificationsProviderReducer', () => {
  it('should return original state if unknown action is provided', () => {
    const initialState: Notification[] = [];
    const newNotification: Notification = {
      id: '1',
      content: 'New Notification',
      autoDismiss: true,
    };
    const updatedState = NotificationsProviderReducer(initialState, {
      // @ts-expect-error - testing runtime error
      type: 'unknown',
      notification: newNotification,
    });
    expect(updatedState).toEqual([]);
  });
  describe('ACTIONS.ADD_NOTIFICATION', () => {
    it('should correctly add notification', () => {
      const initialState: Notification[] = [];
      const newNotification: Notification = {
        id: '1',
        content: 'New Notification',
        autoDismiss: true,
      };
      const updatedState = NotificationsProviderReducer(initialState, {
        type: ACTIONS.ADD_NOTIFICATION,
        notification: newNotification,
      });
      expect(updatedState).toEqual([newNotification]);
    });
  });
  describe('ACTIONS.UPDATE_NOTIFICATION', () => {
    it('should update an existing notification when notification ID matches an existing notification', () => {
      const initialState: Notification[] = [
        { id: '1', content: 'Old Notification', autoDismiss: false },
      ];
      const updatedNotification: Notification = {
        id: '1',
        content: 'Updated Notification',
        autoDismiss: true,
      };
      const updatedState = NotificationsProviderReducer(initialState, {
        type: ACTIONS.UPDATE_NOTIFICATION,
        notification: updatedNotification,
      });
      expect(updatedState).toEqual([updatedNotification]);
    });

    it('should not update any notification when notification ID does not match any existing notification', () => {
      const initialState: Notification[] = [
        { id: '1', content: 'Existing Notification', autoDismiss: false },
      ];
      const nonMatchingNotification: Notification = {
        id: '2', // This ID does not exist in initialState
        content: 'Non-matching Notification',
        autoDismiss: true,
      };
      const updatedState = NotificationsProviderReducer(initialState, {
        type: ACTIONS.UPDATE_NOTIFICATION,
        notification: nonMatchingNotification,
      });
      expect(updatedState).toEqual(initialState); // State should remain unchanged
    });
  });
  describe('ACTIONS.REMOVE_NOTIFICATION', () => {
    it('should remove notification when notification ID matches an existing notification', () => {
      const initialState: Notification[] = [
        { id: '1', content: 'Notification to Remove', autoDismiss: true },
      ];
      const updatedState = NotificationsProviderReducer(initialState, {
        type: ACTIONS.REMOVE_NOTIFICATION,
        id: '1',
      });
      expect(updatedState).toEqual([]);
    });
    it('should not remove notification when notification ID does not match any existing notification', () => {
      const initialState: Notification[] = [
        { id: '1', content: 'Notification to Remove', autoDismiss: true },
      ];
      const updatedState = NotificationsProviderReducer(initialState, {
        type: ACTIONS.REMOVE_NOTIFICATION,
        id: '2',
      });
      expect(updatedState).toEqual(initialState);
    });
  });
});
