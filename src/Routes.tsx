import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Cart from "./pages/Cart/Cart";

const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <Route
        exact path='/'
        render={() => <Store />}
      />
      <Route
        exact path='/cart'
        render={() => <Cart />}
      />
    </BrowserRouter>
  )
}

export default Routes;
