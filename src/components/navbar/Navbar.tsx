import React, { useState } from 'react'
import { INavbarData } from '../../types/NavbarTypes'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Hamburger } from './Hamburger'


export const NavbarTemplate = ({ data }: { data: INavbarData }) => {

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

interface TProps {
  data: {
    edges: Array<{
      node: {
        id: string,
        frontmatter: INavbarData
      }
    }>
  }

}
export const Navbar = (props: TProps) => {
  if (!props.data) {
    return null;
  }
  const data: INavbarData = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};