import { HorizontalBars, Icon, criticalityLevels } from './common';
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
      <HorizontalBars
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
