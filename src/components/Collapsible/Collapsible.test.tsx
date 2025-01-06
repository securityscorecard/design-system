import { ReactNode, useState } from 'react';
import { screen } from '@testing-library/react';
import { type Mock, vi } from 'vitest';

import { setup } from '../../utils/tests/renderWithProviders';
import { Collapsible } from './index';

const ControllingComponent = ({
  isOpen,
  onOpenChange,
  onOpen,
  children,
}: {
  isOpen?: boolean;
  onOpenChange: Mock;
  onOpen?: Mock;
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
      setup(<Collapsible title="test">Collapsible content</Collapsible>);
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should be opened when "defaultIsOpen" is true', () => {
      setup(
        <Collapsible title="test" defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
    });

    it('should toggle open state on trigger click', async () => {
      const { user } = setup(
        <Collapsible title="test">Collapsible content</Collapsible>,
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should close on trigger click if opened by default', async () => {
      const { user } = setup(
        <Collapsible title="test" defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });
    it('should call "onOpen" on trigger click', async () => {
      const onOpenMock = vi.fn();
      const { user } = setup(
        <Collapsible title="test" onOpen={onOpenMock}>
          Collapsible content
        </Collapsible>,
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(onOpenMock).toBeCalledTimes(1);
    });
    it('should call "onOpen" only when is open', async () => {
      const onOpenMock = vi.fn();
      const { user } = setup(
        <Collapsible title="test" onOpen={onOpenMock} defaultIsOpen>
          Collapsible content
        </Collapsible>,
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(onOpenMock).not.toBeCalled();
    });
  });

  describe('controlled mode', () => {
    it('should toggle open state on trigger click', async () => {
      const onOpenChangeMock = vi.fn();
      const { user } = setup(
        <ControllingComponent onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });

    it('should toggle open state on external state change', async () => {
      const onOpenChangeMock = vi.fn();
      const { user } = setup(
        <ControllingComponent onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );

      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.queryByText('Collapsible content')).not.toBeInTheDocument();
    });

    it('should be opened when "isOpen" is true', () => {
      const onOpenChangeMock = vi.fn();
      setup(
        <ControllingComponent isOpen onOpenChange={onOpenChangeMock}>
          Collapsible content
        </ControllingComponent>,
      );
      expect(screen.getByText('Collapsible content')).toBeInTheDocument();
    });
  });
});
