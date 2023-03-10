import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  const renderComponent = (size = undefined) =>
    render(<Heading size={size}>Heading</Heading>);

  it("should render 'h1' element by default", () => {
    renderComponent();

    expect(screen.getByRole('heading').nodeName).toBe('H1');
  });

  it("should render 'h1' element if size is specified", () => {
    renderComponent('h1');

    expect(screen.getByRole('heading').nodeName).toBe('H1');
  });

  it("should render 'h2' element if size is specified", () => {
    renderComponent('h2');

    expect(screen.getByRole('heading').nodeName).toBe('H2');
  });

  it("should render 'h3' element if size is specified", () => {
    renderComponent('h3');

    expect(screen.getByRole('heading').nodeName).toBe('H3');
  });

  it("should render 'h4' element if size is specified", () => {
    renderComponent('h4');

    expect(screen.getByRole('heading').nodeName).toBe('H4');
  });

  describe("given 'as' prop is provided to the component", () => {
    it('should take precedence over default element', () => {
      render(
        <Heading as="div" size="h1">
          Heading
        </Heading>,
      );

      expect(screen.getByText('Heading').nodeName).toBe('DIV');
    });
  });
});
