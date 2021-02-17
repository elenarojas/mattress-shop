import { Route, Router, Switch } from 'react-router-dom';
import React from 'react';

import Cart from './components/pages/Cart/Cart';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import history from './utils/history';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

const App = (): JSX.Element => {
  return (
    <Router history={history}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
