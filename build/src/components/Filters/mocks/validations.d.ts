export declare const patterns: {
    string: {
        pattern: string;
        errorMessage: string;
    };
    tags: {
        pattern: string;
        errorMessage: string;
    };
    number: {
        pattern: string;
        errorMessage: string;
    };
    ip: {
        pattern: string;
        errorMessage: string;
    };
    domain: {
        pattern: string;
        errorMessage: string;
    };
};
export declare const validateDomains: (target: HTMLInputElement) => boolean;
export declare const validateIPs: (target: HTMLInputElement) => boolean;
