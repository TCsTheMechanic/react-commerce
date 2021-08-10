import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Store from "./pages/Store/Store";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route
        exact path='/'
        render={() => <Store/>}
      />
    </BrowserRouter>
  )
}

export default Routes;
