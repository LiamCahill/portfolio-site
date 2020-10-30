import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { TLogoImage } from '../../../types/LayoutTypes'

export const Logo = ({ logo }: { logo: TLogoImage }) => {
    const logoImage = logo.image.publicURL

    return (
        <Fragment>
            <Link to="/" title={logo.imageAlt}>
                <img src={logoImage} alt={logo.imageAlt} style={{ width: '40px' }} />
            </Link>
        </Fragment>
    )
}
