declare type Handler<E> = (event?: E) => void;
export declare const useDebouncedHandler: <Event_1>(fn: Handler<Event_1>) => Handler<Event_1>;
export {};
