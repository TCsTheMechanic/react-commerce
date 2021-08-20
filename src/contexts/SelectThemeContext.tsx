import { createContext, ReactNode, useEffect, useState } from "react";

type SelectThemeContextType = {
  theme: string
  toggleTheme: () => void
}

type SelectThemeContextProps = {
  children: ReactNode
}

export const SelectThemeContext = createContext({} as SelectThemeContextType)

export function SelectThemeContextProvider(props: SelectThemeContextProps) {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('theme')

    return storageValue ? JSON.parse(storageValue) : JSON.parse('darkTheme')
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  function toggleTheme() {
    theme === 'lightTheme' ? setTheme('darkTheme') : setTheme('lightTheme')
  }

  return (
    <SelectThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </SelectThemeContext.Provider>
  )
}
