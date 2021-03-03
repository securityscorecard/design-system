export interface SingleDatePickerProps {
  value: Date | null;
  onChange: () => void;
  minDate: Date;
  maxDate: Date;
}
