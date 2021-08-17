import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { SelectThemeContext } from '../../App';
import { useHistory } from 'react-router';

import { TiShoppingCart } from 'react-icons/ti'
import { FaUserCircle } from 'react-icons/fa'

import { HeaderContent, RightMenu, CartButton } from './headerStyles';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext)

  const { theme, setTheme } = useContext(SelectThemeContext)

  const toggleTheme = () => {
    theme === 'darkTheme' ? setTheme('lightTheme') : setTheme('darkTheme')
  }

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
