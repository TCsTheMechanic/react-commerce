import { useContext } from 'react';
import Routes from './Routes';
import { ThemeProvider } from "styled-components";
import { SelectThemeContext, SelectThemeContextProvider } from './contexts/SelectThemeContext';

import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';

import GlobalStyle from './styles/globalStyles';

const App = () => {
  const { theme } = useContext(SelectThemeContext)

  function toggleTheme() {
    return theme === 'lightTheme' ? lightTheme : darkTheme
  }

  return (
    <ThemeProvider theme={toggleTheme}>
      <SelectThemeContextProvider>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </SelectThemeContextProvider>
    </ThemeProvider>
  );
}

export default App;
