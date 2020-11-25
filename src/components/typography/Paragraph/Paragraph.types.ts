import { SpacingProps } from '../../../types/spacing.types';
import { Text } from '../Text';

export type ParagraphProps = SpacingProps & React.ComponentProps<typeof Text>;
