import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import MultiValueInput from './MultiValueInput';

const mockValueAdd = vi.fn();
const mockValueRemove = vi.fn();
const mockValueChange = vi.fn();
const mockInputChange = vi.fn();

describe('MultiValueInput', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should focus input on "Tab" key', async () => {
    render(<MultiValueInput />);

    await userEvent.tab();

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should focus input on container click', async () => {
    render(<MultiValueInput />);

    await userEvent.click(screen.getByTestId('multivalueinputContainer'));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should toggle focus through buttons and input on "Tab" key', async () => {
    render(<MultiValueInput value={['value']} />);

    await userEvent.tab();
    expect(screen.getByRole('button', { name: /Remove value/ })).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: /Clear all values/ }),
    ).toHaveFocus();
  });
  it('should call onValuesChange when value is added or removed', async () => {
    const inputValue = 'value';
    render(<MultiValueInput onValuesChange={mockValueChange} />);

    await userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);
    expect(mockValueChange).toHaveBeenCalledTimes(1);
    expect(mockValueChange).toHaveBeenCalledWith([inputValue]);
    await userEvent.click(screen.getByRole('button', { name: /Remove value/ }));
    expect(mockValueChange).toHaveBeenCalledTimes(2);
    expect(mockValueChange).toHaveBeenCalledWith([]);
  });
  it('should call onInputChange when input is changed', async () => {
    const inputValue = 'value';
    render(<MultiValueInput onInputChange={mockInputChange} />);

    await userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);
    expect(mockInputChange).toHaveBeenCalledTimes(5);
  });

  describe('adding values', () => {
    it('should add new value when "Enter" key is pressed', async () => {
      const inputValue = 'value';
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      await userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new value when ";" key is pressed', async () => {
      const inputValue = 'value';
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      await userEvent.type(screen.getByRole('textbox'), `${inputValue};`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new values when text is pasted into input', async () => {
      const pastedValue = ['value1', 'value2', 'value3'];
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      await userEvent.paste(
        screen.getByRole('textbox') as HTMLInputElement,
        pastedValue.join(';'),
        {
          clipboardData: {
            getData: () => pastedValue.join(';'),
          },
        } as unknown, // as I really don't need other properties of this object
      );

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith(pastedValue, pastedValue);
    });
    it('should add a comma separated values list', async () => {
      const pastedValue = ['value1', 'value2', 'value3'];
      render(<MultiValueInput valuesDelimiter="," onValueAdd={mockValueAdd} />);

      await userEvent.paste(
        screen.getByRole('textbox') as HTMLInputElement,
        pastedValue.join(','),
        {
          clipboardData: {
            getData: () => pastedValue.join(','),
          },
        } as unknown, // as I really don't need other properties of this object
      );

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith(pastedValue, pastedValue);
    });
    it('should add new value on blur', async () => {
      const inputValue = 'value';
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      await userEvent.type(screen.getByRole('textbox'), `${inputValue}`);
      screen.getByRole('textbox').blur();

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should not add duplicated value', async () => {
      const inputValue = 'value';
      render(
        <MultiValueInput value={[inputValue]} onValueAdd={mockValueAdd} />,
      );

      await userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);

      expect(mockValueAdd).not.toHaveBeenCalled();
    });
  });

  describe('removing value', () => {
    it('should remove value when pill remove button is clicked', async () => {
      render(
        <MultiValueInput value={['value']} onValueRemove={mockValueRemove} />,
      );

      await userEvent.click(
        screen.getByRole('button', { name: /Remove value/ }),
      );

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove all values when clear all button is clicked', async () => {
      render(
        <MultiValueInput
          value={['value1', 'value2']}
          onValueRemove={mockValueRemove}
        />,
      );

      await userEvent.click(
        screen.getByRole('button', { name: /Clear all values/ }),
      );

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Backspace" key is pressed', async () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      await userEvent.type(
        screen.getByRole('textbox'),
        `value{enter}{backspace}`,
      );

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Delete" key is pressed', async () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      await userEvent.type(screen.getByRole('textbox'), `value{enter}{del}`);

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should not remove last value when "Backspace" key is pressed and input contains value', async () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      await userEvent.type(screen.getByRole('textbox'), `value{backspace}`);

      expect(mockValueRemove).not.toHaveBeenCalled();
    });
  });
});
