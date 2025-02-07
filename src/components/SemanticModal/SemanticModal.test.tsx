import { screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';

import SemanticModal from './SemanticModal';
import { setup } from '../../utils/tests/setup';

describe('SemanticModal', () => {
  const defaultProps = {
    title: 'Modal Title',
    message: 'Modal Message',
    onClose: vi.fn(),
  };

  it('should render action as an "a" tag with correct href when "as" is set to "a"', () => {
    const href = 'https://example.com';
    setup(
      <SemanticModal
        {...defaultProps}
        actions={[
          {
            label: 'Link Action',
            name: 'link-action',
            onClick: vi.fn(),
            as: 'a',
            href,
          },
          {
            label: 'Primary Action',
            name: 'primary',
            onClick: vi.fn(),
          },
        ]}
      />,
    );

    const linkElement = screen.getByRole('link', { name: 'Link Action' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', href);
  });

  it('should render action as Router Link with correct "to" prop when "as" is set to Link', () => {
    const to = '/some-path';
    setup(
      <MemoryRouter>
        <SemanticModal
          {...defaultProps}
          actions={[
            {
              label: 'Router Link',
              name: 'router-link',
              onClick: vi.fn(),
              as: Link,
              to,
            },
            {
              label: 'Primary Action',
              name: 'primary',
              onClick: vi.fn(),
            },
          ]}
        />
      </MemoryRouter>,
    );

    const linkElement = screen.getByRole('link', { name: 'Router Link' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', to);
  });

  it('should render correctly with only dismiss action', () => {
    setup(
      <SemanticModal
        {...defaultProps}
        actions={[
          {
            label: 'Dismiss',
            name: 'dismiss',
            onClick: vi.fn(),
          },
        ]}
      />,
    );

    const dismissButton = screen.getByRole('button', { name: 'Dismiss' });
    expect(dismissButton).toBeInTheDocument();
  });

  it('should render correctly when actions prop is undefined', () => {
    setup(<SemanticModal {...defaultProps} actions={undefined} />);

    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Message')).toBeInTheDocument();
  });

  it('should render correctly when actions prop is an empty array', () => {
    setup(<SemanticModal {...defaultProps} actions={[]} />);

    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Message')).toBeInTheDocument();
  });
});
