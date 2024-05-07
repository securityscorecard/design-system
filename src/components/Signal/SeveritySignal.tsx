import React from 'react';

import { Icon, Vertical3Bars, criticalityLevels } from './common';
import { BaseSignalProps, SeveritySignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is SeveritySignalKinds {
  return ['high', 'medium', 'low', 'none', 'positive', 'info'].includes(kind);
}
export default function SeveritySignal({
  kind,
  title,
  ...props
}: {
  kind: SeveritySignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  if (['positive', 'info'].includes(kind)) {
    return (
      <Icon
        signal={kind as 'positive' | 'info'}
        title={title ?? `${kind} signal`}
        {...props}
      />
    );
  }
  return (
    <Vertical3Bars
      criticality={criticalityLevels[kind]}
      title={title ?? `${kind} severity`}
      {...props}
    />
  );
}
SeveritySignal.displayName = 'SeveritySignal';
