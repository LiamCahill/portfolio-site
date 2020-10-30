import React, { Fragment } from 'react'
import { TEmail } from '../../types/FooterTypes'

export const Email = ({ email }: { email: TEmail }) => {
    return (
        <Fragment>
            <a href={`mailto:${email}`}>{email.email}</a>
        </Fragment>
    )
}
