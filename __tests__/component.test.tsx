import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: any) => {
    return jest.fn().mockReturnValue({
      data,
      error,
      isLoading: !Boolean(data),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when fetching external data', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if there is an error while fetching data', async () => {
    const mockError = new Error('Failed to fetch');
    useExternalData.mockImplementation(mockUseExternalData(undefined, mockError));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  });

  test('renders product list when external data is fetched successfully', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('clicking on product should navigate to product details page', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/product a/i));
    expect(window.location.pathname).toBe(`/products/1`);
  });

  test('accessibility features are properly implemented', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/product a/i)).toHaveAttribute('aria-label', 'View Product A Details');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: any) => {
    return jest.fn().mockReturnValue({
      data,
      error,
      isLoading: !Boolean(data),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when fetching external data', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if there is an error while fetching data', async () => {
    const mockError = new Error('Failed to fetch');
    useExternalData.mockImplementation(mockUseExternalData(undefined, mockError));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  });

  test('renders product list when external data is fetched successfully', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('clicking on product should navigate to product details page', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/product a/i));
    expect(window.location.pathname).toBe(`/products/1`);
  });

  test('accessibility features are properly implemented', async () => {
    const mockProducts = [{ id: '1', name: 'Product A' }];
    useExternalData.mockImplementation(mockUseExternalData(mockProducts));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/product a/i)).toHaveAttribute('aria-label', 'View Product A Details');
  });
});