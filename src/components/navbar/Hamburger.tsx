import React, { Fragment } from 'react'

interface TProps {
    navBarActiveClass: string,
    toggleHamburger: Function
}
export const Hamburger = ({ navBarActiveClass, toggleHamburger }: TProps) => {
    return (
        <Fragment>
            <div
                className={`navbar-burger burger ${navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => toggleHamburger()}
            >
                {/* Three lines for hamburger menu */}
                <span />
                <span />
                <span />
            </div>

        </Fragment>
    )
}
