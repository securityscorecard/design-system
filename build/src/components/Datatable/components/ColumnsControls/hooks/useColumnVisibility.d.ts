export declare const useColumnVisibility: () => {
    hiddenColumns: string[];
    setHiddenColumn: (id: string, value: boolean) => void;
    storeVisibleColumns: () => void;
    reinitializeVisibleColumns: () => void;
    resetVisisbleColumns: () => void;
    isInDefaultVisibility: boolean;
};
