/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Trans, useTranslation } from 'react-i18next';
import { path, split, useWith } from 'ramda';
import { ParseKeys, TFunction, TOptions } from 'i18next';
import { ComponentProps } from 'react';

import en from '../locales/en-US';

type Key = ParseKeys<['sscds'], TOptions, undefined> | TemplateStringsArray;

// eslint-disable-next-line react-hooks/rules-of-hooks
const getDefaultValue = (key: Key) => useWith(path, [split('.')])(key, en);
export const useSafeTranslation = (): {
  t: TFunction<['sscds'], undefined>;
  lng: string;
} => {
  const { t, i18n } = useTranslation('sscds');

  return {
    t: (key, options) =>
      t(key, {
        ...(options ?? {}),
        defaultValue: getDefaultValue(key),
      }),

    lng: i18n.language,
  };
};

export function SafeTrans({
  i18nKey,
  ...props
}: {
  i18nKey: Key;
} & Omit<ComponentProps<typeof Trans>, 'i18nKey' | 't' | 'defaults'>) {
  const { t } = useSafeTranslation();

  return (
    <Trans
      {...props}
      defaultValue={getDefaultValue(i18nKey)}
      i18nKey={i18nKey}
      t={t}
    />
  );
}
