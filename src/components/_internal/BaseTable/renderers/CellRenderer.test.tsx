import { screen, waitFor } from '@testing-library/react';
import { identity, F as stubFalse } from 'ramda';
import { Row } from 'react-table';
import { vi } from 'vitest';

import { setup } from '../../../../utils/tests/setup';
import CellRenderer from './CellRenderer';
import { CellTypes } from './renderers.enums';
import { abbreviateNumber } from '../../../../utils';

const row = { original: { col: 'val' } } as unknown as Row<
  Record<string, unknown>
>;
const multiValueValues = [1000, 2000, 3000];
const singleValue = 'value';

describe('Datatable/CellRenderer', () => {
  describe('given cell type is multiValue', () => {
    it('should pass "cellOnClick" handler', async () => {
      const onClickMock = vi.fn();
      const { user } = setup(
        <CellRenderer
          value={multiValueValues}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.multiValue,
            cellOnClick: onClickMock,
          }}
          row={row}
        />,
      );
      await user.click(
        screen.getByRole('button', {
          name: new RegExp(multiValueValues[0].toString(), 'i'),
        }),
      );
      expect(onClickMock).toBeCalled();
    });
    it('should pass "cellToComposer" handler', () => {
      const toComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={multiValueValues}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.multiValue,
            cellToComposer: toComposerMock,
            cellLinkComponent: () => null,
          }}
          row={row}
        />,
      );

      expect(toComposerMock).toBeCalled();
    });
    it('should pass "cellHrefComposer" handler', () => {
      const hrefComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={multiValueValues}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.multiValue,
            cellHrefComposer: hrefComposerMock,
          }}
          row={row}
        />,
      );

      expect(hrefComposerMock).toBeCalled();
    });
    it('should pass "cellFormatter" handler', () => {
      const formatterMock = vi.fn();
      setup(
        <CellRenderer
          value={multiValueValues}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.multiValue,
            cellFormatter: formatterMock,
          }}
          row={row}
        />,
      );

      expect(formatterMock).toBeCalled();
    });
    it('should pass "cellTooltipPopupComposer" handler', () => {
      const tooltipComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={multiValueValues}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.multiValue,
            cellTooltipPopupComposer: tooltipComposerMock,
          }}
          row={row}
        />,
      );

      expect(tooltipComposerMock).toBeCalled();
    });
  });

  describe('given cell type is link', () => {
    it('should pass "cellOnClick" handler', async () => {
      const onClickMock = vi.fn();
      const { user } = setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.link,
            cellOnClick: onClickMock,
          }}
          row={row}
        />,
      );

      await user.click(
        screen.getByRole('button', {
          name: new RegExp(singleValue, 'i'),
        }),
      );
      expect(onClickMock).toBeCalled();
    });
    it('should pass "cellToComposer" handler', () => {
      const toComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.link,
            cellToComposer: toComposerMock,
            cellLinkComponent: () => null,
          }}
          row={row}
        />,
      );

      expect(toComposerMock).toBeCalled();
    });
    it('should pass "cellHrefComposer" handler', () => {
      const hrefComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.link,
            cellHrefComposer: hrefComposerMock,
          }}
          row={row}
        />,
      );

      expect(hrefComposerMock).toBeCalled();
    });
    it('should pass "cellFormatter" handler', () => {
      const formatterMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.link,
            cellFormatter: formatterMock,
          }}
          row={row}
        />,
      );

      expect(formatterMock).toBeCalled();
    });
  });

  describe('given cell type is discrete link', () => {
    it('should pass "cellOnClick" handler', async () => {
      const onClickMock = vi.fn();
      const { user } = setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.discreteLink,
            cellOnClick: onClickMock,
          }}
          row={row}
        />,
      );

      await user.click(
        screen.getByRole('button', {
          name: new RegExp(singleValue, 'i'),
        }),
      );
      expect(onClickMock).toBeCalled();
    });
    it('should pass "cellToComposer" handler', () => {
      const toComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.discreteLink,
            cellToComposer: toComposerMock,
            cellLinkComponent: () => null,
          }}
          row={row}
        />,
      );

      expect(toComposerMock).toBeCalled();
    });
    it('should pass "cellHrefComposer" handler', () => {
      const hrefComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.discreteLink,
            cellHrefComposer: hrefComposerMock,
          }}
          row={row}
        />,
      );

      expect(hrefComposerMock).toBeCalled();
    });
    it('should pass "cellFormatter" handler', () => {
      const formatterMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.discreteLink,
            cellFormatter: formatterMock,
          }}
          row={row}
        />,
      );
      expect(formatterMock).toBeCalled();
    });
  });

  describe('given cell type is not multivalue', () => {
    it('should open tooltip when hover on value', async () => {
      const { user } = setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.text,
            cellTooltipPopupComposer: identity,
          }}
          row={row}
        />,
      );

      const value = screen.getByText(singleValue);
      await user.hover(value);

      await waitFor(() => {
        expect(screen.getAllByText(singleValue)[0]).toBeInTheDocument();
      });
    });
    it('should call "tooltipComposer" with correct arguments for each visible value', () => {
      const tooltipComposerMock = vi.fn();
      setup(
        <CellRenderer
          value={singleValue}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.text,
            cellTooltipPopupComposer: tooltipComposerMock,
          }}
          row={row}
        />,
      );
      expect(tooltipComposerMock).toBeCalledWith(singleValue, row.original);
      expect(tooltipComposerMock).toBeCalledTimes(1);
    });
    it('should format value when "cellFormatter" is provided', () => {
      setup(
        <CellRenderer
          value={1000}
          column={{
            nullCondition: stubFalse,
            cellType: CellTypes.text,
            cellFormatter: (val) => abbreviateNumber(val),
          }}
          row={row}
        />,
      );
      expect(screen.getByText('1K')).toBeInTheDocument();
    });
  });
});
