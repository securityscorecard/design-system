import React from 'react';
import { CellRendererProps } from './renderers.types';
declare function CellRenderer<D extends Record<string, unknown>>({ value, column: { cellType, cellLinkComponent, cellHrefComposer, cellToComposer, cellOnClick, cellFormatter, cellTooltipPopupComposer, nullCondition, nullConditionValue, multiValueDisplayLimit, }, row: { original: rowData }, }: CellRendererProps<D>): React.ReactElement;
declare namespace CellRenderer {
    var propTypes: {
        value: any;
        column: any;
        row: any;
    };
    var displayName: string;
}
export default CellRenderer;
