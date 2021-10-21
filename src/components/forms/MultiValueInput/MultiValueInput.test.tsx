import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MultiValueInput from './MultiValueInput';

const mockValueAdd = jest.fn();
const mockValueRemove = jest.fn();
const mockValueChange = jest.fn();
const mockInputChange = jest.fn();

describe('MultiValueInput', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should focus input on "Tab" key', () => {
    render(<MultiValueInput />);

    userEvent.tab();

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should focus input on container click', () => {
    render(<MultiValueInput />);

    userEvent.click(screen.getByTestId('multivalueinputContainer'));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  it('should toggle focus through buttons and input on "Tab" key', () => {
    render(<MultiValueInput value={['value']} />);

    userEvent.tab();
    expect(screen.getByRole('button', { name: /Remove value/ })).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
    userEvent.tab();
    expect(
      screen.getByRole('button', { name: /Clear all values/ }),
    ).toHaveFocus();
  });
  it('should call onValuesChange when value is added or removed', () => {
    const inputValue = 'value';
    render(<MultiValueInput onValuesChange={mockValueChange} />);

    userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);
    expect(mockValueChange).toHaveBeenCalledTimes(1);
    expect(mockValueChange).toHaveBeenCalledWith([inputValue]);
    userEvent.click(screen.getByRole('button', { name: /Remove value/ }));
    expect(mockValueChange).toHaveBeenCalledTimes(2);
    expect(mockValueChange).toHaveBeenCalledWith([]);
  });
  it('should call onInputChange when input is changed', () => {
    const inputValue = 'value';
    render(<MultiValueInput onInputChange={mockInputChange} />);

    userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);
    expect(mockInputChange).toHaveBeenCalledTimes(5);
  });

  describe('adding values', () => {
    it('should add new value when "Enter" key is pressed', () => {
      const inputValue = 'value';
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new value when ";" key is pressed', () => {
      const inputValue = 'value';
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      userEvent.type(screen.getByRole('textbox'), `${inputValue};`);

      expect(mockValueAdd).toHaveBeenCalledTimes(1);
      expect(mockValueAdd).toHaveBeenCalledWith([inputValue], [inputValue]);
    });
    it('should add new values when text is pasted into input', () => {
      const pastedValue = ['value1', 'value2', 'value3'];
      render(<MultiValueInput onValueAdd={mockValueAdd} />);

      userEvent.paste(
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
    it('should not add duplicated value', () => {
      const inputValue = 'value';
      render(
        <MultiValueInput value={[inputValue]} onValueAdd={mockValueAdd} />,
      );

      userEvent.type(screen.getByRole('textbox'), `${inputValue}{enter}`);

      expect(mockValueAdd).not.toHaveBeenCalled();
    });
  });

  describe('removing value', () => {
    it('should remove value when pill remove button is clicked', () => {
      render(
        <MultiValueInput value={['value']} onValueRemove={mockValueRemove} />,
      );

      userEvent.click(screen.getByRole('button', { name: /Remove value/ }));

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove all values when clear all button is clicked', () => {
      render(
        <MultiValueInput
          value={['value1', 'value2']}
          onValueRemove={mockValueRemove}
        />,
      );

      userEvent.click(screen.getByRole('button', { name: /Clear all values/ }));

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Backspace" key is pressed', () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      userEvent.type(screen.getByRole('textbox'), `value{enter}{backspace}`);

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should remove last value when "Delete" key is pressed', () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      userEvent.type(screen.getByRole('textbox'), `value{enter}{del}`);

      expect(mockValueRemove).toHaveBeenCalledTimes(1);
      expect(mockValueRemove).toHaveBeenCalledWith([]);
    });
    it('should not remove last value when "Backspace" key is pressed and input contains value', () => {
      render(<MultiValueInput onValueRemove={mockValueRemove} />);

      userEvent.type(screen.getByRole('textbox'), `value{backspace}`);

      expect(mockValueRemove).not.toHaveBeenCalled();
    });
  });
});
