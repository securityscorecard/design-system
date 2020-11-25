import {
  IconDefinition,
  IconPack,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { isNotUndefined } from 'ramda-adjunct';

import * as SSCIcons from './icons';

type IconDefinitionOrPack = IconDefinition | IconPack;

export const createIconLibrary = (icons?: IconDefinitionOrPack[]): void => {
  library.add(SSCIcons);

  if (isNotUndefined(icons)) {
    library.add(...icons);
  }
};
