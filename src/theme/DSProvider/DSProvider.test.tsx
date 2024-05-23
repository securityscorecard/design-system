import React from 'react';
import { render, screen } from '@testing-library/react';
import styled, { DefaultTheme } from 'styled-components';
import { indigo, slate } from '@radix-ui/colors';

import DSProvider from './DSProvider';
import { Subset } from '../../types/utils.types';

describe('DSProvider', () => {
  const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.neutral[900]};
  `;

  const renderComponent = (
    theme: Subset<DefaultTheme> | undefined = undefined,
  ) =>
    render(
      <DSProvider theme={theme}>
        <Button>Test</Button>
      </DSProvider>,
    );

  it('should use default theme when prop is not provided', () => {
    renderComponent();
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background', indigo.indigo3);
    expect(button).toHaveStyleRule('color', slate.slate12);
  });

  it('should merge provided theme with default one', () => {
    renderComponent({ colors: { primary: { 50: 'red' } } });
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background', 'red');
    expect(button).toHaveStyleRule('color', slate.slate12);
  });
});
