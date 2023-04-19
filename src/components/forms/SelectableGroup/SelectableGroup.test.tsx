import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import SelectableGroup from './SelectableGroup';

const fields = [
  { label: 'Biking', value: 'biking', isDisabled: true },
  { label: 'Games', value: 'games' },
  { label: 'Hiking', value: 'hiking' },
];

describe('SelectableGroup', () => {
  it('should render disabled options at the end', () => {
    renderWithProviders(<SelectableGroup options={fields} name="test" />);

    expect(screen.getAllByRole('radio')[2]).toBeDisabled();
  });

  describe('single selection', () => {
    it('should preselect value when provided', () => {
      renderWithProviders(
        <SelectableGroup options={fields} name="test" defaultValue="hiking" />,
      );

      expect(screen.getByRole('radio', { name: /Hiking/i })).toBeChecked();
      expect(screen.getByRole('radio', { name: /Games/i })).not.toBeChecked();
    });
    it('calls onChange when provided', async () => {
      const onChangeMock = jest.fn();
      renderWithProviders(
        <SelectableGroup
          options={fields}
          name="test"
          value=""
          onChange={onChangeMock}
        />,
      );

      await userEvent.click(screen.getByRole('radio', { name: /Hiking/i }));

      expect(onChangeMock).toBeCalledWith('hiking');
    });
  });

  describe('multi selection', () => {
    it('should preselect value when provided', () => {
      renderWithProviders(
        <SelectableGroup
          isMulti
          options={fields}
          name="test"
          defaultValue={['hiking']}
        />,
      );

      expect(screen.getByRole('checkbox', { name: /Hiking/i })).toBeChecked();
      expect(
        screen.getByRole('checkbox', { name: /Games/i }),
      ).not.toBeChecked();
    });
    it('calls onChange when provided', async () => {
      const onChangeMock = jest.fn();
      renderWithProviders(
        <SelectableGroup
          isMulti
          options={fields}
          name="test"
          value={[]}
          onChange={onChangeMock}
        />,
      );

      await userEvent.click(screen.getByRole('checkbox', { name: /Hiking/i }));

      expect(onChangeMock).toBeCalledWith(['hiking']);
    });
  });
});
