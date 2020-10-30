import React, { Fragment } from 'react'
import { IExperience } from '../../types/ContentTypes'

export const Experiences = ({ data }: { data: Array<IExperience> }) => {
    return (
        <Fragment>
            <div>
                {'<--Start Experiences-->'}
                {data.length > 0 && (
                    <ul>
                        {data.map(experience => {
                            const dateRange = DateRange(experience.startingDate, experience.endingDate)
                            return (
                                <li key={experience.company}>
                                    <span>
                                        <h1>{experience.title}</h1>
                                        <h2>
                                            <a href={experience.companyWebsite}>{experience.company}</a>
                                        </h2>
                                        <h3>{experience.location}</h3>
                                        <h4>{dateRange}</h4>
                                        <span>
                                            {experience.duties.map(duty => {
                                                return (
                                                    <p key={duty.duty}>{duty.duty}</p>
                                                )
                                            })}
                                        </span>
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                )}
                {'<--End Experiences-->'}
            </div>
        </Fragment>
    )
}
const DateRange = (startingDate: string, endingDate: string): string => {
    return startingDate + ' to ' + endingDate
}