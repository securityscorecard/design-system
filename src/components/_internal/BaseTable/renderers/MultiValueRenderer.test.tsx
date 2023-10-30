import { fireEvent, screen, waitFor } from '@testing-library/react';
import { identity, join, pipe, slice } from 'ramda';

import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';
import MultiValueRenderer from './MultiValueRenderer';
import { abbreviateNumber } from '../../../../utils';
import { defaultDSContext } from '../../../../theme/DSProvider/DSProvider';

const values = ['a', 'b', 'c', 'd', 'e'];
const numberOfVisibleItems = 2;
const rowData = { col: 'val' };

describe('Datatable/MultiValueRenderer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should open tooltip with rest of values when hover on rest values pill', async () => {
    const restValuesCount = values.length - numberOfVisibleItems;
    const restValuesText = pipe(
      slice(numberOfVisibleItems, values.length),
      join(''),
    )(values);
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={2}
        values={values}
        rowData={{}}
      />,
    );

    fireEvent.pointerEnter(screen.getByText(`+ ${restValuesCount}`));

    /* eslint-disable testing-library/no-node-access */
    await waitFor(() => {
      expect(
        document.getElementById(defaultDSContext.portalsContainerId),
      ).toHaveTextContent(restValuesText);
    });
    /* eslint-enable testing-library/no-node-access */
  });
  it('should open tooltip when hover on value pill', async () => {
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={2}
        values={values}
        rowData={{}}
        tooltipComposer={identity}
      />,
    );

    fireEvent.pointerEnter(screen.getByText(values[0]));

    /* eslint-disable testing-library/no-node-access */
    await waitFor(() => {
      expect(
        document.getElementById(defaultDSContext.portalsContainerId),
      ).toHaveTextContent(values[0]);
    });
    /* eslint-enable testing-library/no-node-access */
  });
  it('should call "tooltipComposer" with correct arguments for each visible value', () => {
    const tooltipComposerMock = jest.fn();
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={numberOfVisibleItems}
        values={values}
        rowData={rowData}
        tooltipComposer={tooltipComposerMock}
      />,
    );

    expect(tooltipComposerMock).toBeCalledWith(values[0], rowData);
    expect(tooltipComposerMock).toBeCalledWith(values[1], rowData);
    expect(tooltipComposerMock).toBeCalledTimes(numberOfVisibleItems);
  });
  it('should call "hrefComposer" with correct arguments for each visible value', () => {
    const hrefComposerMock = jest.fn();

    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={numberOfVisibleItems}
        values={values}
        rowData={rowData}
        hrefComposer={hrefComposerMock}
      />,
    );

    expect(hrefComposerMock).toBeCalledWith(values[0], rowData);
    expect(hrefComposerMock).toBeCalledWith(values[1], rowData);
    expect(hrefComposerMock).toBeCalledTimes(numberOfVisibleItems);
  });
  it('should call "toComposer" with correct arguments for each visible value', () => {
    const toComposerMock = jest.fn();
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={numberOfVisibleItems}
        values={values}
        rowData={rowData}
        toComposer={toComposerMock}
        linkComponent={() => null}
      />,
    );

    expect(toComposerMock).toBeCalledWith(values[0], rowData);
    expect(toComposerMock).toBeCalledWith(values[1], rowData);
    expect(toComposerMock).toBeCalledTimes(numberOfVisibleItems);
  });
  it('should call "onClick" with correct arguments on value click', async () => {
    const onClickMock = jest.fn();
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={2}
        values={values}
        rowData={rowData}
        onClick={onClickMock}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: new RegExp(values[0], 'i'),
      }),
    );
    expect(onClickMock).toBeCalledWith(values[0], rowData);
  });
  it('should call "valueFormatter" with correct arguments for each value', () => {
    const formatterMock = jest.fn();
    const shortValues = ['a', 'b', 'c'];
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={2}
        values={shortValues}
        rowData={rowData}
        valueFormatter={formatterMock}
      />,
    );

    expect(formatterMock).toBeCalledWith(shortValues[0], rowData);
    expect(formatterMock).toBeCalledWith(shortValues[1], rowData);
    expect(formatterMock).toBeCalledWith(shortValues[2], rowData);
    expect(formatterMock).toBeCalledTimes(shortValues.length);
  });
  it('should format all values when "valueFormatter" is provided', async () => {
    const numericValues = [1000, 2000, 3000];
    renderWithProviders(
      <MultiValueRenderer
        multiValueDisplayLimit={2}
        values={numericValues}
        rowData={rowData}
        valueFormatter={abbreviateNumber}
      />,
    );

    /* eslint-disable testing-library/no-node-access */
    expect(
      document.getElementsByClassName('ds-table-cell-multivalue')[0],
    ).toHaveTextContent('1K2K+ 1');
    fireEvent.pointerEnter(screen.getByText('+ 1'));
    await waitFor(() => {
      expect(
        document.getElementById(defaultDSContext.portalsContainerId),
      ).toHaveTextContent('3K');
    });
    /* eslint-enable testing-library/no-node-access */
  });
});
