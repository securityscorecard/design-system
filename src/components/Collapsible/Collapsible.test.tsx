import { ReactNode, useState } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import { Collapsible } from './index';

const ControllingComponent = ({
  isOpen,
  onOpenChange,
  onOpen,
  children,
}: {
  isOpen?: boolean;
  onOpenChange: jest.Mock;
  onOpen?: jest.Mock;
  children: ReactNode;
}) => {
  const [controlledIsOpen, setControlledIsOpen] = useState(isOpen ?? false);
  onOpenChange.mockImplementation((v) => setControlledIsOpen(v));
  return (
    <>
      <button
        type="button"
        onClick={() => setControlledIsOpen((prev) => !prev)}
      >
        toggle
      </button>
      <Collapsible
        title="test"
        isOpen={controlledIsOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
      >
        {children}
      </Collapsible>
    </>
  );
};

describe('Collapsible', () => {
  describe('uncontrolled mode', () => {
    it('should be closed by default', () => {
      renderWithProviders(
        <Collapsible title="test">Collapsible content</Collapsible>,
      );
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should be opened when "defaultIsOpen" is true', () => {
      renderWithProviders(
        <Collapsible title="test" defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
    });

    it('should toggle open state on trigger click', async () => {
      renderWithProviders(
        <Collapsible title="test">Collapsible content</Collapsible>,
      );

      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should close on trigger click if opened by default', async () => {
      renderWithProviders(
        <Collapsible title="test" defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );

      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should call "onOpen" on trigger click', async () => {
      const onOpenMock = jest.fn();
      renderWithProviders(
        <Collapsible title="test" onOpen={onOpenMock}>
          Collapsible content
        </Collapsible>,
      );

      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(onOpenMock).toBeCalledTimes(1);
    });
    it('should call "onOpen" only when is open', async () => {
      const onOpenMock = jest.fn();
      renderWithProviders(
        <Collapsible title="test" onOpen={onOpenMock} defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );

      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(onOpenMock).not.toBeCalled();
    });
  });

  describe('controlled mode', () => {
    it('should toggle open state on trigger click', async () => {
      const onOpenChangeMock = jest.fn();
      renderWithProviders(
        <ControllingComponent onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );

      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });

    it('should toggle open state on external state change', async () => {
      const onOpenChangeMock = jest.fn();
      renderWithProviders(
        <ControllingComponent onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );

      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });

    it('should be opened when "isOpen" is true', () => {
      const onOpenChangeMock = jest.fn();
      renderWithProviders(
        <ControllingComponent isOpen onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
    });
  });
});
