import React from "react";

import Header from "../../components/Header/Header";

import { Container } from "./storeStyles";

interface Props {
  toggleTheme(): void
}

const Store: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Header toggleTheme={ toggleTheme }/>
    </Container>
  )
}

export default Store
