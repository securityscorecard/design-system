import { Icon, Vertical3Bars, criticalityLevels } from './common';
import { BaseSignalProps, IncidentLikelihoodSignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is IncidentLikelihoodSignalKinds {
  return ['critical', 'high', 'medium', 'low', 'none'].includes(kind);
}

export default function IncidentLikelihoodSignal({
  kind,
  title,
  ...props
}: {
  kind: IncidentLikelihoodSignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  if (kind !== 'critical') {
    return (
      <Vertical3Bars
        criticality={criticalityLevels[kind]}
        title={title ?? `${kind} incident likelihood`}
        {...props}
      />
    );
  }

  return (
    <Icon
      signal={kind}
      title={title ?? `${kind} incident likelihood`}
      {...props}
    />
  );
}
IncidentLikelihoodSignal.displayName = 'IncidentLikelihoodSignal';
