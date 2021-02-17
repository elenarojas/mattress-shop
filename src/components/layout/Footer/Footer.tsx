import React from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.scss';

const Footer = (): JSX.Element => {
  const { t } = useTranslation('layout');
  return (
    <footer>
      <div className="container">{t('footerCopy')}</div>
    </footer>
  );
};

export default Footer;
