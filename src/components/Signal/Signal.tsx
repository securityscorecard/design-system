import React from 'react';
import { isNilOrEmpty } from 'ramda-adjunct';

import { SignalProps } from './Signal.types';
import BreachRiskSignal from './BreachRiskSignal';
import BusinessImpactSignal from './BusinessImpactSignal';
import IncidentLikelyhoodSignal from './IncidentLikelyhoodSignal';
import SeveritySignal from './SeveritySignal';

export default function Signal(props: SignalProps) {
  const { variant, kind, ...rest } = props;

  if (isNilOrEmpty(kind)) return null;

  if (variant === 'breachRisk') {
    return <BreachRiskSignal kind={kind} {...rest} />;
  }
  if (variant === 'businessImpact') {
    return <BusinessImpactSignal kind={kind} {...rest} />;
  }
  if (variant === 'incidentLikelyhood') {
    return <IncidentLikelyhoodSignal kind={kind} {...rest} />;
  }

  return <SeveritySignal kind={kind} {...rest} />;
}
Signal.displayName = 'Signal';
