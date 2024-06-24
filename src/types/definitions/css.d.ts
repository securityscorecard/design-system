import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    [index: `--sscds-${string}`]: string | number;
  }
}
