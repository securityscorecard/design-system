import type { ReactElement } from 'react';
import type { CellRendererProps } from './renderers.types';

import { isNotUndefined } from 'ramda-adjunct';

import LinkRenderer from './LinkRenderer';
import MultiValueRenderer from './MultiValueRenderer';
import TooltipWrapper from '../components/TooltipWrapper';
import { CellTypes } from './renderers.enums';

function CellRenderer<D extends Record<string, unknown>>({
  value,
  column: {
    cellType,
    cellLinkComponent,
    cellHrefComposer,
    cellToComposer,
    cellOnClick,
    cellFormatter,
    cellTooltipPopupComposer,
    nullCondition,
    nullConditionValue,
    multiValueDisplayLimit,
  },
  row: { original: rowData },
}: CellRendererProps<D>): ReactElement {
  const cellValue = isNotUndefined(cellFormatter)
    ? cellFormatter(value, rowData)
    : value;
  const shouldRenderTooltip = isNotUndefined(cellTooltipPopupComposer);
  const renderTooltipPopup = () => cellTooltipPopupComposer(cellValue, rowData);

  if (nullCondition(value)) {
    return (
      <TooltipWrapper
        popupRenderer={renderTooltipPopup}
        shouldRender={shouldRenderTooltip}
      >
        <span className="ds-table-cell-null">
          {isNotUndefined(nullConditionValue) ? nullConditionValue : value}
        </span>
      </TooltipWrapper>
    );
  }

  if (cellType === CellTypes.multiValue) {
    return (
      <MultiValueRenderer<D>
        hrefComposer={cellHrefComposer}
        linkComponent={cellLinkComponent}
        multiValueDisplayLimit={multiValueDisplayLimit}
        rowData={rowData}
        toComposer={cellToComposer}
        tooltipComposer={cellTooltipPopupComposer}
        valueFormatter={cellFormatter}
        values={value}
        onClick={cellOnClick}
      />
    );
  }

  if (cellType === CellTypes.link || cellType === CellTypes.discreteLink) {
    return (
      <TooltipWrapper
        popupRenderer={renderTooltipPopup}
        shouldRender={shouldRenderTooltip}
      >
        <LinkRenderer<D>
          component={cellLinkComponent}
          hrefComposer={cellHrefComposer}
          isDiscrete={cellType === CellTypes.discreteLink}
          rowData={rowData}
          toComposer={cellToComposer}
          value={cellValue}
          onClick={cellOnClick}
        />
      </TooltipWrapper>
    );
  }

  return (
    <TooltipWrapper
      popupRenderer={renderTooltipPopup}
      shouldRender={shouldRenderTooltip}
    >
      {cellValue}
    </TooltipWrapper>
  );
}

CellRenderer.displayName = 'CellRenderer';
export default CellRenderer;
