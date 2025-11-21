import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Market Mosaic heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Market Mosaic/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders market overview section', () => {
  render(<App />);
  const overviewElement = screen.getByText(/Market Overview/i);
  expect(overviewElement).toBeInTheDocument();
});

test('renders stock cards', () => {
  render(<App />);
  const appleStock = screen.getByText(/AAPL/i);
  expect(appleStock).toBeInTheDocument();
});

test('renders chart section', () => {
  render(<App />);
  const chartElement = screen.getByText(/Market Performance/i);
  expect(chartElement).toBeInTheDocument();
});

test('renders news section', () => {
  render(<App />);
  const newsElement = screen.getByText(/Latest Market News/i);
  expect(newsElement).toBeInTheDocument();
});
