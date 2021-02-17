import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider } from './CartProvider';

const testStr = 'Cart Provider Test';

test('renders CartProvider properly', () => {
  render(
    <CartProvider>
      <span>{testStr}</span>
    </CartProvider>,
  );
  const element = screen.getByText(testStr);
  expect(element).toBeInTheDocument();
});
