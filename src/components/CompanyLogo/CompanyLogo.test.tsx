import { act, screen } from '@testing-library/react';

import { setup } from '../../utils/tests/setup';
import CompanyLogo from './CompanyLogo';

const defaultProps = {
  src: 'test-image.jpg',
  alt: 'Test company logo',
};

describe('CompanyLogo', () => {
  it('should render in loading state initially', () => {
    setup(<CompanyLogo {...defaultProps} />);

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).not.toBeVisible();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render success state when image loads', () => {
    setup(<CompanyLogo {...defaultProps} />);

    act(() => {
      screen
        .getByRole('img', { hidden: true })
        .dispatchEvent(new Event('load'));
    });

    const img = screen.getByRole('img');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', defaultProps.src);
    expect(img).toHaveAttribute('alt', defaultProps.alt);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should render fallback icon when image fails to load', () => {
    setup(<CompanyLogo {...defaultProps} />);

    const img = screen.getByRole('img', { hidden: true });
    act(() => {
      img.dispatchEvent(new Event('error'));
    });

    expect(img).not.toBeVisible();
    expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
  });

  it('should not render anything when "shouldHideOnLoadError" is true and image fails', () => {
    setup(<CompanyLogo {...defaultProps} shouldHideOnLoadError />);

    const img = screen.getByRole('img', { hidden: true });
    act(() => {
      img.dispatchEvent(new Event('error'));
    });

    expect(screen.queryByRole('img', { hidden: true })).not.toBeInTheDocument();
    expect(screen.queryByTestId('fallback-icon')).not.toBeInTheDocument();
  });
});
