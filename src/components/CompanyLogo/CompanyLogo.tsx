import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Spinner } from '../Spinner';
import { Icon } from '../Icon';

type Sizes = 'sm' | 'md' | 'lg' | 'xl';
type CompanyLogoProps = {
  /** URL where the company logo is stored */
  src: string;
  /** Alternative text, use empty string if used for decorative purposes */
  alt: string;
  /**
   * When `false` fallback icon will be used instead of logo
   * When `true` logo won't be rendered if error will occur during load.
   */
  shouldHideOnLoadError?: boolean;
  /** Logo size */
  size?: Sizes;
};

const CompanyLogoRoot = styled.div`
  aspect-ratio: 1;
  border-radius: var(--sscds-radii-surface-md);
  box-shadow: 0 0 0 1px var(--sscds-color-border-surface-dynamic);
  background-color: var(--sscds-color-background-surface-dynamic);
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  width: var(--sscds-companylogo-size);

  &[data-state='success'] {
    background-color: var(--sscds-color-white);

    > img {
      visibility: visible;
    }
  }
  &[data-state='error'],
  &[data-state='loading'] {
    > img {
      visibility: hidden;
    }
  }

  > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const fallbackSize = {
  sm: '0.625rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
};

const CompanyLogo = ({
  src,
  alt,
  shouldHideOnLoadError = false,
  size = 'md',
}: CompanyLogoProps) => {
  const [state, setState] = useState<'loading' | 'error' | 'success'>(
    'loading',
  );

  const componentStyles = useMemo(
    () => ({
      '--sscds-companylogo-size':
        size === 'sm'
          ? '1.5rem'
          : size === 'md'
          ? '2rem'
          : size === 'lg'
          ? '2.5rem'
          : '3.5rem',
    }),
    [size],
  );

  if (state === 'error' && shouldHideOnLoadError) {
    return null;
  }

  return (
    <CompanyLogoRoot data-state={state} style={componentStyles}>
      {state === 'loading' ? (
        <Spinner
          borderWidth={3}
          data-testid="spinner"
          size={fallbackSize[size]}
          verticalMargin={0}
          dark
        />
      ) : state === 'error' ? (
        <Icon
          color="var(--sscds-color-icon-subtle)"
          data-testid="fallback-icon"
          name="company"
          style={{
            fontSize: fallbackSize[size],
          }}
        />
      ) : null}
      <img
        alt={alt}
        src={src}
        onError={() => {
          setState('error');
        }}
        onLoad={() => {
          setState('success');
        }}
      />
    </CompanyLogoRoot>
  );
};

export default CompanyLogo;
