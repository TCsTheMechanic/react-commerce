import React from "react";

import Header from "../../components/Header/Header";

import { StorePage } from "./storeStyles";

interface Props {
  toggleTheme(): void
}

const Store: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <StorePage>
      <Header toggleTheme={ toggleTheme }/>
      Store Page
    </StorePage>
  )
}

export default Store
