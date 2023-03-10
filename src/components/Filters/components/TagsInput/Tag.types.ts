import type { MouseEventHandler } from 'react';

export interface TagsProps {
  value: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}
