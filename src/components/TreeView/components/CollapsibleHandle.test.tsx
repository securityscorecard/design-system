import { screen } from '@testing-library/react';
import { noop } from 'ramda-adjunct';
import { vi } from 'vitest';

import CollapsibleHandle from './CollapsibleHandle';
import { setup } from '../../../utils/tests/setup';

describe('CollapsibleHandle', () => {
  test('should render placeholder when `onCollapse` is undefined', () => {
    setup(<CollapsibleHandle collapsed onCollapse={undefined} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('should render button when `onCollapse` is defined', () => {
    setup(<CollapsibleHandle collapsed onCollapse={noop} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should call `onCollapse` when is clicked', async () => {
    const onCollapseMock = vi.fn();
    const { user } = setup(
      <CollapsibleHandle collapsed onCollapse={onCollapseMock} />,
    );

    await user.click(screen.getByRole('button'));
    expect(onCollapseMock).toHaveBeenCalled();
  });
});
