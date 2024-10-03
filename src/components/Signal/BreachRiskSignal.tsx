import { Vertical3Bars, criticalityLevels } from './common';
import { BaseSignalProps, BreachRiskSignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is BreachRiskSignalKinds {
  return ['high', 'medium', 'low', 'none'].includes(kind);
}

export default function BreachRiskSignal({
  kind,
  title,
  ...props
}: {
  kind: BreachRiskSignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  return (
    <Vertical3Bars
      criticality={criticalityLevels[kind]}
      title={title ?? `${kind} breach risk`}
      {...props}
    />
  );
}
BreachRiskSignal.displayName = 'BreachRiskSignal';
