import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageSwitch from './LanguageSwitch';

test('renders main', () => {
  render(<LanguageSwitch />);
  const en = screen.getByText('EN');
  const es = screen.getByText('ES');
  expect(en).toBeInTheDocument();
  expect(es).toBeInTheDocument();
});
