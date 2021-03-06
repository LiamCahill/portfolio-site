import React, { Fragment } from 'react'
import { TSocialLink } from '../../../types/LayoutTypes'


export const Socials = ({ socialLinks }: { socialLinks: Array<TSocialLink> }) => {
    return (
        <Fragment>
            {socialLinks.length > 0 && (
                <ul className="footer-socialMenu">
                    {socialLinks.map(socialLink => {
                        const socialLinkImage = socialLink.image.publicURL
                        return (
                            <li key={socialLink.linkURL} className="footer-socialMenuItem">
                                <a
                                    className="footer-socialLink"
                                    href={socialLink.linkURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="footer-socialLinkIcon"
                                        src={socialLinkImage}
                                        alt={socialLink.imageAlt}
                                        style={{ width: '20px' }}
                                    />
                                    {socialLink.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            )}
        </Fragment>
    )
}
