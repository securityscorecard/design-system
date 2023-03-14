import { ActionKinds, ActionWithSubactions } from '../../../types/action.types';
export declare type Action<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = ActionKinds<OnClickArgs, OnClickReturnType> | ActionWithSubactions<OnClickArgs, OnClickReturnType>;
export declare const ActionPropType: any;
