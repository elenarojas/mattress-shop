import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';

const mattresses = [
  {
    id: 'one',
    name: 'one',
    price: 999,
    reviewRating: 2,
    imageFileName: 'one.png',
    quantity: 0,
  },
];

const onSelect = jest.fn();

test('Renders Menu', () => {
  render(<Menu mattresses={mattresses} onSelect={onSelect} />);
  const menuTitle = screen.getByText('menu.title');
  const listItems = screen.getAllByRole('listitem');
  expect(menuTitle).toBeInTheDocument();
  expect(listItems).toHaveLength(1);
});

test('Selects item', () => {
  render(<Menu mattresses={mattresses} onSelect={onSelect} />);
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(onSelect).toBeCalled();
});
