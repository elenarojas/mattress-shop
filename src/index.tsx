import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { CartProvider } from './context/CartProvider';
import App from './App';
import i18n from './utils/i18n';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CartProvider>
        <App />
      </CartProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
