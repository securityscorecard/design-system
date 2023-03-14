import React from 'react';
import { LinkRendererProps } from './renderers.types';
declare function LinkRenderer<D extends Record<string, unknown>>({ value, isDiscrete, onClick, hrefComposer, toComposer, component, rowData, className, }: LinkRendererProps<D>): React.ReactElement;
declare namespace LinkRenderer {
    var displayName: string;
}
export default LinkRenderer;
