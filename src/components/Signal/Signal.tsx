import React from 'react';
import { isNilOrEmpty } from 'ramda-adjunct';

import {
  BreachRiskSignalKinds,
  BusinessImpactSignalKinds,
  IncidentLikelihoodSignalKinds,
  SeveritySignalKinds,
  SignalProps,
} from './Signal.types';
import BreachRiskSignal from './BreachRiskSignal';
import BusinessImpactSignal from './BusinessImpactSignal';
import IncidentLikelihoodSignal from './IncidentLikelihoodSignal';
import SeveritySignal from './SeveritySignal';

export default function Signal(props: SignalProps) {
  const { variant, kind, ...rest } = props;

  if (isNilOrEmpty(kind)) return null;

  if (variant === 'breachRisk') {
    return (
      <BreachRiskSignal
        kind={kind.toLowerCase() as BreachRiskSignalKinds}
        {...rest}
      />
    );
  }
  if (variant === 'businessImpact') {
    return (
      <BusinessImpactSignal
        kind={kind.toLowerCase() as BusinessImpactSignalKinds}
        {...rest}
      />
    );
  }
  if (variant === 'incidentLikelihood') {
    return (
      <IncidentLikelihoodSignal
        kind={kind.toLowerCase() as IncidentLikelihoodSignalKinds}
        {...rest}
      />
    );
  }

  return (
    <SeveritySignal
      kind={kind.toLowerCase() as SeveritySignalKinds}
      {...rest}
    />
  );
}
Signal.displayName = 'Signal';
