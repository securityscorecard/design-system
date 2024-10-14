import { createRef } from 'react';
import { screen } from '@testing-library/react';
import { map } from 'ramda';

import { SegmentedToggle, SegmentedToggleItem } from './SegmentedToggle';
import { renderWithProviders } from '../../../utils/tests/renderWithProviders';

describe('SegmentedToggle', () => {
  it('should determine selected tab and input element by strict equality', () => {
    renderWithProviders(
      <SegmentedToggle group="default">
        <SegmentedToggleItem itemId="input1" label="One" value="1" />
        <SegmentedToggleItem itemId="input2" label="Two" value="2" />
        <SegmentedToggleItem
          itemId="input3"
          label="Three"
          value="3"
          defaultChecked
        />
      </SegmentedToggle>,
    );

    expect(screen.queryByDisplayValue('3')).toBeChecked();
    expect(screen.queryByDisplayValue('2')).not.toBeChecked();
    expect(screen.queryByDisplayValue('1')).not.toBeChecked();
  });

  it('should be input accesible by ref attribute', () => {
    const refs = map(() => createRef<HTMLInputElement>(), Array(3));

    const itemsArray = Array(3)
      .fill({})
      .map((_, i) => {
        return { itemId: i, label: i.toString(), value: i, ref: refs[i] };
      });

    function Item({ itemId, label, value, ref }) {
      return (
        <SegmentedToggleItem
          key={itemId}
          itemId={itemId.toString()}
          label={label}
          value={value}
          ref={ref}
          defaultChecked={itemId === 2}
        />
      );
    }

    const Items = map(Item);

    renderWithProviders(
      <SegmentedToggle group="default">{Items(itemsArray)}</SegmentedToggle>,
    );

    expect(refs[0].current.checked).toBeFalsy();
    expect(refs[1].current.checked).toBeFalsy();
    expect(refs[2].current.checked).toBeTruthy();
  });
});
