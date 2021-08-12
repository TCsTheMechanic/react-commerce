import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { TiShoppingCart } from 'react-icons/ti'

import { HeaderContent, RightMenu } from './headerStyles';

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

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
          onChange={ toggleTheme }
          checked={ title === 'lightTheme' }
          checkedIcon={ false }
          uncheckedIcon={ false }
          height={ 24 }
          width={ 60 }
          offColor={ colors.background }
          onColor={ colors.secondary }
        />
        <TiShoppingCart/>
      </RightMenu>
    </HeaderContent>
  )
}

export default Header
