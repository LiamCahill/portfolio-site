import React, { Fragment } from 'react'
import { IProject } from '../../types/ContentTypes'
import githubIcon from '../../../static/img/github.svg'
import externalIcon from '../../../static/img/external.svg'

export const Projects = ({ data }: { data: Array<IProject> }) => {
    console.log(data)
    return (
        <Fragment>
            <div>
                {'<--Start Projects-->'}
                {data.length > 0 && (
                    <ul>
                        {data.map(project => {
                            const projectImage = project.image.publicURL
                            return (
                                <li key={project.title}>
                                    <span>
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>

                                        <img src={projectImage} alt={project.title} />
                                        <div>
                                            {project.technologies.map(technology => {
                                                { technology.technology }
                                                { technology.technologyIcon }
                                            })}
                                        </div>
                                        <div>
                                            {(project.externalLink && <a href={project.externalLink}><img src={githubIcon} style={{ width: "20px" }} alt="github link" /></a>)}
                                            {(project.githubLink && <a href={project.githubLink}><img src={externalIcon} style={{ width: "20px" }} alt="external link" /></a>)}
                                        </div>

                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                )}
                {'<--End Projects-->'}
            </div>
        </Fragment>
    )
}
