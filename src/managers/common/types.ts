export type ManagerContext<I, A> = { readonly instances: I[] } & A;
export type ValueOf<T> = T[keyof T];
export type InstanceId = string;
export type Instance<B> = { id?: InstanceId } & B;
