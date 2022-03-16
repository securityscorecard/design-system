import React from 'react';

import { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';
import { ActionKinds } from '../../types/action.types';

type ActionsArray = readonly [
  ActionKinds<[React.MouseEvent]>?,
  ActionKinds<[React.MouseEvent]>?,
];

export interface BannerProps extends BaseToastBannerProps {
  actions?: ActionsArray;
}
