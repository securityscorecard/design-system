import { fireEvent, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Filters from './Filters';
import { mockTestFields, mockTestState } from './mocks/options';

const onApplyFnMock = jest.fn();
const onCloseFnMock = jest.fn();

describe('Filters', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should display remove button when value exists', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.change(screen.getByPlaceholderText('String'), {
      target: { value: 'a' },
    });

    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
  });
  it('should call onApply when value exists and clicked on Apply button', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.change(screen.getByPlaceholderText('String'), {
      target: { value: 'a' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Apply/i }));

    expect(onApplyFnMock).toBeCalled();
  });

  it('should add filter when clicked on Add button', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.queryAllByText('Option A')).toHaveLength(2);
    expect(screen.queryAllByText('is')).toHaveLength(2);
    expect(screen.queryAllByPlaceholderText('String')).toHaveLength(2);
  });

  it('should set default filter when clicked on Clear all button', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.click(screen.getByRole('button', { name: /Clear all/i }));

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should call onClose when clicked on Close button', () => {
    renderWithProviders(
      <Filters
        fields={mockTestFields}
        onApply={onApplyFnMock}
        onClose={onCloseFnMock}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    expect(onCloseFnMock).toBeCalled();
  });

  it('should remain only filter with value when clicked on Apply button', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    fireEvent.change(screen.queryAllByPlaceholderText('String')[0], {
      target: { value: 'a' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Apply/i }));

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByDisplayValue('a')).toBeInTheDocument();
  });

  it('should display message when new filter is added to applied filters', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.change(screen.getByPlaceholderText('String'), {
      target: { value: 'a' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Apply/i }));
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText('You have unapplied filters')).toBeInTheDocument();
  });

  it('should display message when applied filter is changed', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.change(screen.queryAllByPlaceholderText('String')[0], {
      target: { value: 'a' },
    });
    fireEvent.change(screen.queryAllByPlaceholderText('String')[1], {
      target: { value: 'b' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Apply/i }));
    fireEvent.change(screen.queryAllByPlaceholderText('String')[0], {
      target: { value: 'c' },
    });

    expect(screen.getByText('You have unapplied filters')).toBeInTheDocument();
  });

  it('should remove filter when clicked on Remove button', () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.click(screen.getAllByRole('button', { name: /remove/i })[0]);

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('is')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should select default condition and component when field changed', async () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await selectEvent.select(screen.getByText('Option A'), 'Option B');

    expect(screen.getByText('is not')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number')).toBeInTheDocument();
  });

  it("should select first condition and component when field changed and hasn't set default", async () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    await selectEvent.select(screen.getByText('Option A'), 'Option C');

    expect(screen.getByText('contains')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
  });

  it('should persist value when condition changed and components are the same', async () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.change(screen.getByPlaceholderText('String'), {
      target: { value: 'a' },
    });

    await selectEvent.select(screen.getByText('is'), 'is not');

    expect(screen.getByDisplayValue('a')).toBeInTheDocument();
  });

  it('should keep same operators when operator select changed', async () => {
    renderWithProviders(
      <Filters fields={mockTestFields} onApply={onApplyFnMock} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    await selectEvent.select(screen.getByText('And'), 'Or');

    expect(screen.queryAllByText(/Or/i)).toHaveLength(2);
  });

  it('should preselect filters when state was applied', () => {
    renderWithProviders(
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

  it('should call "onCancel" when cancel button was clicked', () => {
    const onCancel = jest.fn();
    renderWithProviders(
      <Filters
        fields={mockTestFields}
        onApply={onApplyFnMock}
        onCancel={onCancel}
        isLoading
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));

    expect(onCancel).toHaveBeenCalled();
  });
});
