import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ErrorBoundary, { DEFAULT_CONTENT, DEFAULT_TITLE } from './ErrorBoundary';
import { ErrorBoundaryProps } from './ErrorBoundary.types';

describe('ErrorBoundary Component', () => {
  it('test_error_boundary_renders_correct_component', () => {
    const props: ErrorBoundaryProps = { size: 'sm' };
    render(<ErrorBoundary {...props} />);
    expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
  });

  it('test_error_boundary_handles_invalid_size', () => {
    const loggerSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => jest.fn());
    // @ts-expect-error testing runtime error
    const props: ErrorBoundaryProps = { size: 'invalid' };
    expect(() => render(<ErrorBoundary {...props} />)).toThrow(
      '[design-system/ErrorBoundary] Wrong size (invalid) was provided to ErrorBoundary component. Valid values are xs,sm,md,lg',
    );
    loggerSpy.mockRestore();
  });

  it('test_error_boundary_passes_props', () => {
    const props: ErrorBoundaryProps = {
      size: 'lg',
      onClick: jest.fn(),
    };
    render(<ErrorBoundary {...props} />);
    userEvent.click(screen.getByText('Try Again'));
    expect(props.onClick).toHaveBeenCalled();
  });
});
