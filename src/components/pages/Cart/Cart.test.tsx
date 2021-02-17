import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { CartContext } from '../../../context/CartProvider';
import Cart from './Cart';

const state = {
  cartItems: [
    {
      id: 'one',
      imageFileName: 'one.png',
      name: 'one',
      price: 123,
      reviewRating: 4.5,
      quantity: 10,
    },
    {
      id: 'two',
      imageFileName: 'two.png',
      name: 'two',
      price: 12,
      reviewRating: 3.5,
      quantity: 2,
    },
  ],
};

const dispatch = jest.fn();

test('renders empty cart page', () => {
  render(<Cart />);
  const h1 = screen.getByText('title');
  const emptyText = screen.getByText('empty');
  expect(h1).toBeInTheDocument();
  expect(emptyText).toBeInTheDocument();
});

test('renders 2 elements', () => {
  render(
    <CartContext.Provider value={{ state, dispatch }}>
      <Cart />
    </CartContext.Provider>,
  );
  const elements = screen.getAllByRole('listitem');
  expect(elements).toHaveLength(2);
});

test('removes first element', () => {
  render(
    <CartContext.Provider value={{ state, dispatch }}>
      <Cart />
    </CartContext.Provider>,
  );
  fireEvent.click(screen.getAllByText('remove')[0]);

  expect(dispatch).toBeCalledWith({ payload: 'one', type: 'REMOVE' });
});
