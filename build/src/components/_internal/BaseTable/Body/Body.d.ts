import React from 'react';
import { BodyProps } from './Body.types';
declare function Body<D extends Record<string, unknown>>({ rows, prepareRow, ...bodyProps }: BodyProps<D>): React.ReactElement;
declare namespace Body {
    var displayName: string;
}
export default Body;
