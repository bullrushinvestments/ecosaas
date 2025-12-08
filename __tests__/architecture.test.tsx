import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data, loading) => ({
    data,
    isLoading: loading,
    error: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    const mockData = [];
    const mockLoading = true;
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, mockLoading));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays data when fetched successfully', async () => {
    const mockData = ['item1', 'item2'];
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, false));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/item1/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/item2/i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData([], false, mockError));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interactions such as clicking a button', () => {
    const mockOnClick = jest.fn();
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData([], false));

    render(<DesignArchitecture />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ensures component is accessible', () => {
    const mockData = ['item1'];
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, false));

    render(<DesignArchitecture />);
    
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/item1/i)).toBeVisible();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data, loading) => ({
    data,
    isLoading: loading,
    error: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    const mockData = [];
    const mockLoading = true;
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, mockLoading));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays data when fetched successfully', async () => {
    const mockData = ['item1', 'item2'];
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, false));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/item1/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/item2/i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData([], false, mockError));

    render(<DesignArchitecture />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interactions such as clicking a button', () => {
    const mockOnClick = jest.fn();
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData([], false));

    render(<DesignArchitecture />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ensures component is accessible', () => {
    const mockData = ['item1'];
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData, false));

    render(<DesignArchitecture />);
    
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/item1/i)).toBeVisible();
  });
});