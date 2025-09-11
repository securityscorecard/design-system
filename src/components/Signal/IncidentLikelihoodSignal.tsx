import { Vertical4Bars, criticalityLevels } from './common';
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

  return (
    <Vertical4Bars
      criticality={criticalityLevels[kind]}
      title={title ?? `${kind} incident likelihood`}
      {...props}
    />
  );
}
IncidentLikelihoodSignal.displayName = 'IncidentLikelihoodSignal';
