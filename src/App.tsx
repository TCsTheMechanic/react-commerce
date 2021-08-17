import { useState } from 'react';
import Routes from './Routes';
import { ThemeProvider } from "styled-components";
import { SelectThemeContext } from './contexts/SelectThemeContext';

import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme";
import GlobalStyle from './styles/globalStyles';

const App = () => {
  const [theme, setTheme] = useState('darkTheme')

  const checkTheme = () => {
    return theme === 'darkTheme' ? darkTheme : lightTheme
  }

  return (
    <ThemeProvider theme={checkTheme}>
      <SelectThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </SelectThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
