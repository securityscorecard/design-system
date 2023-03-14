export declare const generateControl: <K extends string | number, V extends string | number>(type: string, options: Record<K, V>) => {
    options: V[];
    control: {
        type: string;
        labels: Record<V, K>;
    };
};
