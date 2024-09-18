import type { CSSProperties, ReactNode } from 'react';

import { Padbox } from '../Padbox';
import { Surface } from '../Surface';

export const Box = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) => (
  <Surface background="dynamic" radius="sm" style={style} hasBorder>
    <Padbox paddingSize="sm">
      {children ??
        `Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci
      auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante
      pretium eget.`}
    </Padbox>
  </Surface>
);
