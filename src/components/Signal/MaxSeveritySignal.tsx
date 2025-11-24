import { Icon, Vertical3Bars, criticalityLevels } from './common';
import { BaseSignalProps, MaxSeveritySignalKinds } from './Signal.types';

function hasValidKind(kind: string): kind is MaxSeveritySignalKinds {
  return ['critical', 'high', 'medium', 'low', 'none'].includes(kind);
}

export default function MaxSeveritySignal({
  kind,
  title,
  ...props
}: {
  kind: MaxSeveritySignalKinds;
} & BaseSignalProps) {
  if (!hasValidKind(kind)) return null;

  if (kind === 'critical') {
    return (
      <Icon signal="critical" title={title ?? 'Critical severity'} {...props} />
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

MaxSeveritySignal.displayName = 'MaxSeveritySignal';
