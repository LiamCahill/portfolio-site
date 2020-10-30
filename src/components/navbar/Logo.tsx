import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { TLogoImage } from '../../types/NavbarTypes'

export const Logo = ({ logo }: { logo: TLogoImage }) => {
    const logoImage = logo.image.publicURL

    return (
        <Fragment>
            <Link to="/" className="navbar-item" title="Logo">
                <img src={logoImage} alt={logo.imageAlt} style={{ width: '40px' }} />
            </Link>
        </Fragment>
    )
}
