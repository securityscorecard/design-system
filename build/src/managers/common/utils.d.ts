import type { InstanceId } from './types';
export declare const randomId: () => string;
export declare const findInstance: <I extends Record<string, unknown>>(id: InstanceId, state: I[]) => any;
export declare const addInstance: <Instance extends {
    id?: InstanceId;
}>(state: Required<Instance>[], instance: Instance) => Instance[];
export declare const removeInstance: <Instance extends {
    id?: InstanceId;
}>(state: Required<Instance>[], id: InstanceId) => Instance[];
export declare const updateInstance: <Instance extends {
    id: InstanceId;
}>(state: Required<Instance>[], instance: Instance) => Instance[];
