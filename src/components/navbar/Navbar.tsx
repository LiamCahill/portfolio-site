import React, { useState } from 'react'
import { INavbar } from '../../types/NavbarTypes'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Hamburger } from './Hamburger'


export const NavbarTemplate = ({ data }: { data: INavbar }) => {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active);
    // after state has been updated,

    // set the class in state for the navbar accordingly
    active
      ? setNavBarActiveClass('is-active')
      : setNavBarActiveClass('')

  }


  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">

        <div className="navbar-brand">
          <Logo logo={data.logoImage} />
          <Hamburger
            navBarActiveClass={navBarActiveClass}
            toggleHamburger={toggleHamburger}
          />
        </div>

        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Menu menuItems={data.menuItems} />
          </div>
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