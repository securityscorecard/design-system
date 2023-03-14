import React from 'react';
import { HeadProps } from './Head.types';
declare function Head<D extends Record<string, unknown>>({ headerGroups, }: HeadProps<D>): React.ReactElement;
declare namespace Head {
    var displayName: string;
}
export default Head;
