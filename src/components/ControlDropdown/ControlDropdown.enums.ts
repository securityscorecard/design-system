import { pick } from 'ramda';

import { DropdownPlacements } from '../Dropdown/Dropdown.enums';

export const ControlDropdownPlacements = pick([
  'bottom',
  'bottom-start',
  'bottom-end',
])(DropdownPlacements);
