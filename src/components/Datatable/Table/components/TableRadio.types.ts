import { RadioProps } from '../../../forms/Radio/Radio.types';

export type TableRadioProps = Omit<
  RadioProps,
  'isInvalid' | 'label' | 'isDisabled'
>;
