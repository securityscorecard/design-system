import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from './TextArea';

const ControlledTextArea = ({ mockOnChange, ...props }) => {
  const [value, setValue] = useState('');
  mockOnChange.mockImplementation((e) => {
    setValue(e.target.value);
  });

  return <TextArea value={value} onChange={mockOnChange} {...props} />;
};
describe('TextArea', () => {
  describe('when char limit is set up', () => {
    it('should not clip text over limit', async () => {
      render(<TextArea maxLength={5} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

      await userEvent.type(textarea, '0123456789');

      expect(textarea).toHaveValue('0123456789');
    });
  });

  describe('should update char counter', () => {
    it('as uncontrolled input', async () => {
      render(<TextArea maxLength={5} />);

      const textarea = screen.getByRole('textbox');
      await userEvent.type(textarea, 'aaa');

      expect(screen.getByText('2')).toBeInTheDocument();
    });
    it('as controlled input', async () => {
      const mockOnChange = jest.fn();
      render(<ControlledTextArea maxLength={5} mockOnChange={mockOnChange} />);

      const textarea = screen.getByRole('textbox');
      await userEvent.type(textarea, 'aaa');

      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });
});
