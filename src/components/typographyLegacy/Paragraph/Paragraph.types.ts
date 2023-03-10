import type { ComponentPropsWithoutRef } from 'react';
import type { SpacingProps } from '../../../types/spacing.types';
import type { Text } from '../Text';

export type ParagraphProps = SpacingProps &
  ComponentPropsWithoutRef<typeof Text>;
