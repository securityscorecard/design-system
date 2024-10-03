import { Vertical4Bars, criticalityLevels } from './common';
import { BaseSignalProps, BusinessImpactSignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is BusinessImpactSignalKinds {
  return ['critical', 'high', 'medium', 'low', 'none'].includes(kind);
}

export default function BusinessImpactSignal({
  kind,
  title,
  ...props
}: {
  kind: BusinessImpactSignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  return (
    <Vertical4Bars
      criticality={criticalityLevels[kind]}
      title={title ?? `${kind} business impact`}
      {...props}
    />
  );
}
BusinessImpactSignal.displayName = 'BusinessImpactSignal';
