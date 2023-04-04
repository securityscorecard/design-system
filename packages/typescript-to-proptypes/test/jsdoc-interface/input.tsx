import type { Classes } from './classes';

import * as React from 'react';

interface Props {
  /**
   * the classes
   */
  classes?: Partial<Classes>;
}

export default function Component(props: Props) {
  const { classes } = props;

  return (
    <ul>
      <li>root: {classes?.root}</li>
      <li>slot: {classes?.slot}</li>
    </ul>
  );
}
