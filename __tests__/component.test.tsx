import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Error: Failed to fetch/i));
  });

  test('renders success state with fetched data', async () => {
    const mockData = { name: 'John Doe' };
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: mockData });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/John Doe/i));
  });

  test('handles user interaction with buttons and inputs', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', () => {
    const { getByRole, getByText } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(getByText(/Please fill in all fields/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: {} });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/No data available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Error: Failed to fetch/i));
  });

  test('renders success state with fetched data', async () => {
    const mockData = { name: 'John Doe' };
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: mockData });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/John Doe/i));
  });

  test('handles user interaction with buttons and inputs', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', () => {
    const { getByRole, getByText } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(getByText(/Please fill in all fields/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: {} });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/No data available/i));
  });
});