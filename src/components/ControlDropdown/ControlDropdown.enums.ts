import { pick } from 'ramda';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';

export const ControlDropdownPlacements = pick([
  'bottom',
  'bottomLeft',
  'bottomRight',
])(PortalPlacements);
