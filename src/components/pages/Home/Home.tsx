import { useTranslation } from 'react-i18next';
import React from 'react';

import useHome from './useHome';
import Menu from '../../generics/Menu/Menu';
import Stars from '../../generics/Stars/Stars';
import './Home.scss';

const Home = (): JSX.Element => {
  const { t } = useTranslation('home');
  const { mattresses, onSelectMattress, selectedMattress, onAddToCart } = useHome();

  return (
    <div className="home-page">
      <img src={`/images/${selectedMattress?.imageFileName}`} alt={selectedMattress?.name} />
      <section>
        <h1>{t('title')}</h1>
        <Menu mattresses={mattresses} onSelect={onSelectMattress} selectedId={selectedMattress?.id} />
        <div className="home-page__selected-info">
          <span>{selectedMattress?.name}</span>
          <span>{`$${selectedMattress?.price}`}</span>
        </div>
        <Stars className="home-page__stars" rating={selectedMattress?.reviewRating} />
        <button className="home-page__add-btn" type="button" onClick={onAddToCart}>
          {t('addToCart')}
        </button>
      </section>
    </div>
  );
};

export default Home;
