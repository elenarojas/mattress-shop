import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
