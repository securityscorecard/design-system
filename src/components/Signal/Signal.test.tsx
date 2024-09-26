import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import { Signal } from './index';

describe('Signal', () => {
  it('should not render if empty "kind" prop is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithProviders(<Signal kind="" />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if "kind" prop is null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithProviders(<Signal kind={null} />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if "kind" prop is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithProviders(<Signal kind={undefined} />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if unknown "kind" prop is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithProviders(<Signal kind="strange" />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
});
