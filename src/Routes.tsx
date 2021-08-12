import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme";
import GlobalStyle from './styles/globalStyles'

import Store from "./pages/Store/Store";

const Routes: React.FC = () => {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'darkTheme' ? lightTheme : darkTheme)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route
          exact path='/'
          render={() => <Store toggleTheme={ toggleTheme }/>}
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routes;
