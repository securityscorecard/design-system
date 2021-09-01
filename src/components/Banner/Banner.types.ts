import React from 'react';
import { To } from 'history'; // just importing types

import { BannerVariants } from './Banner.enums';

export type Variants = typeof BannerVariants[keyof typeof BannerVariants];

type Cta = {
  text?: string;
  onClick?: React.MouseEventHandler;
  to?: To;
  href?: string;
};

export interface BannerProps {
  onClose: React.MouseEventHandler;
  variant?: Variants;
  cta1?: Cta;
  cta2?: Cta;
}
