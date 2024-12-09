import { act, screen } from '@testing-library/react';
import { vi } from 'vitest';

import MultiValueInput from './MultiValueInput';
import { setup } from '../../../utils/tests/setup';

const mockValueAdd = vi.fn();
const mockValueRemove = vi.fn();
const mockValueChange = vi.fn();
const mockInputChange = vi.fn();

describe('MultiValueInput', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should focus input on "Tab" key', async () => {
    const { user } = setup(<MultiValueInput />);

    await user.tab();

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should focus input on container click', async () => {
    const { user } = setup(<MultiValueInput />);

    await user.click(screen.getByTestId('multivalueinputContainer'));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should toggle focus through buttons and input on "Tab" key', async () => {
    const { user } = setup(<MultiValueInput value={['value']} />);

    await user.tab();
    expect(screen.getByRole('button', { name: /Remove value/ })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
    await user.tab();
    expect(
      screen.getByRole('button', { name: /Clear all values/ }),
    ).toHaveFocus();
  });
  it('should call onValuesChange when value is added or removed', async () => {
    const inputValue = 'value';
    const { user } = setup(
      <MultiValueInput onValuesChange={mockValueChange} />,
    );

    await user.click(screen.getByRole('textbox'));
    await user.keyboard(`${inputValue}{Enter}`);
    expect(mockValueChange).toHaveBeenCalledTimes(1);
    expect(mockValueChange).toHaveBeenCalledWith([inputValue]);
    await user.click(screen.getByRole('button', { name: /Remove value/ }));
    expect(mockValueChange).toHaveBeenCalledTimes(2);
    expect(mockValueChange).toHaveBeenCalledWith([]);
  });
  it('should call onInputChange when input is changed', async () => {
    const inputValue = 'value';
    const { user } = setup(<MultiValueInput onInputChange={mockInputChange} />);

    await user.click(screen.getByRole('textbox'));
    await user.keyboard(`${inputValue}{Enter}`);
    expect(mockInputChange).toHaveBeenCalledTimes(5);
  });

  describe('adding values', () => {
    it('should add new value when "Enter" key is pressed', async () => {
      const inputValue = 'value';
      const { user } = setup(<MultiValueInput onValueAdd={mockValueAdd} />);

      await user.click(screen.getByRole('textbox'));
      await user.keyboard(`${inputValue}{Enter}`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new value when ";" key is pressed', async () => {
      const inputValue = 'value';
      const { user } = setup(<MultiValueInput onValueAdd={mockValueAdd} />);

      await user.type(screen.getByRole('textbox'), `${inputValue};`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new values when text is pasted into input', async () => {
      const pastedValue = ['value1', 'value2', 'value3'];
      const { user } = setup(<MultiValueInput onValueAdd={mockValueAdd} />);

      await user.click(screen.getByRole('textbox'));
      await user.paste(pastedValue.join(';'));

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith(pastedValue, pastedValue);
    });
    it('should add a comma separated values list', async () => {
      const pastedValue = ['value1', 'value2', 'value3'];
      const { user } = setup(
        <MultiValueInput valuesDelimiter="," onValueAdd={mockValueAdd} />,
      );

      await user.click(screen.getByRole('textbox'));
      await user.paste(pastedValue.join(','));

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith(pastedValue, pastedValue);
    });
    it('should add new value on blur', async () => {
      const inputValue = 'value';
      const { user } = setup(<MultiValueInput onValueAdd={mockValueAdd} />);

      await user.type(screen.getByRole('textbox'), `${inputValue}`);
      await act(() => {
        screen.getByRole('textbox').blur();
      });

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should not add duplicated value', async () => {
      const inputValue = 'value';
      const { user } = setup(
        <MultiValueInput value={[inputValue]} onValueAdd={mockValueAdd} />,
      );

      await user.click(screen.getByRole('textbox'));
      await user.keyboard(`${inputValue}{Enter}`);

      expect(mockValueAdd).not.toHaveBeenCalled();
    });
  });

  describe('removing value', () => {
    it('should remove value when pill remove button is clicked', async () => {
      const { user } = setup(
        <MultiValueInput value={['value']} onValueRemove={mockValueRemove} />,
      );

      await user.click(screen.getByRole('button', { name: /Remove value/ }));

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove all values when clear all button is clicked', async () => {
      const { user } = setup(
        <MultiValueInput
          value={['value1', 'value2']}
          onValueRemove={mockValueRemove}
        />,
      );

      await user.click(
        screen.getByRole('button', { name: /Clear all values/ }),
      );

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Backspace" key is pressed', async () => {
      const { user } = setup(
        <MultiValueInput onValueRemove={mockValueRemove} />,
      );

      await user.click(screen.getByRole('textbox'));
      await user.keyboard(`value{Enter}{Backspace}`);

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Delete" key is pressed', async () => {
      const { user } = setup(
        <MultiValueInput onValueRemove={mockValueRemove} />,
      );

      await user.click(screen.getByRole('textbox'));
      await user.keyboard(`value{Enter}{Delete}`);

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should not remove last value when "Backspace" key is pressed and input contains value', async () => {
      const { user } = setup(
        <MultiValueInput onValueRemove={mockValueRemove} />,
      );

      await user.click(screen.getByRole('textbox'));
      await user.keyboard(`value{Backspace}`);

      expect(mockValueRemove).not.toHaveBeenCalled();
    });
  });
});
