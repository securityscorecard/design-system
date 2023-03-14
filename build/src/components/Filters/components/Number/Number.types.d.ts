export interface NumberProps {
    value: string;
    onChange: (event: React.ReactEventHandler) => void;
    min?: number;
    max?: number;
    placeholder?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    onError?: (boolean: any) => void;
}
export declare const NumberPropTypes: {
    onChange: any;
    value: any;
    min: any;
    max: any;
    placeholder: any;
    errorMessage: any;
    isInvalid: any;
    onError: any;
};
