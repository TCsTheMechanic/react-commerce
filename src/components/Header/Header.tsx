import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';

import { TiShoppingCart } from 'react-icons/ti'
import { FaUserCircle } from 'react-icons/fa'

import { HeaderContent, RightMenu, CartButton } from './headerStyles';

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  const history = useHistory();

  function navigateToCart() {
    history.push('/cart')
  }

  return (
    <HeaderContent>
      <div>
        Store Title
      </div>

      <div>
        About Us
      </div>

      <RightMenu>
        <Switch
          onChange={toggleTheme}
          checked={title === 'lightTheme'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={24}
          width={60}
          offColor={colors.background}
          onColor={colors.secondary}
        />

        <CartButton onClick={navigateToCart}>
          <TiShoppingCart />
        </CartButton>

        <FaUserCircle/>

      </RightMenu>
    </HeaderContent>
  )
}

export default Header
