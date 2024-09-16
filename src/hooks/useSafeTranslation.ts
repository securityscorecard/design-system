/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useTranslation } from 'react-i18next';
import { path, split, useWith } from 'ramda';
import { TFunction } from 'i18next';

import en from '../locales/en-US';

export const useSafeTranslation = (): {
  t: TFunction<'sscds', undefined>;
  lng: string;
} => {
  const { t, i18n } = useTranslation('sscds');

  return {
    t: (key, options) =>
      t(key, {
        ...(options ?? {}),
        // eslint-disable-next-line react-hooks/rules-of-hooks
        defaultValue: useWith(path, [split('.')])(key, en),
      }),

    lng: i18n.language,
  };
};
