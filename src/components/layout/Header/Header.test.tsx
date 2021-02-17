import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './Header';

test('renders logo', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();
});
