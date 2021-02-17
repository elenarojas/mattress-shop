import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('renders not found translation', () => {
  render(<NotFound />);
  const text = screen.getByText('notFound');
  expect(text).toBeInTheDocument();
});
