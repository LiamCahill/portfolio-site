import React, { useState } from 'react'
import { INavbar } from '../../types/LayoutTypes'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Hamburger } from './Hamburger'


export const NavbarTemplate = ({ data }: { data: INavbar }) => {
  const [active, setActive] = useState(false)
  const [hamburgerIsActive, setHamburgerIsActive] = useState('')

  const toggleHamburger = () => {
    setActive(!active);

    active
      ? setHamburgerIsActive('is-active')
      : setHamburgerIsActive('')

  }

  return (
    <nav>
      <div>
        <Logo logo={data.logoImage} />
        <Hamburger
          hamburgerIsActive={hamburgerIsActive}
          toggleHamburger={toggleHamburger}
        />
      </div>

      {/* CSS class hides the menu when the hamburger is in use and is not active*/}
      <div
        className={`navbar-menu ${hamburgerIsActive}`}
      >
        <div>
          <Menu menuItems={data.menuItems} />
        </div>
      </div>

    </nav>
  )
}


export const Navbar = ({ data }: { data: INavbar | null }) => {
  if (!data) {
    return null;
  }
  return <NavbarTemplate data={data} />;
};