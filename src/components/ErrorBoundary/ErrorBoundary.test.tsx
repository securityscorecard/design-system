import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import ErrorBoundary, { DEFAULT_CONTENT, DEFAULT_TITLE } from './ErrorBoundary';
import { ErrorBoundaryProps } from './ErrorBoundary.types';
import { setup } from '../../utils/tests/setup';

describe('ErrorBoundary Component', () => {
  it('should render component properly', () => {
    const props: ErrorBoundaryProps = { size: 'sm' };
    setup(<ErrorBoundary {...props} />);
    expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
  });

  it('should throw if invalid size is provided', () => {
    const loggerSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => vi.fn());
    // @ts-expect-error testing runtime error
    const props: ErrorBoundaryProps = { size: 'invalid' };
    expect(() => setup(<ErrorBoundary {...props} />)).toThrow(
      '[design-system/ErrorBoundary] Wrong size (invalid) was provided to ErrorBoundary component. Valid values are xs,sm,md,lg',
    );
    loggerSpy.mockRestore();
  });

  it('should correctly pass additional props', async () => {
    const props: ErrorBoundaryProps = {
      size: 'lg',
      onClick: vi.fn(),
    };
    const { user } = setup(<ErrorBoundary {...props} />);
    await user.click(screen.getByText('Try Again'));
    expect(props.onClick).toHaveBeenCalled();
  });
});
