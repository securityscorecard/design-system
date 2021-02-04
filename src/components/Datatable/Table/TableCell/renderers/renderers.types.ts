import { To } from 'history';
import PropTypes from 'prop-types';

type ColumnOptions<V> = {
  nullCondition?: (value: V) => boolean;
  nullConditionValue?: string;
};

export const ColumnOptionsPropType = PropTypes.shape({
  nullCondition: PropTypes.func,
  nullConditionValue: PropTypes.string,
});

export interface CellRendererProps<V> {
  value: V;
  column: ColumnOptions<V>;
}

interface AbsoluteLinkColumnOptions<V> {
  hrefComposer: (value: V) => string;
  toComposer?: never;
  onClick?: (value: V) => void;
}

interface RelativeLinkColumnOptions<V> {
  hrefComposer?: never;
  toComposer: (value: V) => To;
  onClick?: (value: V) => void;
}

interface HandlerColumnOptions<V> {
  onClick?: (value: V) => void;
}

type LinkColumnOptions<V> =
  | AbsoluteLinkColumnOptions<V>
  | RelativeLinkColumnOptions<V>
  | HandlerColumnOptions<V>;

export interface LinkCellRendererProps<V> extends CellRendererProps<V> {
  column: ColumnOptions<V> & LinkColumnOptions<V>;
}

export const AbsoluteLinkColumnOptionsPropType = PropTypes.shape({
  hrefComposer: PropTypes.func.isRequired,
  nullCondition: PropTypes.func,
  nullConditionValue: PropTypes.string,
  onClick: PropTypes.func,
});
export const RelativeLinkColumnOptionsPropType = PropTypes.shape({
  toComposer: PropTypes.func.isRequired,
  nullCondition: PropTypes.func,
  nullConditionValue: PropTypes.string,
  onClick: PropTypes.func,
});
export const HandlerColumnOptionsPropType = PropTypes.shape({
  onClick: PropTypes.func.isRequired,
  nullCondition: PropTypes.func,
  nullConditionValue: PropTypes.string,
});

export const LinkColumnOptionsPropType = PropTypes.oneOfType([
  AbsoluteLinkColumnOptionsPropType,
  RelativeLinkColumnOptionsPropType,
  HandlerColumnOptionsPropType,
]);

export interface TextCellRendererProps<V> extends LinkCellRendererProps<V> {
  formater?: (value: V) => V;
}

export interface MultiValueCellRendererProps<V> extends CellRendererProps<V> {
  column: ColumnOptions<V> & LinkColumnOptions<V> & { displayLimit?: number };
}

export const MultiValueColumnOptionsPropType = PropTypes.oneOfType([
  PropTypes.shape({
    nullCondition: PropTypes.func,
    nullConditionValue: PropTypes.string,
    displayLimit: PropTypes.number,
  }),
  PropTypes.shape({
    hrefComposer: PropTypes.func.isRequired,
    nullCondition: PropTypes.func,
    nullConditionValue: PropTypes.string,
    onClick: PropTypes.func,
    displayLimit: PropTypes.number,
  }),
  PropTypes.shape({
    toComposer: PropTypes.func.isRequired,
    nullCondition: PropTypes.func,
    nullConditionValue: PropTypes.string,
    onClick: PropTypes.func,
    displayLimit: PropTypes.number,
  }),
  PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    nullCondition: PropTypes.func,
    nullConditionValue: PropTypes.string,
    displayLimit: PropTypes.number,
  }),
]);
