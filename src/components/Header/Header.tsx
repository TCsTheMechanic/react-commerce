import React from 'react';

import { Container } from './headerStyles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="title">
        Store Title
      </div>
      <div className="mainMenu">
        About Us
      </div>
      <div className="cart">
        Cart Icon
      </div>
    </Container>
  )
}

export default Header
