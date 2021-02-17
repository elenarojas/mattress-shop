import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

import './Header.scss';
import Cart from '../../generics/Cart/Cart';
import LanguageSwitch from '../../generics/LanguageSwitch/LanguageSwitch';

const Header = (): JSX.Element => {
  const { t } = useTranslation('layout');
  return (
    <header className="app-header">
      <div className="container">
        <Link to="/">
          <img src="/images/logo.png" alt={t('companyName')} />
        </Link>
        <div className="app-header__menu">
          <LanguageSwitch className="app-header__language-switch" />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
