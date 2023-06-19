export type DetectionMethod =
  | 'Cloud'
  | 'DNS'
  | 'Pub. Data'
  | 'SSC Res.'
  | 'SSL'
  | '3rd party'
  | 'WHOIS';

export type Source =
  | 'ARIN'
  | 'A Record'
  | 'AFRINIC'
  | 'AWS'
  | 'Azure'
  | 'BGP Peering'
  | 'CloudFlare'
  | 'Cloud Scanner'
  | 'Comcast'
  | 'Digital Envoy'
  | 'Google CE'
  | 'IP Info'
  | 'Manual'
  | 'SSC Login'
  | 'ThreatMarket SSL'
  | 'WHOIS Cluster';

export type Status =
  | 'Attributed'
  | 'Claimed'
  | 'Disputed'
  | 'Dynamic'
  | 'Removed';

export interface IPAsset {
  ipAddress: string;
  status: Status;
  domainsCount: number;
  detectionMethod: DetectionMethod[];
  source: Source[];
  country: string;
  issuesCount: number;
  findingsCount: number;
  observationDate: Date;
  lastObservationDate: Date;
}
