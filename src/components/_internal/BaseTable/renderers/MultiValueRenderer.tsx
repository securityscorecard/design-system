import type { ReactElement } from 'react';
import type { MultiValueRendererProps } from './renderers.types';

import { any, identity, map, pipe, slice } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { Tooltip } from '../../../Tooltip';
import LinkRenderer from './LinkRenderer';
import TooltipWrapper from '../components/TooltipWrapper';

const renderRestValue = (startIndex, formatter, values) =>
  pipe(
    slice(startIndex, Infinity),
    map((value) => {
      const formattedValue = isNotUndefined(formatter)
        ? formatter(value)
        : value;
      return <div key={value}>{formattedValue}</div>;
    }),
  )(values);

function MultiValueRenderer<D extends Record<string, unknown>>({
  values,
  valueFormatter,
  multiValueDisplayLimit = 2,
  onClick,
  hrefComposer,
  toComposer,
  linkComponent,
  rowData,
  tooltipComposer,
}: MultiValueRendererProps<D>): ReactElement {
  const hasDisplayLimit = multiValueDisplayLimit > 0;
  const valuesLength = values.length;
  const containsLink = any(isNotUndefined, [hrefComposer, toComposer, onClick]);
  const shouldRenderTooltip = isNotUndefined(tooltipComposer);
  const renderTooltipPopup = (value) => () => tooltipComposer(value, rowData);
  const formatter = isNotUndefined(valueFormatter)
    ? (value) => valueFormatter(value, rowData)
    : identity;

  return (
    <div className="ds-table-cell-multivalue">
      {values.map((value, index) => {
        if (hasDisplayLimit && index >= multiValueDisplayLimit) return null;
        const formattedValue = formatter(value);

        if (containsLink) {
          return (
            <TooltipWrapper
              key={value}
              popupRenderer={renderTooltipPopup(value)}
              shouldRender={shouldRenderTooltip}
            >
              <LinkRenderer
                className="ds-multivalue-pill"
                component={linkComponent}
                hrefComposer={hrefComposer}
                rowData={rowData}
                toComposer={toComposer}
                value={formattedValue}
                isDiscrete
                onClick={onClick}
              />
            </TooltipWrapper>
          );
        }

        return (
          <TooltipWrapper
            key={value}
            popupRenderer={renderTooltipPopup(value)}
            shouldRender={shouldRenderTooltip}
          >
            <div className="ds-multivalue-pill">{formattedValue}</div>
          </TooltipWrapper>
        );
      })}
      {hasDisplayLimit && valuesLength > multiValueDisplayLimit && (
        <Tooltip
          popup={renderRestValue(multiValueDisplayLimit, formatter, values)}
        >
          <div className="ds-multivalue-pill" data-testid="ds-multivalue-pill">
            + {valuesLength - multiValueDisplayLimit}
          </div>
        </Tooltip>
      )}
    </div>
  );
}

MultiValueRenderer.displayName = 'MultiValueRenderer';
export default MultiValueRenderer;
