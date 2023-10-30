import type {
  IconDefinition,
  IconPack,
} from '@fortawesome/fontawesome-svg-core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { isNotUndefined } from 'ramda-adjunct';

import * as SSCIcons from './icons';

type IconDefinitionOrPack = IconDefinition | IconPack;

export const createIconLibrary = (icons?: IconDefinitionOrPack[]): void => {
  library.add(SSCIcons);

  if (isNotUndefined(icons)) {
    library.add(...icons);
  }
};

export const resetIconLibrary = (): void => {
  library.reset();
};
