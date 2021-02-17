import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders cart icon with quantity', () => {
  render(
    <MemoryRouter>
      <Cart />
    </MemoryRouter>,
  );
  const cartIcon = screen.getByTitle('cartTitle');
  const quantity = screen.getByText(0);
  expect(cartIcon).toBeInTheDocument();
  expect(quantity).toBeInTheDocument();
});
