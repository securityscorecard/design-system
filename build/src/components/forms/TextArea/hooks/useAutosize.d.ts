import React from 'react';
export declare const useAutosize: (ref: React.MutableRefObject<HTMLTextAreaElement>, value: string) => {
    text: string;
    parentHeight: string;
    textAreaHeight: string;
    autosize: () => void;
};
