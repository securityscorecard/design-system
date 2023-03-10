import type { MouseEvent, MouseEventHandler } from 'react';
import type { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';
import type { ActionKinds } from '../../types/action.types';

export type ActionsArray = readonly [
  ActionKinds<[MouseEvent]>?,
  ActionKinds<[MouseEvent]>?,
];

type BaseBannerProps = Omit<BaseToastBannerProps, 'onClose'> & {
  actions?: ActionsArray;
};

export type BannerProps = BaseBannerProps & {
  isDismissable?: boolean;
  onClose?: MouseEventHandler;
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
