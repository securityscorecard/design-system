import React from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined } from 'ramda-adjunct';

import LinkRenderer from './LinkRenderer';
import MultiValueRenderer from './MultiValueRenderer';
import TooltipWrapper from '../../components/TooltipWrapper';
import { CellRendererProps } from './renderers.types';
import { CellTypes } from './renderers.enums';

const CellRenderer = <D extends Record<string, unknown>>({
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
}: CellRendererProps<D>): React.ReactElement => {
  if (nullCondition(value)) {
    return (
      <span className="ds-table-cell-null">
        {isNotUndefined(nullConditionValue) ? nullConditionValue : value}
      </span>
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

  const cellValue = isNotUndefined(cellFormatter)
    ? cellFormatter(value, rowData)
    : value;
  const shouldRenderTooltip = isNotUndefined(cellTooltipPopupComposer);
  const renderTooltipPopup = () => cellTooltipPopupComposer(cellValue, rowData);

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
};

CellRenderer.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]).isRequired,
  column: PropTypes.shape({
    cellType: PropTypes.oneOf(Object.values(CellTypes)),
    cellLinkComponent: PropTypes.elementType,
    cellHrefComposer: PropTypes.func,
    cellToComposer: PropTypes.func,
    cellOnClick: PropTypes.func,
    cellFormatter: PropTypes.func,
    cellTooltipPopupComposer: PropTypes.func,
    nullCondition: PropTypes.func,
    nullConditionValue: PropTypes.string,
    multiValueDisplayLimit: PropTypes.number,
  }).isRequired,
  row: PropTypes.shape({
    original: PropTypes.shape({}),
  }),
};

export default CellRenderer;
