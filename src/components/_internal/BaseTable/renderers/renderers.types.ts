import type { CellValue, Row } from 'react-table';
import type { To } from 'history';

import { ReactComponentLike } from '../../../../types/utils.types';
import { CellTypes as CellTypesEnum } from './renderers.enums';

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
  component?: ReactComponentLike;
  isDiscrete?: boolean;
  className?: string;
}

export interface MultiValueRendererProps<D>
  extends InteractiveRendererProps<D> {
  values: CellValue[];
  valueFormatter?: CellFormaterFn<D>;
  multiValueDisplayLimit?: number;
  tooltipComposer?: TooltipPopupComposerFn<D>;
  linkComponent?: ReactComponentLike;
  rowData: D;
}

type CellTypes = (typeof CellTypesEnum)[keyof typeof CellTypesEnum];

export type RendererColumnOptions<D> = {
  cellType?: CellTypes;
  cellLinkComponent?: ReactComponentLike;
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
