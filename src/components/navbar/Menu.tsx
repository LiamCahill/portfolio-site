import React, { Fragment } from 'react'
import { TMenuItem } from '../../types/NavbarTypes'
import { CustomLink } from '../CustomLink'

export const Menu = ({ menuItems }: { menuItems: Array<TMenuItem> }) => {
    return (
        <Fragment>
            {menuItems.length > 0 && (
                <ul>
                    {menuItems.map(menuItem => (
                        <li key={menuItem.linkURL}>
                            <CustomLink
                                linkType={menuItem.linkType}
                                linkURL={menuItem.linkURL}
                                className="navbar-menuLink"
                            >
                                {menuItem.label}
                            </CustomLink>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    )
}
