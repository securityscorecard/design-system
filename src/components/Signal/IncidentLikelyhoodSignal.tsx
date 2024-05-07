import React from 'react';

import { HorizontalBars, Icon, criticalityLevels } from './common';
import { BaseSignalProps, IncidentLikelyhoodSignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is IncidentLikelyhoodSignalKinds {
  return ['critical', 'high', 'medium', 'low', 'none'].includes(kind);
}

export default function IncidentLikelyhoodSignal({
  kind,
  title,
  ...props
}: {
  kind: IncidentLikelyhoodSignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  if (kind !== 'critical') {
    return (
      <HorizontalBars
        criticality={criticalityLevels[kind]}
        title={title ?? `${kind} incident likelyhood`}
        {...props}
      />
    );
  }

  return (
    <Icon
      signal={kind}
      title={title ?? `${kind} incident likelyhood`}
      {...props}
    />
  );
}
IncidentLikelyhoodSignal.displayName = 'IncidentLikelyhoodSignal';
