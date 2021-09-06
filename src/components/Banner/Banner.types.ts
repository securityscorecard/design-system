import React from 'react';

import { BannerVariants } from './Banner.enums';
import { ActionKinds } from '../../types/action.types';

export type Variants = typeof BannerVariants[keyof typeof BannerVariants];

type MaxLengthArray = readonly [
  ActionKinds<[React.MouseEvent]>?,
  ActionKinds<[React.MouseEvent]>?,
];

export interface BannerProps {
  onClose: React.MouseEventHandler;
  variant?: Variants;
  actions?: MaxLengthArray;
}
