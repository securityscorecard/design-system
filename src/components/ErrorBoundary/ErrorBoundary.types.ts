import type { ReactNode } from 'react';
import type { Property } from 'csstype';

export interface ErrorBoundaryProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  justify?: Property.JustifyContent;
  illustration?: ReactNode;
  onClick?: () => void;
  title: ReactNode;
  content: ReactNode;
}
