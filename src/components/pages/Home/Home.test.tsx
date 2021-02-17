import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { CartContext } from '../../../context/CartProvider';
import Home from './Home';

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
  ],
};

const newItem = {
  id: 'classic',
  imageFileName: 'classic-carousel.jpg',
  name: 'Saatva Classic',
  price: 999,
  reviewRating: 4.9,
  quantity: 0,
};

const dispatch = jest.fn();

test('renders title', () => {
  render(<Home />);
  const h1 = screen.getByText('title');
  expect(h1).toBeInTheDocument();
});

test('adds item to cart', () => {
  render(
    <CartContext.Provider value={{ state, dispatch }}>
      <Home />
    </CartContext.Provider>,
  );
  fireEvent.click(screen.getAllByText('addToCart')[0]);
  expect(dispatch).toBeCalledWith({ payload: newItem, type: 'ADD' });
});
