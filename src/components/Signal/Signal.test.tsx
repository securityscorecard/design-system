import { screen } from '@testing-library/react';

import { setup } from '../../utils/tests/setup';
import { Signal } from './index';

describe('Signal', () => {
  it('should not render if empty "kind" prop is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup(<Signal kind="" />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if "kind" prop is null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup(<Signal kind={null} />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if "kind" prop is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup(<Signal kind={undefined} />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
  it('should not render if unknown "kind" prop is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup(<Signal kind="strange" />);

    expect(screen.queryByTestId('ds-severity-icon')).not.toBeInTheDocument();
  });
});
