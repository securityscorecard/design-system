import { Icon } from '../Icon';
import { ChipIconProps } from './types';

function ChipIcon({ name, type = 'ssc' }: ChipIconProps) {
  return <Icon name={name} size="md" type={type} hasFixedSize />;
}

export default ChipIcon;
