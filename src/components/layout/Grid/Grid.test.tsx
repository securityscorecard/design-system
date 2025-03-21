import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import Grid from './Grid';
import { setup } from '../../../utils/tests/setup';

describe('Grid', () => {
  it('should throw error when `cols` is set to 1', () => {
    const loggerSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => vi.fn());
    expect(() =>
      setup(
        <Grid cols={1}>
          <a href="#one">one</a>
        </Grid>,
      ),
    ).toThrow(
      '[design-system/Grid] Minimal number of columns is 2. Use Stack instead of Grid[cols=1]',
    );
    loggerSpy.mockRestore();
  });

  it('should apply the correct CSS properties based on the `wrapperOverflow` and `wrapperEl` properties', () => {
    setup(
      <Grid cols={3} wrapperOverflow="visible" wrapperEl="main">
        <div>Content</div>
      </Grid>,
    );
    expect(screen.getByRole('main')).toHaveStyle('overflow: visible');
  });
});
