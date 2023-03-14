export declare const logStyles: string;
export declare const warnStyles: string;
export declare const errorStyles: string;
export declare const logError: (namespace: any, message: any) => void;
export declare const useLogger: (namespace: string) => {
    log: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
};
