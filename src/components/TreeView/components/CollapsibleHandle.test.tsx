import { fireEvent, screen } from '@testing-library/react';
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

  test('should call `onCollapse` when is clicked', () => {
    const onCollapseMock = vi.fn();
    setup(<CollapsibleHandle collapsed onCollapse={onCollapseMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onCollapseMock).toHaveBeenCalled();
  });
});
