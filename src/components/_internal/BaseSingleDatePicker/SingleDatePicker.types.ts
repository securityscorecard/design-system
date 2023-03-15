export interface SingleDatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  defaultIsOpen?: boolean;
  defaultIsYearPickerOpen?: boolean;
  startDate?: Date;
  endDate?: Date;
}
