import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/setup';
import * as requireRouterLink from '../../utils/require-router-link';
import Link from './Link';

describe('Link', () => {
  it('should render react-router link if `to` prop is provided', () => {
    setup(<Link to="/path">RouterLink</Link>);

    const link = screen.getByRole('link', { name: /RouterLink/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/path');
  });
  it('should render anchor tag if `href` prop is provided', () => {
    setup(<Link href="https://test.com">AbsoluteLink</Link>);
    const link = screen.getByRole('link', { name: /AbsoluteLink/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://test.com');
  });
  it('should render button if `to` an `href` props are not provided', () => {
    setup(<Link>Button</Link>);
    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
  });

  it('should return null if react-router link import fails', () => {
    vi.spyOn(requireRouterLink, 'requireRouterLink').mockReturnValue(null);
    setup(<Link to="/path">Empty</Link>);
    expect(
      screen.queryByRole('link', { name: /Empty/i }),
    ).not.toBeInTheDocument();
  });
});
