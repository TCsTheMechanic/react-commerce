import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { FiSun, FiMoon } from 'react-icons/fi'
import { TiShoppingCart } from 'react-icons/ti'

import { HeaderContent, RightMenu } from './headerStyles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext)

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
          onChange={ () => {} }
          checked={ true }
          checkedIcon={ <FiSun/> }
          uncheckedIcon={ <FiMoon/> }
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
