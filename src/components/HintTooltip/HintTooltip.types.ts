import React from 'react';

export interface HintTooltipProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  flow?: 'inline' | 'block';
}
