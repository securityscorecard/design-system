export interface BaseSvgProps {
  title: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /** If true, the svg will be hidden from assistive technologies */
  ariaHidden?: boolean;
}

type BaseKinds = 'high' | 'medium' | 'low' | 'none';
export type SeveritySignalKinds = BaseKinds | 'info' | 'positive' | 'critical';
export type BreachRiskSignalKinds = BaseKinds;
export type BusinessImpactSignalKinds = 'critical' | BaseKinds;
export type IncidentLikelihoodSignalKinds = 'critical' | BaseKinds;

export interface BaseSignalProps {
  /**
   * Sets height of the Signal icon. The actual width of the icon is calculated by the
   * native width of the Signal icon.
   */
  size?: number;
  /**
   * Human readable describtion of the Signal to improve accessibility.
   */
  title?: string;
  className?: string;
  /** If true, the label will be hidden from assistive technologies */
  ariaHidden?: boolean;
}
interface SeveritySignal {
  /**
   * Type of the Signal icon. Determines list of available signal kinds.
   *
   * @default severity
   */
  variant?: 'severity';
  /**
   * Level of signal criticality. Available kinds are based on the value of the `variant` property
   */
  kind: SeveritySignalKinds;
}
interface BreachRiskSignal {
  variant: 'breachRisk';
  kind: BreachRiskSignalKinds;
}
interface BusinessImpactSignal {
  variant: 'businessImpact';
  kind: BusinessImpactSignalKinds;
}
interface IncidentLikelihoodSignal {
  variant: 'incidentLikelihood';
  kind: IncidentLikelihoodSignalKinds;
}

export type SignalProps = (
  | SeveritySignal
  | BreachRiskSignal
  | BusinessImpactSignal
  | IncidentLikelihoodSignal
) &
  BaseSignalProps;
