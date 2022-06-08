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
export type BannerProps = BaseBannerProps &
  (
    | { isDismissable?: true; onClose: React.MouseEventHandler }
    | { isDismissable: false }
  );
