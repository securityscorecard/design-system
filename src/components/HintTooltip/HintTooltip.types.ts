import { ComponentPropsWithoutRef } from 'react';

import { Tooltip } from '../Tooltip';

export interface HintTooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof Tooltip>, 'popup'> {
  'aria-label'?: string;
  flow?: 'inline' | 'block';
}
