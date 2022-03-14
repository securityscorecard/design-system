import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('should not show a dropdown button when breadcrumb have less than 3 items', () => {
    renderWithProviders(
      <Breadcrumbs>
        <BreadcrumbItem href="#">Root</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent</BreadcrumbItem>
        <BreadcrumbItem href="">Current</BreadcrumbItem>
      </Breadcrumbs>,
    );

    const dropdownButton = screen.queryByLabelText('Open breadcrumbs menu');
    expect(dropdownButton).not.toBeInTheDocument();
  });

  it('should show a dropdown button when breadcrumb have more than 3 items', () => {
    renderWithProviders(
      <Breadcrumbs>
        <BreadcrumbItem href="#">Root</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent4</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent5</BreadcrumbItem>
        <BreadcrumbItem href="">Current</BreadcrumbItem>
      </Breadcrumbs>,
    );

    const dropdownButton = screen.getByLabelText('Open breadcrumbs menu');
    // check dropdown button is present
    expect(dropdownButton).toBeInTheDocument();

    // Check options are hidden
    expect(screen.queryByText(/Parent1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Parent2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Parent3/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Parent4/i)).not.toBeInTheDocument();
  });

  it('should show all items inside dropdown when dropdown is opened', () => {
    renderWithProviders(
      <Breadcrumbs>
        <BreadcrumbItem href="#">Root</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent4</BreadcrumbItem>
        <BreadcrumbItem href="#">Parent5</BreadcrumbItem>
        <BreadcrumbItem href="">Current</BreadcrumbItem>
      </Breadcrumbs>,
    );

    // Click to open dropdown
    const dropdownButton = screen.getByLabelText('Open breadcrumbs menu');
    expect(dropdownButton).toBeInTheDocument();
    fireEvent.click(dropdownButton);

    // expect dropdown options visible
    expect(screen.getByText(/Parent1/i)).toBeVisible();
    expect(screen.getByText(/Parent2/i)).toBeVisible();
    expect(screen.getByText(/Parent3/i)).toBeVisible();
    expect(screen.getByText(/Parent4/i)).toBeVisible();
  });

  it('should show items within dropdown using correct order ', () => {
    renderWithProviders(
      <Breadcrumbs>
        <BreadcrumbItem href="#">Link1</BreadcrumbItem>
        <BreadcrumbItem href="#">Link2</BreadcrumbItem>
        <BreadcrumbItem href="#">Link3</BreadcrumbItem>
        <BreadcrumbItem href="#">Link4</BreadcrumbItem>
        <BreadcrumbItem href="#">Link5</BreadcrumbItem>
        <BreadcrumbItem href="#">Link6</BreadcrumbItem>
        <BreadcrumbItem href="">Link9</BreadcrumbItem>
      </Breadcrumbs>,
    );

    // Click to open dropdown
    const dropdownButton = screen.getByLabelText('Open breadcrumbs menu');
    expect(dropdownButton).toBeInTheDocument();
    fireEvent.click(dropdownButton);

    // Check reverse index for links within the dropdown
    const links = screen.queryAllByText('Link', { exact: false });
    expect(links.findIndex((item) => item.textContent === 'Link5')).toBe(3);
    expect(links.findIndex((item) => item.textContent === 'Link2')).toBe(0);
  });

  it('should be the last breadcrumb item not a link', () => {
    renderWithProviders(
      <Breadcrumbs>
        <BreadcrumbItem href="#">Link1</BreadcrumbItem>
        <BreadcrumbItem href="#">Link2</BreadcrumbItem>
        <BreadcrumbItem href="#">Link3</BreadcrumbItem>
        <BreadcrumbItem href="#">Link4</BreadcrumbItem>
        <BreadcrumbItem href="#">Link5</BreadcrumbItem>
        <BreadcrumbItem href="#">Link6</BreadcrumbItem>
        <BreadcrumbItem href="">Link9</BreadcrumbItem>
      </Breadcrumbs>,
    );

    // Click to open dropdown
    const dropdownButton = screen.getByLabelText('Open breadcrumbs menu');
    expect(dropdownButton).toBeInTheDocument();
    fireEvent.click(dropdownButton);

    // Check reverse index for links within the dropdown
    const links = screen.queryAllByText('Link', { exact: false });
    const lastLink = links.filter((item) => item.textContent === 'Link9')[0];
    expect(lastLink.nodeName).not.toBe('A');
  });
});
