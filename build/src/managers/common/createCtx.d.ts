export declare function createCtx<P>(namespace: string, errorMessage: string): {
    readonly useContext: () => P;
    readonly Provider: import("react").Provider<P>;
};
