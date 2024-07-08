import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from 'ramda-adjunct';

import CollapsibleHandle from './CollapsibleHandle';

describe('CollapsibleHandle', () => {
  test('should render placeholder when `onCollapse` is undefined', () => {
    render(<CollapsibleHandle collapsed onCollapse={undefined} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('should render button when `onCollapse` is defined', () => {
    render(<CollapsibleHandle collapsed onCollapse={noop} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should call `onCollapse` when is clicked', () => {
    const onCollapseMock = jest.fn();
    render(<CollapsibleHandle collapsed onCollapse={onCollapseMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onCollapseMock).toHaveBeenCalled();
  });
});
