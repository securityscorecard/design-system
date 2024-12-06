import { useState } from 'react';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import TextArea from './TextArea';
import { setup } from '../../../utils/tests/renderWithProviders';

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
      const { user } = setup(<TextArea maxLength={5} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

      await user.type(textarea, '0123456789');

      expect(textarea).toHaveValue('0123456789');
    });
  });

  describe('should update char counter', () => {
    it('as uncontrolled input', async () => {
      const { user } = setup(<TextArea maxLength={5} />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'aaa');

      expect(screen.getByText('2')).toBeInTheDocument();
    });
    it('as controlled input', async () => {
      const mockOnChange = vi.fn();
      const { user } = setup(
        <ControlledTextArea maxLength={5} mockOnChange={mockOnChange} />,
      );

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'aaa');

      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });
});
