import React, { Fragment } from 'react'
import { IAbout } from '../../types/ContentTypes'

export const About = ({ data }: { data: IAbout }) => {
    return (
        <Fragment>
            <div>
                {'<--Start About-->'}
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {'<--End About-->'}
            </div>
        </Fragment>
    )
}
