import { createContext, Dispatch, SetStateAction } from "react";

type SelectThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const SelectThemeContext = createContext({} as SelectThemeContextType)
