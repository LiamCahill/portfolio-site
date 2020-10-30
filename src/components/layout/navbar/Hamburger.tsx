import React, { Fragment } from 'react'

interface TProps {
    hamburgerIsActive: string,
    toggleHamburger: Function
}
export const Hamburger = ({ hamburgerIsActive, toggleHamburger }: TProps) => {
    return (
        <Fragment>
            <div
                className={`navbar-burger burger ${hamburgerIsActive}`}
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
