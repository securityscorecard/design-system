import { render, screen } from '@testing-library/react';
import styled from 'styled-components';

import DSProvider from './DSProvider';

describe('DSProvider', () => {
  const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.neutral[900]};
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

    expect(button).toHaveStyleRule('background', '#f0ecfe');
    expect(button).toHaveStyleRule('color', '#2a2a2a');
  });

  it('should merge provided theme with default one', () => {
    renderComponent({ colors: { primary: { 50: 'red' } } });
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background', 'red');
    expect(button).toHaveStyleRule('color', '#2a2a2a');
  });
});
