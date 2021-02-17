import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import './Menu.scss';

const Menu = ({ mattresses, selectedId, onSelect }: IMenuProps): JSX.Element => {
  const { t } = useTranslation('home');
  const mattressItems = mattresses.map(({ id, name }: IMattress) => (
    <li key={id} className={classNames({ selected: id === selectedId })}>
      <button type="button" onClick={() => onSelect(id)}>
        {name}
      </button>
    </li>
  ));
  return (
    <menu className="menu">
      <h2>{t('menu.title')}</h2>
      <ul>{mattressItems}</ul>
    </menu>
  );
};

const MattressPropType = propTypes.shape({
  id: propTypes.string.isRequired,
  imageFileName: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  reviewRating: propTypes.number.isRequired,
});

Menu.propTypes = {
  mattresses: propTypes.arrayOf(MattressPropType),
  selectedId: propTypes.string,
};

Menu.defaultProps = {
  mattresses: [],
  selectedId: null,
};

interface IMenuProps {
  mattresses: IMattress[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default Menu;
