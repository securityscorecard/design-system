import { Field } from '../Filters.types';
import { PickOption, UseFilterRowType } from './useFilterRow.types';
import { Option } from '../components/Select/Select.types';
export declare const normalizeOptions: <O extends Option>(options: O) => PickOption<O>;
export declare const useFilterRow: (fields: Field[], fieldValue: string, conditionValue: string) => UseFilterRowType;
