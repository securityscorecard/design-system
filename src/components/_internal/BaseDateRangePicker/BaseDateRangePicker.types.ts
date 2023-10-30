export interface BaseDateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface BaseDateRangePlaceholderProps {
  startDate: string;
  endDate: string;
}

export interface BaseDateRangePickerProps {
  value: BaseDateRange;
  onChange: (value: BaseDateRange) => void;
  minDate: Date;
  maxDate: Date;
  placeholder?: BaseDateRangePlaceholderProps;
}
