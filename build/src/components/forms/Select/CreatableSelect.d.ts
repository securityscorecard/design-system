import React from 'react';
import { CreatableSelectProps } from './Select.types';
declare function CreatableSelect<IsMulti extends boolean = false>({ createNewLabel, isAsync, ...props }: CreatableSelectProps<IsMulti>): React.ReactElement;
declare namespace CreatableSelect {
    var propTypes: {
        createNewLabel: any;
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
export default CreatableSelect;
