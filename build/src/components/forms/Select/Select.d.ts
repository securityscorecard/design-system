import React from 'react';
import { SelectProps } from './Select.types';
declare function Select<IsMulti extends boolean = false>({ isAsync, ...props }: SelectProps<IsMulti>): React.ReactElement;
declare namespace Select {
    var propTypes: {
        options: any;
        placeholder: any;
        isInvalid: any;
        isDisabled: any;
        isClearable: any;
        isMulti: any;
        defaultValue: any;
        defaultInputValue: any;
        defaultIsMenuOpen: any;
        className: any;
        menuActions: any;
        maxPillLabelLength: any;
        maxVisibleItem: any;
        isMenuPositionRelative: any;
        components: any;
    };
    var defaultProps: {
        placeholder: string;
        isInvalid: boolean;
        isDisabled: boolean;
        isClearable: boolean;
        maxPillLabelLength: number;
        isMenuPositionRelative: boolean;
        className: string;
    };
    var displayName: string;
}
export default Select;
