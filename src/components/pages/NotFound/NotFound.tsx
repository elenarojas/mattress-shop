import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = (): JSX.Element => {
  const { t } = useTranslation('layout');
  return <h1>{t('notFound')}</h1>;
};

export default NotFound;
