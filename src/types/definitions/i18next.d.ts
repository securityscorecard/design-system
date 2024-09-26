import 'react-i18next';
import en from '../../locales/en-US';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: ['sscds'];
    pluralSeparator: '_';
    nsSeparator: '|';
    resources: {
      sscds: typeof en;
    };
  }
}
