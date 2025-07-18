/* eslint-disable testing-library/no-node-access */
import { screen, waitFor } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/setup';
import Filters from './Filters';
import { mockTestFields, mockTestState } from './mocks/options';

const onApplyFnMock = vi.fn();
const onCloseFnMock = vi.fn();

describe('Filters', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should display remove button when value exists', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.type(screen.getByPlaceholderText('String'), 'a');

    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
  });
  it('should call onApply when value exists and clicked on Apply button', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.type(screen.getByPlaceholderText('String'), 'a');
    await user.click(screen.getByRole('button', { name: /Apply/i }));

    expect(onApplyFnMock).toBeCalled();
  });

  it('should add filter when clicked on Add button', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.queryAllByText('Option A')).toHaveLength(2);
    expect(screen.queryAllByText('is')).toHaveLength(2);
    expect(screen.queryAllByPlaceholderText('String')).toHaveLength(2);
  });

  it('should set default filter when clicked on Clear all button', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));
    await user.click(screen.getByRole('button', { name: /Add/i }));
    await user.click(screen.getByRole('button', { name: /Clear all/i }));

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should call onClose when clicked on Close button', async () => {
    const { user } = setup(
      <Filters
        fields={mockTestFields}
        onApply={onApplyFnMock}
        onClose={onCloseFnMock}
      />,
    );
    await user.click(screen.getByRole('button', { name: /Close/i }));

    expect(onCloseFnMock).toBeCalled();
  });

  it('should remain only filter with value when clicked on Apply button', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));
    await user.click(screen.getByRole('button', { name: /Add/i }));

    // eslint-disable-next-line testing-library/no-node-access
    await user.type(screen.queryAllByPlaceholderText('String')[0], 'a');
    await user.click(screen.getByRole('button', { name: /Apply/i }));

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByDisplayValue('a')).toBeInTheDocument();
  });

  it('should display message when new filter is added to applied filters', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.type(screen.getByPlaceholderText('String'), 'a');
    await user.click(screen.getByRole('button', { name: /Apply/i }));
    await user.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText('You have unapplied filters')).toBeInTheDocument();
  });

  it('should display message when applied filter is changed', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));
    // eslint-disable-next-line testing-library/no-node-access
    await user.type(screen.queryAllByPlaceholderText('String')[0], 'a');
    // eslint-disable-next-line testing-library/no-node-access
    await user.type(screen.queryAllByPlaceholderText('String')[1], 'b');
    await user.click(screen.getByRole('button', { name: /Apply/i }));
    // eslint-disable-next-line testing-library/no-node-access
    await user.type(screen.queryAllByPlaceholderText('String')[0], 'c');

    expect(screen.getByText('You have unapplied filters')).toBeInTheDocument();
  });

  it('should remove filter when clicked on Remove button', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(screen.getAllByRole('button', { name: /remove/i })[0]);

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should select default condition and component when field changed', async () => {
    setup(<Filters fields={mockTestFields} onApply={onApplyFnMock} />);

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      selectEvent.select(screen.getByText('Option A'), 'Option B');
    });

    expect(await screen.findByText('is not')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Number')).toBeInTheDocument();
  });

  it("should select first condition and component when field changed and hasn't set default", async () => {
    setup(<Filters fields={mockTestFields} onApply={onApplyFnMock} />);

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      selectEvent.select(screen.getByText('Option A'), 'Option C');
    });

    expect(await screen.findByText('contains')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should persist value when condition changed and components are the same', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.type(screen.getByPlaceholderText('String'), 'a');

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      selectEvent.select(screen.getByText('is'), 'is not');
    });

    expect(screen.getByDisplayValue('a')).toBeInTheDocument();
  });

  it('should keep same operators when operator select changed', async () => {
    const { user } = setup(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await user.click(screen.getByRole('button', { name: /Add/i }));
    await user.click(screen.getByRole('button', { name: /Add/i }));
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      selectEvent.select(screen.getAllByText('And')[0], 'Or');
    });

    // Wait for both "Or" operators to appear
    await waitFor(() => {
      expect(screen.queryAllByText(/Or/i)).toHaveLength(2);
    });
  });

  it('should preselect filters when state was applied', () => {
    setup(
      <Filters
        fields={mockTestFields}
        state={mockTestState}
        onApply={onApplyFnMock}
      />,
    );

    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();

    expect(screen.getByText('Option C')).toBeInTheDocument();
    expect(screen.getByText('contains')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value Option C')).toBeInTheDocument();
  });

  it('should call "onCancel" when cancel button was clicked', async () => {
    const onCancel = vi.fn();
    const { user } = setup(
      <Filters
        fields={mockTestFields}
        onApply={onApplyFnMock}
        onCancel={onCancel}
        isLoading
      />,
    );

    await user.click(screen.getByRole('button', { name: /Cancel/i }));

    expect(onCancel).toHaveBeenCalled();
  });
});
