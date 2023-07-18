import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const mobile = window.innerWidth <= 768
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header' id='Header'>
      <div className='logo-wrapper'>
        <img src={Logo} className='logo' alt='' />
        <span className='stroke-text'>TORNADO GYM</span>
        <hr />
      </div>

      {menuOpened === false && mobile === true ? (
        <div className='burger' onClick={() => setMenuOpened(true)}>
          <img src={Bars} alt='' />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <NavLink onClick={() => setMenuOpened(false)} to='/'>
              İlkin
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpened(false)} to='programs'>
              Proqramlar
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpened(false)} to='reasons'>
              Haqqımızda
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpened(false)} to='Plans'>
              Qiymətlər
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpened(false)} to='coaches'>
              Təlimçilər
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
