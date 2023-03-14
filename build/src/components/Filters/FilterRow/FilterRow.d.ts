import React from 'react';
import { FilterRowProps } from './FilterRow.types';
import { ComponentWithProps as ComponentWithPropsTypes } from '../Filters.types';
export declare const getDefaultComponentValue: (defaultConditionComponent: React.ReactNode | ComponentWithPropsTypes) => string | undefined;
declare const FilterRow: React.FC<FilterRowProps>;
export default FilterRow;
