import { Ref } from 'react';
export declare const mergeRefs: <T>(...refs: Ref<T>[]) => Ref<T> | ((inst: T) => void);
