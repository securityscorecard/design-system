import React from 'react';
import { MultiValueRendererProps } from './renderers.types';
declare function MultiValueRenderer<D extends Record<string, unknown>>({ values, valueFormatter, multiValueDisplayLimit, onClick, hrefComposer, toComposer, linkComponent, rowData, tooltipComposer, }: MultiValueRendererProps<D>): React.ReactElement;
declare namespace MultiValueRenderer {
    var displayName: string;
}
export default MultiValueRenderer;
