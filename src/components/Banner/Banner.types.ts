import React from 'react';

import { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';
import { ActionKinds } from '../../types/action.types';

export type ActionsArray = readonly [
  ActionKinds<[React.MouseEvent]>?,
  ActionKinds<[React.MouseEvent]>?,
];

type BaseBannerProps = Omit<BaseToastBannerProps, 'onClose'> & {
  actions?: ActionsArray;
};

export type BannerProps = BaseBannerProps & {
  isDismissable?: boolean;
  onClose?: React.MouseEventHandler;
  __hasPagination?: boolean;
  __onPrev?: () => void;
  __onNext?: () => void;
  __isFirst?: boolean;
  __isLast?: boolean;
  __current?: number;
  __total?: number;
  changeLayoutBreakpoint?: number;
  className?: string;
};
