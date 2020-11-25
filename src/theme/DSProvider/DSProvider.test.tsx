import React from 'react';
import { render, screen } from '@testing-library/react';
import styled from 'styled-components';

import DSProvider from './DSProvider';

describe('DSProvider', () => {
  const Button = styled.button`
    background: ${({ theme }) => theme.colors.kiwi};
    color: ${({ theme }) => theme.colors.banana};
  `;

  const renderComponent = (theme = undefined) =>
    render(
      <DSProvider theme={theme}>
        <Button>Test</Button>
      </DSProvider>,
    );

  it('should use default theme when prop is not provided', () => {
    renderComponent();
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background', '#4aba00');
    expect(button).toHaveStyleRule('color', '#e5bd00');
  });

  it('should merge provided theme with default one', () => {
    renderComponent({ colors: { kiwi: 'red' } });
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background', 'red');
    expect(button).toHaveStyleRule('color', '#e5bd00');
  });
});
