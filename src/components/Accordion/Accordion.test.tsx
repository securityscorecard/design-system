import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion, { filterState } from './Accordion';

describe('Accordion/filterState', () => {
  it('should correctly add an item to the state if it is not already included and `isCollapsedOnOpen` is false', () => {
    const state = [1, 2];
    const newItem = 3;
    const isCollapsedOnOpen = false;

    const result = filterState(state, newItem, isCollapsedOnOpen);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should remove an item from the state if it is already included, regardless of the `isCollapsedOnOpen` value', () => {
    const state = [1, 2, 3];
    const existingItem = 2;

    const resultTrue = filterState(state, existingItem, true);
    expect(resultTrue).toEqual([1, 3]);

    const resultFalse = filterState(state, existingItem, false);
    expect(resultFalse).toEqual([1, 3]);
  });

  it('should replace the state with only the new item if `isCollapsedOnOpen` is true', () => {
    const state = [1];
    const newItem = 4;
    const isCollapsedOnOpen = true;

    const result = filterState(state, newItem, isCollapsedOnOpen);
    expect(result).toEqual([4]);
  });
});

describe('Accordion', () => {
  const items = [
    { id: 1, title: 'Item 1', content: 'Content 1', isOpen: false },
    { id: 2, title: 'Item 2', content: 'Content 2', isOpen: true },
    { id: 3, title: 'Item 3', content: 'Content 3', isOpen: false },
  ];

  it('should correctly initialize with the open state of items based on the `pickOpen` function', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('should update the open state when `openItems` prop changes', () => {
    const { rerender } = render(<Accordion items={items} openItems={[1]} />);
    expect(screen.getByText('Content 1')).toBeVisible();

    rerender(<Accordion items={items} openItems={[3]} />);
    expect(screen.getByText('Content 3')).toBeVisible();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('should handle click events correctly, updating the state based on whether the item is already open and the `isCollapsedOnOpen` setting', () => {
    const onChangeMock = jest.fn();
    render(
      <Accordion
        items={items}
        onChange={onChangeMock}
        isCollapsedOnOpen={false}
      />,
    );

    userEvent.click(screen.getByText('Item 1'));
    expect(onChangeMock).toHaveBeenCalledWith([2, 1]); // Item 2 was initially open, now Item 1 is also open

    userEvent.click(screen.getByText('Item 2'));
    expect(onChangeMock).toHaveBeenCalledWith([1]); // Item 2 is now closed, Item 1 remains open
  });
});
