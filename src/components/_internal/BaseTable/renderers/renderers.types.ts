import type { CellValue, Row } from 'react-table';
import type { To } from 'history';
import type { CellTypes as CellTypesEnum } from './renderers.enums';
import type { ElementType } from 'react';

type OnClickFn<D> = (value: CellValue, rowData: D) => void;
type HrefComposerFn<D> = (value: CellValue, rowData: D) => string;
type ToComposerFn<D> = (value: CellValue, rowData: D) => To;
type CellFormaterFn<D> = (value: CellValue, rowData: D) => string;
type TooltipPopupComposerFn<D> = (value: CellValue, rowData: D) => JSX.Element;

interface InteractiveRendererProps<D> {
  onClick?: OnClickFn<D>;
  hrefComposer?: HrefComposerFn<D>;
  toComposer?: ToComposerFn<D>;
}

export interface LinkRendererProps<D> extends InteractiveRendererProps<D> {
  value: CellValue;
  rowData: D;
  component?: ElementType;
  isDiscrete?: boolean;
  className?: string;
}

export interface MultiValueRendererProps<D>
  extends InteractiveRendererProps<D> {
  values: CellValue[];
  valueFormatter?: CellFormaterFn<D>;
  multiValueDisplayLimit?: number;
  tooltipComposer?: TooltipPopupComposerFn<D>;
  linkComponent?: ElementType;
  rowData: D;
}

export type CellTypes = typeof CellTypesEnum[keyof typeof CellTypesEnum];

export type RendererColumnOptions<D> = {
  cellType?: CellTypes;
  cellLinkComponent?: ElementType;
  cellOnClick?: OnClickFn<D>;
  cellHrefComposer?: HrefComposerFn<D>;
  cellToComposer?: ToComposerFn<D>;
  cellFormatter?: CellFormaterFn<D>;
  cellTooltipPopupComposer?: TooltipPopupComposerFn<D>;
  nullCondition?: (value: CellValue) => boolean;
  nullConditionValue?: string;
  multiValueDisplayLimit?: number;
};

export interface CellRendererProps<D extends Record<string, unknown>> {
  value: CellValue;
  column: RendererColumnOptions<D>;
  row: Row<D>;
}
