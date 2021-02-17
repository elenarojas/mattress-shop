import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import i18n from '../../../utils/i18n';
import './LanguageSwitch.scss';

const Cart = ({ className }: ICartProps): JSX.Element => {
  return (
    <ul className={classNames('language-switch', className)}>
      <li key="en">
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
          EN
        </button>
      </li>
      <li key="es">
        <button type="button" onClick={() => i18n.changeLanguage('es')}>
          ES
        </button>
      </li>
    </ul>
  );
};

Cart.propTypes = {
  className: PropTypes.string,
};

Cart.defaultProps = {
  className: null,
};

interface ICartProps {
  className: string;
}

export default Cart;
