type DetectionMethod =
  | 'WHOIS'
  | 'DNS'
  | 'SSL'
  | '3rd party'
  | 'SSC Res.'
  | 'Pub. Data'
  | 'Cloud';

interface Organization {
  name: string;
  domain: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

export interface DataSource {
  id: string;
  ipAddress: string;
  status: 'Claimed' | 'Attributed' | 'Disputed' | 'Removed' | 'Dynamic';
  country: string;
  findingsCount: number;
  observationDate: string;
  organization: Organization;
  detectionMethod: DetectionMethod[] | undefined;
}
