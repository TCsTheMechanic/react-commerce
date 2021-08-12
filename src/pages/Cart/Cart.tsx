import React from 'react';
import Header from '../../components/Header/Header';

import { CartPage } from './cartStyles';

interface Props {
  toggleTheme(): void
}

const Cart: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <CartPage>
      <Header toggleTheme={ toggleTheme }/>
      Cart Page
    </CartPage>
  )
}

export default Cart;
