import React from 'react';
import { render, screen } from '@testing-library/react';
import Stars from './Stars';

test('renders stars', () => {
  render(<Stars rating={2} />);
  const stars = screen.getAllByRole('listitem');
  expect(stars).toHaveLength(5);
});
