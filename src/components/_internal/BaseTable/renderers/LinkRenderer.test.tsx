import { fireEvent, screen } from '@testing-library/react';
import { noop } from 'ramda-adjunct';
import { vi } from 'vitest';

import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';
import LinkRenderer from './LinkRenderer';

const rowData = { col: 'val' };
const value = 'value';

describe('Datatable/LinkRenderer', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should call "hrefComposer" with correct arguments', () => {
    const hrefComposerMock = vi.fn();
    renderWithProviders(
      <LinkRenderer
        value={value}
        rowData={rowData}
        hrefComposer={hrefComposerMock}
      />,
    );

    expect(hrefComposerMock).toBeCalledWith(value, rowData);
  });
  it('should call "onClick" with correct arguments on value click', () => {
    const onClickMock = vi.fn();
    renderWithProviders(
      <LinkRenderer value={value} rowData={rowData} onClick={onClickMock} />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: new RegExp(value, 'i'),
      }),
    );
    expect(onClickMock).toBeCalledWith(value, rowData);
  });

  describe('given "toComposer" property is provided', () => {
    it('should throw if no "component" property is provided', () => {
      /* eslint-disable no-console */
      // prevent thrown error to propagate to logs
      const stdErr = console.error;
      console.error = vi.fn();

      expect(() =>
        renderWithProviders(
          <LinkRenderer value={value} rowData={rowData} toComposer={noop} />,
        ),
      ).toThrowError();

      // restore original console.error
      console.error = stdErr;
      /* eslint-enable */
    });
    it('should call "toComposer" with correct arguments', () => {
      const toComposerMock = vi.fn();
      renderWithProviders(
        <LinkRenderer
          value={value}
          rowData={rowData}
          toComposer={toComposerMock}
          component={() => null}
        />,
      );

      expect(toComposerMock).toBeCalledWith(value, rowData);
    });
  });
});
