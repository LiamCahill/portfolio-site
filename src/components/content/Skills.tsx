import React, { Fragment } from 'react'
import { ISkill } from '../../types/ContentTypes'

export const Skills = ({ data }: { data: Array<ISkill> }) => {
    return (
        <Fragment>
            <div>
                {'<--Start Skills-->'}
                {data.length > 0 && (
                    <ul>
                        {data.map(skill => {
                            const skillIcon = skill.icon?.publicURL || null
                            return (
                                <li key={skill.name}>
                                    <span>
                                        <p>{skill.name}</p>
                                        {skillIcon && (<img
                                            src={skillIcon}
                                            style={{ width: '20px' }}
                                        />)}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                )}
                {'<--End Skills-->'}
            </div>
        </Fragment>
    )
}
