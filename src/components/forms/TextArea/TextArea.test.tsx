import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from './TextArea';

describe('TextArea', () => {
  describe('when char limit is set up', () => {
    it('should not clip text over limit', () => {
      render(<TextArea maxLength={5} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

      fireEvent.change(textarea, { target: { value: '0123456789' } });

      expect(textarea).toHaveValue('0123456789');
    });
  });

  it('should update char counter', async () => {
    render(<TextArea maxLength={5} />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'aaa');

    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
