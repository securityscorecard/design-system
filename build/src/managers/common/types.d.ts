export declare type ManagerContext<I, A> = {
    readonly instances: I[];
} & A;
export declare type ValueOf<T> = T[keyof T];
export declare type InstanceId = string;
export declare type Instance<B> = {
    id?: InstanceId;
} & B;
